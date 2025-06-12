import React, { createContext } from 'react'
import LayoutAdmin from '@/Layouts/LayoutAdmin'
import Heading from '@/components/Heading/Heading'
import Filters from './partials/index/Filters'
import EmployersTable from './partials/index//EmployersTable'
import Pagination from './partials/index/Pagination'
import { Link, router } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import { ListRestart, Plus } from 'lucide-react'

export const EmployerIndexContext = createContext({})

export default function Index({ employers, filters }) {
    return (
        <LayoutAdmin title="Employés">
            <EmployerIndexContext.Provider value={{ employers, filters }}>
                <div className="space-y-6">
                    {/* En-tête */}
                    <Heading
                        title="Gestion des employés"
                        description="Ajoutez, modifiez ou supprimez des employés."
                    />

                    {/* Boutons Nouvelle et Réinitialiser */}
                    <div className="flex justify-between items-center">
                        <Button className="bg-indigo-500 hover:bg-indigo-600">
                            <Link
                                href={route('employers.create')}
                                className="flex gap-3 items-center"
                            >
                                <Plus />
                                Nouveau Employe
                            </Link>
                        </Button>

                    </div>

                    {/* Filtrage */}
                    <Filters />

                    {/* Tableau des employés */}
                    <EmployersTable />

                    {/* Pagination */}
                    <Pagination />
                </div>
            </EmployerIndexContext.Provider>
        </LayoutAdmin>
    )
}
