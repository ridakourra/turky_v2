import React, { createContext } from 'react'
import LayoutAdmin from '@/Layouts/LayoutAdmin'
import Heading from '@/components/Heading/Heading'

import Filters from './partials/index/Filters'
import ClientsTable from './partials/index/ClientsTable'
import Pagination from './partials/index/Pagination'
import { Card } from '@/components/ui/card'
import { Link } from '@inertiajs/react'
import { Plus, Users, UserPlus, Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const ClientContext = createContext({})

export default function Index({ clients, filters }) {
    return (
        <LayoutAdmin title="Clients">
            <ClientContext.Provider value={{ clients, filters }}>
                <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(99,102,241,0.05)_1px,_transparent_0)] bg-[length:20px_20px]"></div>

                    <div className="relative z-10 max-w-7xl mx-auto space-y-8 p-6">
                        {/* Hero Header */}
                        <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 text-white">
                            <div className="relative p-8">
                                <div className="absolute inset-0 bg-black/10"></div>
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <div className="p-4 bg-white/20 rounded-2xl">
                                                <Users className="w-8 h-8 text-white" />
                                            </div>
                                            <div>
                                                <h1 className="text-3xl font-bold">
                                                    Gestion des Clients
                                                </h1>
                                                <p className="text-indigo-100 mt-1">
                                                    Gérez votre base de données clients facilement
                                                </p>
                                            </div>
                                        </div>

                                        {/* Quick Stats */}
                                        <div className="hidden md:flex items-center space-x-6">
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-white">
                                                    {clients?.data?.length || 0}
                                                </div>
                                                <div className="text-xs text-indigo-200">
                                                    Clients actifs
                                                </div>
                                            </div>
                                            <div className="w-px h-12 bg-white/20"></div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-white">
                                                    {clients?.total || 0}
                                                </div>
                                                <div className="text-xs text-indigo-200">
                                                    Total clients
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Actions Section */}
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        Actions Disponibles
                                    </h2>
                                    <p className="text-gray-600">
                                        Ajoutez de nouveaux clients ou gérez les existants
                                    </p>
                                </div>
                            </div>

                            <Link href={route('clients.create')}>
                                <Button className="group relative overflow-hidden bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 px-6 py-3 h-12">
                                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0"></div>
                                    <div className="relative z-10 flex items-center space-x-3">
                                        <UserPlus className="w-5 h-5" />
                                        <span className="font-medium">Nouveau Client</span>
                                    </div>
                                </Button>
                            </Link>
                        </div>

                        {/* Filters Card */}
                        <Card className="group relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50 transition-all duration-300 hover:shadow-xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                            <div className="relative z-10">
                                <div className="flex items-center space-x-3 p-6 border-b border-gray-100">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-50 text-indigo-600">
                                        <Search className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            Filtres de Recherche
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            Filtrez et recherchez vos clients
                                        </p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <Filters />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
                        </Card>

                        {/* Clients Table Card */}
                        <Card className="group relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50 transition-all duration-300 hover:shadow-xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                            <div className="relative z-10">
                                <div className="flex items-center space-x-3 p-6 border-b border-gray-100">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-100 to-cyan-50 text-cyan-600">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            Liste des Clients
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            Consultez et gérez tous vos clients
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                                            {clients?.data?.length || 0} clients affichés
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <ClientsTable />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 group-hover:w-full"></div>
                        </Card>

                        {/* Pagination */}
                        <div className="flex justify-center">
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4">
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </ClientContext.Provider>
        </LayoutAdmin>
    )
}
