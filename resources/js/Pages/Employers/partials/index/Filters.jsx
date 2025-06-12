import { router, useForm } from '@inertiajs/react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import React, { useContext } from 'react'
import { EmployerIndexContext } from '../../Index'
import { Card } from '@/components/ui/card'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { ListRestart, Search } from 'lucide-react'
import { Label } from '@/components/ui/label'

export default function Filters() {
    const { filters } = useContext(EmployerIndexContext)
    const { data, setData, get, processing } = useForm({
        search: filters.search || '', // cin , nom , telephone, adresse
        fonction: filters.fonction || '',
        actif: filters.actif || '',
        date_debut_embauche: filters.date_debut_embauche || '',
        date_fin_embauche: filters.date_fin_embauche || '',
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
        <Card className="p-4">
            <form onSubmit={onFilter} className="space-y-4  ">
                <div className="w-full space-y-2">
                    {/* Search */}
                    <Input
                        placeholder="Recherche par CIN, Nom, Telephone, Adresse..."
                        value={data.search}
                        onChange={e => setData('search', e.target.value)}
                    />

                    <div className="w-full gap-2 flex">
                        {/* Fonction */}
                        <Select
                            className="w-max"
                            value={data.fonction}
                            onValueChange={value =>
                                setData('fonction', value === 'all' ? '' : value)
                            }
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Fonctions" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Toutes fonctions</SelectItem>
                                <SelectItem value="directeur">Directeur</SelectItem>
                                <SelectItem value="comptable">Comptable</SelectItem>
                                <SelectItem value="livreur">Livreur</SelectItem>
                            </SelectContent>
                        </Select>
                        {/* Actif */}
                        <Select
                            className="w-max"
                            value={data.actif}
                            onValueChange={value => setData('actif', value === 'all' ? '' : value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Actif?" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Tous</SelectItem>
                                <SelectItem value="1">Actif</SelectItem>
                                <SelectItem value="0">Non Actif</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Div of date embauche */}
                    <div className="w-full flex gap-2">
                        <div className="w-full">
                            <Label>Date Debut Embauche</Label>
                            <Input
                                value={data.date_debut_embauche}
                                type="date"
                                onChange={e => setData('date_debut_embauche', e.target.value)}
                            />
                        </div>
                        <div className="w-full">
                            <Label>Date Fin Embauche</Label>
                            <Input
                                value={data.date_fin_embauche}
                                type="date"
                                onChange={e => setData('date_fin_embauche', e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-end items-center gap-2">
                    <Button
                        type="button"
                        onClick={() =>
                            router.get(
                                route('employers.index'),
                                {},
                                {
                                    preserveState: true,
                                    preserveScroll: true,
                                }
                            )
                        }
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded"
                    >
                        <ListRestart />
                        Réinitialiser les filtres
                    </Button>
                    <Button type="submit" disabled={processing}>
                        <Search /> Filtrer
                    </Button>
                </div>
            </form>
        </Card>
    )
}
