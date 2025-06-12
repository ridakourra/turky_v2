import React from 'react'
import LayoutAdmin from '@/Layouts/LayoutAdmin'
import Heading from '@/components/Heading/Heading'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link, router } from '@inertiajs/react'
import {
    Eye,
    Edit2,
    Trash2,
    StepBack,
    User,
    CreditCard,
    Phone,
    MapPin,
    DollarSign,
} from 'lucide-react'
import { toast, Toaster } from 'sonner'

export default function Show({ client }) {
    const handleDelete = () => {
        if (confirm('Êtes-vous sûr de vouloir supprimer ce client ?')) {
            router.delete(route('clients.destroy', client.id), {
                onSuccess: () => toast.success('Client deleted.'),
            })
        }
    }

    const clientInfo = [
        {
            icon: User,
            label: 'Nom',
            value: client.nom,
            color: 'text-indigo-600',
        },
        {
            icon: CreditCard,
            label: 'CIN',
            value: client.cin,
            color: 'text-blue-600',
        },
        {
            icon: Phone,
            label: 'Téléphone',
            value: client.telephone,
            color: 'text-green-600',
        },
        {
            icon: MapPin,
            label: 'Adresse',
            value: client.adresse,
            color: 'text-orange-600',
        },
        {
            icon: DollarSign,
            label: 'Dettes',
            value: `${client.dettes} DH`,
            color: 'text-red-600',
        },
    ]

    return (
        <LayoutAdmin title="Client Details">
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Enhanced Header */}
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 p-8 text-white shadow-2xl">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative z-10">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                                    <User className="w-8 h-8" />
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold tracking-tight">
                                        Détails du Client
                                    </h1>
                                    <p className="text-indigo-100 mt-1">
                                        Informations complètes de {client.nom}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                    </div>

                    {/* Enhanced Client Information Card */}
                    <Card className="overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2"></div>
                        <div className="p-8">
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {clientInfo.map((info, index) => {
                                    const IconComponent = info.icon
                                    return (
                                        <div
                                            key={index}
                                            className="group relative overflow-hidden rounded-xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                            <div className="relative z-10">
                                                <div className="flex items-center space-x-4">
                                                    <div
                                                        className={`p-3 rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-50 ${info.color} transition-colors duration-300 group-hover:from-indigo-200 group-hover:to-indigo-100`}
                                                    >
                                                        <IconComponent className="w-6 h-6" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium text-gray-500 mb-1">
                                                            {info.label}
                                                        </p>
                                                        <p className="text-lg font-semibold text-gray-900 truncate">
                                                            {info.value}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </Card>

                    {/* Enhanced Action Buttons */}
                    <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <div className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full mr-3"></div>
                                Actions Disponibles
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                <Link href={route('clients.edit', client.id)}>
                                    <Button className="group relative overflow-hidden bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 px-6 py-3">
                                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0"></div>
                                        <div className="relative z-10 flex items-center space-x-2">
                                            <Edit2 className="w-4 h-4" />
                                            <span className="font-medium">Éditer</span>
                                        </div>
                                    </Button>
                                </Link>

                                <Button
                                    onClick={handleDelete}
                                    className="group relative overflow-hidden bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 px-6 py-3"
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0"></div>
                                    <div className="relative z-10 flex items-center space-x-2">
                                        <Trash2 className="w-4 h-4" />
                                        <span className="font-medium">Supprimer</span>
                                    </div>
                                </Button>

                                <Link href={route('clients.index')}>
                                    <Button className="group relative overflow-hidden bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 px-6 py-3">
                                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0"></div>
                                        <div className="relative z-10 flex items-center space-x-2">
                                            <StepBack className="w-4 h-4" />
                                            <span className="font-medium">Retourner</span>
                                        </div>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <Toaster />
        </LayoutAdmin>
    )
}
