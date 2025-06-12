import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
    Mail,
    Phone,
    Building2,
    User,
    MapPin,
    FileText,
    BadgeDollarSign,
    FileSignature,
    Check,
    Settings,
    Save,
} from 'lucide-react'
import LayoutAdmin from '@/Layouts/LayoutAdmin'
import { useForm } from '@inertiajs/react'
import Toast from '@/functions/Toast'
import Heading from '@/components/Heading/Heading'

export default function Entreprise({ entreprise }) {
    const { data, setData, errors, post, processing } = useForm({
        nom: entreprise.nom || '',
        responsable: entreprise.responsable || '',
        email: entreprise.email || '',
        telephone: entreprise.telephone || '',
        adresse: entreprise.adresse || '',
        ice: entreprise.ice || '',
        rc: entreprise.rc || '',
        patente: entreprise.patente || '',
    })

    const handleChange = e => {
        setData(e.target.name, e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        post(route('entreprise', entreprise.id), {
            onSuccess: page => Toast(page?.props?.flash),
        })
    }

    const formFields = [
        {
            name: 'nom',
            label: "Nom de l'entreprise",
            icon: Building2,
            type: 'text',
            required: true,
            color: 'text-indigo-600',
            span: 'md:col-span-1',
        },
        {
            name: 'responsable',
            label: 'Responsable',
            icon: User,
            type: 'text',
            color: 'text-blue-600',
            span: 'md:col-span-1',
        },
        {
            name: 'email',
            label: 'Adresse Email',
            icon: Mail,
            type: 'email',
            color: 'text-cyan-600',
            span: 'md:col-span-1',
        },
        {
            name: 'telephone',
            label: 'Numéro de Téléphone',
            icon: Phone,
            type: 'tel',
            color: 'text-green-600',
            span: 'md:col-span-1',
        },
        {
            name: 'adresse',
            label: 'Adresse Complète',
            icon: MapPin,
            type: 'text',
            color: 'text-orange-600',
            span: 'md:col-span-2',
        },
        {
            name: 'ice',
            label: 'Numéro ICE',
            icon: FileText,
            type: 'text',
            color: 'text-purple-600',
            span: 'md:col-span-1',
        },
        {
            name: 'rc',
            label: 'Registre de Commerce',
            icon: BadgeDollarSign,
            type: 'text',
            color: 'text-emerald-600',
            span: 'md:col-span-1',
        },
        {
            name: 'patente',
            label: 'Numéro de Patente',
            icon: FileSignature,
            type: 'text',
            color: 'text-pink-600',
            span: 'md:col-span-2',
        },
    ]

    return (
        <LayoutAdmin title="Entreprise">
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(99,102,241,0.05)_1px,_transparent_0)] bg-[length:20px_20px]"></div>

                <div className="relative z-10 max-w-6xl mx-auto space-y-8 p-6">
                    {/* Hero Header */}
                    <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 text-white">
                        <div className="relative p-8">
                            <div className="absolute inset-0 bg-black/10"></div>
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

                            <div className="relative z-10">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="p-4 bg-white/20 rounded-2xl">
                                        <Settings className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h1 className="text-3xl font-bold">
                                            Configuration Entreprise
                                        </h1>
                                        <p className="text-indigo-100 mt-1">
                                            Gérez les informations principales de votre entreprise
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Main Form Card */}
                    <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50/50">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-transparent"></div>

                            <CardHeader className="relative z-10 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                                <div className="flex items-center space-x-3">
                                    <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                                    <div>
                                        <CardTitle className="text-2xl font-bold text-gray-900">
                                            Informations de l'Entreprise
                                        </CardTitle>
                                        <CardDescription className="text-gray-600 mt-1">
                                            Modifiez les détails administratifs et de contact
                                        </CardDescription>
                                    </div>
                                </div>
                            </CardHeader>

                            <CardContent className="relative z-10 p-8">
                                <div className="space-y-8">
                                    <div className="grid gap-6 md:grid-cols-2">
                                        {formFields.map(field => {
                                            const IconComponent = field.icon
                                            const hasError = errors[field.name]

                                            return (
                                                <div
                                                    key={field.name}
                                                    className={`group ${field.span || ''}`}
                                                >
                                                    <Label
                                                        htmlFor={field.name}
                                                        className="flex items-center space-x-3 mb-3 text-sm font-semibold text-gray-700"
                                                    >
                                                        <div
                                                            className={`p-2 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 ${field.color}`}
                                                        >
                                                            <IconComponent className="w-4 h-4" />
                                                        </div>
                                                        <span>{field.label}</span>
                                                        {field.required && (
                                                            <span className="text-red-500 text-xs">
                                                                *
                                                            </span>
                                                        )}
                                                    </Label>

                                                    <div className="relative">
                                                        <Input
                                                            id={field.name}
                                                            name={field.name}
                                                            type={field.type}
                                                            value={data[field.name]}
                                                            onChange={handleChange}
                                                            required={field.required}
                                                            className={`h-12 transition-all duration-300 border-2 focus:border-indigo-500 focus:ring-indigo-500/20 ${
                                                                hasError
                                                                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                                                                    : 'border-gray-200 hover:border-gray-300'
                                                            }`}
                                                        />
                                                        {hasError && (
                                                            <div className="absolute -bottom-6 left-0">
                                                                <p className="text-xs text-red-600 font-medium">
                                                                    {errors[field.name]}
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    {/* Submit Button */}
                                    <div className="flex justify-end pt-6 border-t border-gray-100">
                                        <Button
                                            disabled={processing}
                                            onClick={handleSubmit}
                                            className="group relative overflow-hidden bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 px-8 py-3 h-12"
                                        >
                                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0"></div>
                                            <div className="relative z-10 flex items-center space-x-3">
                                                {processing ? (
                                                    <>
                                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                        <span className="font-medium">
                                                            Enregistrement...
                                                        </span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Save className="w-4 h-4" />
                                                        <span className="font-medium">
                                                            Enregistrer les modifications
                                                        </span>
                                                    </>
                                                )}
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </div>
                    </Card>
                </div>
            </div>
        </LayoutAdmin>
    )
}
