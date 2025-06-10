import { useForm } from '@inertiajs/react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useContext } from 'react'
import { ClientContext } from '../../Index'

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
        <form onSubmit={onSearch} className="flex space-x-2">
            <Input
                placeholder="Search by name or CIN..."
                value={data.search}
                onChange={e => setData('search', e.target.value)}
            />
            <Button type="submit" disabled={processing}>
                Search
            </Button>
        </form>
    )
}
