import React, { createContext } from 'react'
import LayoutAdmin from '@/Layouts/LayoutAdmin'
import Heading from '@/components/Heading/Heading'
import Filters from './partials/index/Filters'
import EmployersTable from './partials/index//EmployersTable'
import Pagination from './partials/index/Pagination'
import { router } from '@inertiajs/react'

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
                        <a
                            href={route('employers.create')}
                            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded"
                        >
                            Nouveau employé
                        </a>
                        <button
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
                            Réinitialiser les filtres
                        </button>
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
