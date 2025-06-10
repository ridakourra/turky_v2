import { useForm } from '@inertiajs/react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import React, { useContext } from 'react'
import { EmployerIndexContext } from '../../Index'

export default function Filters() {
    const { filters } = useContext(EmployerIndexContext)
    const { data, setData, get, processing } = useForm({
        search: filters.search || '',
        fonction: filters.fonction || '',
    })

    function onFilter(e) {
        e.preventDefault()
        get(route('employers.index'), {
            preserveState: true,
            preserveScroll: true,
            data,
        })
    }

    return (
        <form onSubmit={onFilter} className="flex space-x-2">
            <Input
                placeholder="Recherche par CIN..."
                value={data.search}
                onChange={e => setData('search', e.target.value)}
            />
            <select
                value={data.fonction}
                onChange={e => setData('fonction', e.target.value)}
                className="border rounded px-2"
            >
                <option value="">Toutes fonctions</option>
                <option value="directeur">Directeur</option>
                <option value="comptable">Comptable</option>
                <option value="livreur">Livreur</option>
            </select>
            <Button type="submit" disabled={processing}>
                Filtrer
            </Button>
        </form>
    )
}
