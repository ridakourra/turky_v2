import React, { createContext } from 'react'
import LayoutAdmin from '@/Layouts/LayoutAdmin'
import Heading from '@/components/Heading/Heading'

import Filters from './partials/index/Filters'
import ClientsTable from './partials/index/ClientsTable'
import Pagination from './partials/index/Pagination'
import { Card } from '@/components/ui/card'
import { Link } from '@inertiajs/react'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const ClientContext = createContext({})

export default function Index({ clients, filters }) {
    return (
        <LayoutAdmin title="Clients">
            <ClientContext.Provider value={{ clients, filters }}>
                <div className="space-y-6">
                    <Heading
                        title="Gestion de Clients"
                        description="Ajoutez, modifiez ou supprimez les clients."
                    />

                    <Button className="bg-indigo-500 hover:bg-indigo-600">
                        <Link href={route('clients.create')} className="flex gap-3 items-center">
                            <Plus />
                            Nouveau Client
                        </Link>
                    </Button>

                    <Card className="p-5">
                        <Filters />
                    </Card>

                    <Card className="p-5">
                        <ClientsTable />
                    </Card>

                    <Pagination />
                </div>
            </ClientContext.Provider>
        </LayoutAdmin>
    )
}
