import { Button } from '@/components/ui/button'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import axios from 'axios'
import { ChevronsUpDown } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ChooseProduct({ setDataForm }) {
    const [data, setData] = useState([])
    const [value, setValue] = useState(null)
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState('')
    
    const fetchProducts = async () => {
        try {
            const response = await axios.get('/api/products')
            setData(response.data)
        } catch (err) {
            console.log('Error fetch API Products!', err)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    useEffect(() => {
        if (value !== null) {
            setDataForm('produit_id', value)
        }
    }, [value])

    const filtered = data.filter(product =>
        product.nom.toLowerCase().includes(search.toLowerCase())
    )


    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    className="w-full flex justify-between"
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                >
                    {value ? data.find(prod => prod.id === value)?.nom : 'Choisir un produit...'}
                    <ChevronsUpDown className="opacity-50 ml-2" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full">
                <Command>
                    <CommandInput
                        placeholder="Rechercher..."
                        value={search}
                        onValueChange={text => setSearch(text)}
                        className="h-9"
                    />
                    <CommandList>
                        <CommandEmpty>Aucun produit trouvé.</CommandEmpty>
                        <CommandGroup>
                            {filtered.map(product => (
                                <CommandItem
                                    key={product.id}
                                    value={String(product.id)}
                                    onSelect={() => {
                                        setValue(product.id)
                                        setOpen(false)
                                        setSearch('')
                                    }}
                                >
                                    {product.nom}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
