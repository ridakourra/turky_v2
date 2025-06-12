import Heading from '@/components/Heading/Heading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Toast from '@/functions/Toast'
import LayoutAdmin from '@/Layouts/LayoutAdmin'
import { Link, router } from '@inertiajs/react'
import {
    Activity,
    ArrowLeft,
    Briefcase,
    Calendar,
    DollarSign,
    Pen,
    Trash,
    User,
    CreditCard,
    Phone,
    MapPin,
    TrendingUp,
    Clock,
    Target,
} from 'lucide-react'

export default function Show({ employer, absences }) {
    const handleDelete = id => {
        if (confirm('Êtes-vous sûr de vouloir supprimer ce employer ?')) {
            router.delete(route('employers.destroy', id), {
                preserveState: true,
                onSuccess: page => {
                    Toast(page.props.flash)
                },
            })
        }
    }

    const personalInfo = [
        {
            icon: CreditCard,
            label: 'CIN',
            value: employer.cin,
            color: 'text-blue-600',
        },
        {
            icon: Phone,
            label: 'Téléphone',
            value: employer.user.telephone,
            color: 'text-green-600',
        },
        {
            icon: MapPin,
            label: 'Adresse',
            value: employer.user.adresse,
            color: 'text-orange-600',
        },
        {
            icon: DollarSign,
            label: 'Dettes',
            value: employer.user.dettes,
            color: 'text-red-600',
        },
    ]

    if (employer?.salaires[0]?.type !== 'unite') {
        personalInfo.push({
            icon: TrendingUp,
            label: 'Salaire',
            value: employer?.salaires[0]?.prix,
            color: 'text-emerald-600',
        })
    }

    return (
        <LayoutAdmin title={`${employer?.user?.nom}`}>
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Enhanced Header Section */}
                    <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 text-white">
                        <div className="relative p-8">
                            <div className="absolute inset-0 bg-black/10"></div>
                            <div className="relative z-10">
                                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-6 lg:space-y-0">
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                                                <User className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <h2 className="text-4xl font-bold tracking-tight">
                                                    {employer.user.nom}
                                                </h2>
                                                <p className="text-indigo-100 mt-1 text-lg">
                                                    Détails de l'Employeur
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-4 items-center">
                                            <div className="flex gap-2 items-center bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                                                <Calendar size={16} />
                                                <span className="text-sm font-medium">
                                                    {employer.date_embauche}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Activity size={16} />
                                                <Badge
                                                    className={`${
                                                        employer.actif
                                                            ? 'bg-emerald-500 hover:bg-emerald-600'
                                                            : 'bg-red-500 hover:bg-red-600'
                                                    } border-0 shadow-md`}
                                                >
                                                    {employer.actif ? 'Actif' : 'Non Actif'}
                                                </Badge>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <Briefcase size={16} />
                                                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                                                    {employer.fonction.charAt(0).toUpperCase() +
                                                        employer.fonction.slice(1)}
                                                </Badge>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <DollarSign size={16} />
                                                <Badge className="bg-green-500 hover:bg-green-600 border-0 shadow-md">
                                                    {employer?.salaires[0]?.type
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                        employer?.salaires[0]?.type.slice(1)}
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        <Link href={route('employers.index')}>
                                            <Button className="group relative overflow-hidden bg-white/20 hover:bg-white/30 text-white border border-white/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                                                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0"></div>
                                                <div className="relative z-10 flex gap-2 items-center">
                                                    <ArrowLeft size={16} />
                                                    <span>Retour</span>
                                                </div>
                                            </Button>
                                        </Link>
                                        <Link href={route('employers.edit', employer.id)}>
                                            <Button className="group relative overflow-hidden bg-white/90 hover:bg-white text-indigo-600 hover:text-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg">
                                                <div className="absolute inset-0 bg-indigo-50 translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0"></div>
                                                <div className="relative z-10 flex gap-2 items-center">
                                                    <Pen size={16} />
                                                    <span className="font-medium">Éditer</span>
                                                </div>
                                            </Button>
                                        </Link>
                                        <Button
                                            onClick={() => handleDelete(employer.id)}
                                            className="group relative overflow-hidden bg-red-500 hover:bg-red-600 text-white transition-all duration-300 hover:scale-105 shadow-lg border-0"
                                        >
                                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0"></div>
                                            <div className="relative z-10 flex gap-2 items-center">
                                                <Trash size={16} />
                                                <span className="font-medium">Supprimer</span>
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                        </div>
                    </Card>

                    {/* Enhanced Personal Information */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Informations Personnelles
                                </h3>
                                <p className="text-gray-600">
                                    Informations personnelles pour l'employeur
                                </p>
                            </div>
                        </div>

                        <Card className="overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2"></div>
                            <div className="p-8">
                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {personalInfo.map((info, index) => {
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
                                                            <p className="text-lg font-semibold text-indigo-600 truncate">
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
                    </div>

                    {/* Enhanced Salary Section */}
                    {employer?.salaires[0]?.type === 'unite' && (
                        <div className="space-y-6">
                            <div className="flex items-center space-x-3">
                                <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        Salaires de l'Employeur
                                    </h3>
                                    <p className="text-gray-600">
                                        Liste des salaires associés à cet employeur
                                    </p>
                                </div>
                            </div>

                            <Card className="overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                                <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2"></div>
                                <div className="p-8 space-y-4">
                                    {employer.salaires?.map((s, index) => (
                                        <div
                                            key={s.id}
                                            className="group flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                                        >
                                            <div className="flex items-center space-x-3">
                                                <div className="p-2 bg-gradient-to-br from-green-100 to-emerald-50 rounded-lg">
                                                    <Target className="w-5 h-5 text-green-600" />
                                                </div>
                                                <span className="text-gray-700 font-medium text-lg">
                                                    {s.produit.nom}
                                                </span>
                                            </div>
                                            <span className="text-green-600 font-bold text-xl bg-green-50 px-4 py-2 rounded-full">
                                                {s.prix}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    )}

                    {/* Enhanced Absences Section */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Absences de l'Employeur
                                </h3>
                                <p className="text-gray-600">
                                    Liste des absences associées à cet employeur
                                </p>
                            </div>
                        </div>

                        <Card className="overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                            <div className="bg-gradient-to-r from-orange-500 to-red-600 h-2"></div>
                            <div className="p-8">
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="group relative overflow-hidden rounded-xl border border-gray-100 bg-gradient-to-br from-white to-orange-50 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                                        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                        <div className="relative z-10">
                                            <div className="flex items-center space-x-4">
                                                <div className="p-3 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600">
                                                    <Clock className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-500 mb-1">
                                                        Total Absences
                                                    </p>
                                                    <p className="text-3xl font-bold text-orange-600">
                                                        {absences.countAll}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 group-hover:w-full"></div>
                                    </div>

                                    <div className="group relative overflow-hidden rounded-xl border border-gray-100 bg-gradient-to-br from-white to-red-50 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                                        <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                        <div className="relative z-10">
                                            <div className="flex items-center space-x-4">
                                                <div className="p-3 rounded-xl bg-gradient-to-br from-red-100 to-red-50 text-red-600">
                                                    <Calendar className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-500 mb-1">
                                                        Ce Mois
                                                    </p>
                                                    <p className="text-3xl font-bold text-red-600">
                                                        {absences.countThisMonth}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-300 group-hover:w-full"></div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}
