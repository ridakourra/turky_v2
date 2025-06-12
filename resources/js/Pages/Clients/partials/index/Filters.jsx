import { Link, router, useForm } from '@inertiajs/react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useContext } from 'react'
import { ClientContext } from '../../Index'
import { ListRestart, Search } from 'lucide-react'
import { Label } from '@radix-ui/react-label'

export default function Filters() {
    const { filters } = useContext(ClientContext)
    const { data, setData, get, processing } = useForm({
        search: filters.search || '',
    })

    function onSearch(e) {
        e.preventDefault()
        get(route('clients.index'), {
            preserveState: true,
            preserveScroll: true,
            data,
        })
    }

    return (
        <form onSubmit={onSearch} className="space-y-3">
            <div className="p-2">
                <Input
                    className="w-full"
                    placeholder="Rechercher par nom ou CIN ou Telephone..."
                    value={data.search}
                    onChange={e => setData('search', e.target.value)}
                />
            </div>
            <div className="w-full flex gap-3 justify-end items-center">
                {/* Search Btn */}
                <Button type="submit" disabled={processing}>
                    <Search /> Rechercher
                </Button>
                {/* Link Reset */}

                <Link href={route('clients.index')}>
                    <Button variant="outline">
                        <ListRestart /> Réinitialiser
                    </Button>
                </Link>
            </div>
        </form>
    )
}
