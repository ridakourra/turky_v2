import React from 'react'
import { useForm } from '@inertiajs/react'
import LayoutAdmin from '@/Layouts/LayoutAdmin'
import Heading from '@/components/Heading/Heading'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { toast, Toaster } from 'sonner'
import { User, CreditCard, Phone, MapPin, DollarSign, Save, ArrowLeft } from 'lucide-react'

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        nom: '',
        cin: '',
        telephone: '',
        adresse: '',
        dettes: 0,
    })

    function handleSubmit(e) {
        e.preventDefault()

        post(route('clients.store'), {
            onSuccess: () => {
                toast.success('Client ajouté avec succès.')
            },
            onError: () => {
                toast.error('Veuillez corriger les erreurs et réessayer.')
            },
            preserveScroll: true,
        })
    }

    return (
        <LayoutAdmin title="Nouveau Client">
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative">
                {/* Pattern Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(99,102,241,0.05)_1px,_transparent_0)] bg-[length:20px_20px]"></div>

                <div className="relative z-10 max-w-4xl mx-auto space-y-8 p-6">
                    {/* Hero Header */}
                    <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 text-white">
                        <div className="relative p-8">
                            <div className="absolute inset-0 bg-black/10"></div>
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

                            <div className="relative z-10 flex items-center space-x-4">
                                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
                                    <User className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold mb-2">
                                        Ajouter un nouveau client
                                    </h1>
                                    <p className="text-indigo-100 text-lg">
                                        Remplissez ce formulaire pour créer un nouveau client dans
                                        votre système
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Main Form Card */}
                    <Card className="group relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                        <div className="relative z-10 p-8">
                            {/* Section Header */}
                            <div className="flex items-center space-x-3 mb-8">
                                <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        Informations Client
                                    </h3>
                                    <p className="text-gray-600">
                                        Saisissez les détails du nouveau client
                                    </p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Form Grid */}
                                <div className="grid gap-6 md:grid-cols-2">
                                    {/* Nom Field */}
                                    <div className="group relative">
                                        <Label
                                            htmlFor="nom"
                                            className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2"
                                        >
                                            <User className="w-4 h-4 text-blue-600" />
                                            <span>Nom Complet</span>
                                        </Label>
                                        <div className="relative">
                                            <Input
                                                id="nom"
                                                value={data.nom}
                                                onChange={e => setData('nom', e.target.value)}
                                                className="pl-4 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-indigo-500/20 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-indigo-300"
                                                placeholder="Entrez le nom complet du client"
                                            />
                                            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-focus-within:w-full"></div>
                                        </div>
                                        {errors.nom && (
                                            <p className="text-red-600 text-sm mt-2 flex items-center space-x-1">
                                                <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                                                <span>{errors.nom}</span>
                                            </p>
                                        )}
                                    </div>

                                    {/* CIN Field */}
                                    <div className="group relative">
                                        <Label
                                            htmlFor="cin"
                                            className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2"
                                        >
                                            <CreditCard className="w-4 h-4 text-cyan-600" />
                                            <span>Carte d'Identité (CIN)</span>
                                        </Label>
                                        <div className="relative">
                                            <Input
                                                id="cin"
                                                value={data.cin}
                                                onChange={e => setData('cin', e.target.value)}
                                                className="pl-4 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-indigo-500/20 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-indigo-300"
                                                placeholder="Ex: AB123456"
                                            />
                                            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-focus-within:w-full"></div>
                                        </div>
                                        {errors.cin && (
                                            <p className="text-red-600 text-sm mt-2 flex items-center space-x-1">
                                                <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                                                <span>{errors.cin}</span>
                                            </p>
                                        )}
                                    </div>

                                    {/* Telephone Field */}
                                    <div className="group relative">
                                        <Label
                                            htmlFor="telephone"
                                            className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2"
                                        >
                                            <Phone className="w-4 h-4 text-green-600" />
                                            <span>Numéro de Téléphone</span>
                                        </Label>
                                        <div className="relative">
                                            <Input
                                                id="telephone"
                                                value={data.telephone}
                                                onChange={e => setData('telephone', e.target.value)}
                                                className="pl-4 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-indigo-500/20 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-indigo-300"
                                                placeholder="Ex: 0612345678"
                                            />
                                            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-focus-within:w-full"></div>
                                        </div>
                                        {errors.telephone && (
                                            <p className="text-red-600 text-sm mt-2 flex items-center space-x-1">
                                                <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                                                <span>{errors.telephone}</span>
                                            </p>
                                        )}
                                    </div>

                                    {/* Dettes Field */}
                                    <div className="group relative">
                                        <Label
                                            htmlFor="dettes"
                                            className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2"
                                        >
                                            <DollarSign className="w-4 h-4 text-emerald-600" />
                                            <span>Dettes Initiales (DH)</span>
                                        </Label>
                                        <div className="relative">
                                            <Input
                                                id="dettes"
                                                type="number"
                                                min="0"
                                                step="0.01"
                                                value={data.dettes}
                                                onChange={e => setData('dettes', e.target.value)}
                                                className="pl-4 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-indigo-500/20 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-indigo-300"
                                                placeholder="0.00"
                                            />
                                            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-focus-within:w-full"></div>
                                        </div>
                                        {errors.dettes && (
                                            <p className="text-red-600 text-sm mt-2 flex items-center space-x-1">
                                                <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                                                <span>{errors.dettes}</span>
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Address Field - Full Width */}
                                <div className="group relative">
                                    <Label
                                        htmlFor="adresse"
                                        className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2"
                                    >
                                        <MapPin className="w-4 h-4 text-orange-600" />
                                        <span>Adresse Complète</span>
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            id="adresse"
                                            value={data.adresse}
                                            onChange={e => setData('adresse', e.target.value)}
                                            className="pl-4 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-indigo-500/20 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-indigo-300"
                                            placeholder="Entrez l'adresse complète du client"
                                        />
                                        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-focus-within:w-full"></div>
                                    </div>
                                    {errors.adresse && (
                                        <p className="text-red-600 text-sm mt-2 flex items-center space-x-1">
                                            <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                                            <span>{errors.adresse}</span>
                                        </p>
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="pt-6 border-t border-gray-100">
                                    <div className="flex items-center justify-between">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            className="group relative overflow-hidden border-2 border-gray-300 hover:border-indigo-300 text-gray-700 hover:text-indigo-700 bg-white hover:bg-indigo-50 px-6 py-3 transition-all duration-300"
                                            onClick={() => window.history.back()}
                                        >
                                            <div className="flex items-center space-x-2">
                                                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                                                <span className="font-medium">Retourner</span>
                                            </div>
                                        </Button>

                                        <Button
                                            type="submit"
                                            disabled={processing}
                                            className="group relative overflow-hidden bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0"></div>
                                            <div className="relative z-10 flex items-center space-x-2">
                                                <Save className="w-4 h-4" />
                                                <span className="font-medium">
                                                    {processing
                                                        ? 'Enregistrement...'
                                                        : 'Enregistrer le Client'}
                                                </span>
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Bottom accent line */}
                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 group-hover:w-full"></div>
                    </Card>
                </div>
            </div>
        </LayoutAdmin>
    )
}
