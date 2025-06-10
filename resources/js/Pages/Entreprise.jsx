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

    return (
        <LayoutAdmin title="Entreprise">
            <Heading
                title="Informations Entreprise"
                description="Modifiez les détails de l'entreprise, y compris le nom, les informations de
                        contact et les identifiants administratifs."
            />
            <Card className="mx-auto p-4 py-5 shadow-xl">
                <CardContent>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Nom */}
                        <div>
                            <Label htmlFor="nom" className="flex items-center gap-2">
                                <Building2 className="w-4 h-4" /> Nom{' '}
                                <em className="text-red-500 text-xs">{errors.nom}</em>
                            </Label>
                            <Input
                                id="nom"
                                name="nom"
                                value={data.nom}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Responsable */}
                        <div>
                            <Label htmlFor="responsable" className="flex items-center gap-2">
                                <User className="w-4 h-4" /> Responsable
                                <em className="text-red-500 text-xs">{errors.responsable}</em>
                            </Label>
                            <Input
                                id="responsable"
                                name="responsable"
                                value={data.responsable}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <Label htmlFor="email" className="flex items-center gap-2">
                                <Mail className="w-4 h-4" /> Email
                                <em className="text-red-500 text-xs">{errors.email}</em>
                            </Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Téléphone */}
                        <div>
                            <Label htmlFor="telephone" className="flex items-center gap-2">
                                <Phone className="w-4 h-4" /> Téléphone
                                <em className="text-red-500 text-xs">{errors.telephone}</em>
                            </Label>
                            <Input
                                id="telephone"
                                name="telephone"
                                value={data.telephone}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Adresse */}
                        <div className="md:col-span-2">
                            <Label htmlFor="adresse" className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" /> Adresse
                                <em className="text-red-500 text-xs">{errors.adresse}</em>
                            </Label>
                            <Input
                                id="adresse"
                                name="adresse"
                                value={data.adresse}
                                onChange={handleChange}
                            />
                        </div>

                        {/* ICE */}
                        <div>
                            <Label htmlFor="ice" className="flex items-center gap-2">
                                <FileText className="w-4 h-4" /> ICE
                                <em className="text-red-500 text-xs">{errors.ice}</em>
                            </Label>
                            <Input id="ice" name="ice" value={data.ice} onChange={handleChange} />
                        </div>

                        {/* RC */}
                        <div>
                            <Label htmlFor="rc" className="flex items-center gap-2">
                                <BadgeDollarSign className="w-4 h-4" /> RC
                                <em className="text-red-500 text-xs">{errors.rc}</em>
                            </Label>
                            <Input id="rc" name="rc" value={data.rc} onChange={handleChange} />
                        </div>

                        {/* Patente */}
                        <div className="md:col-span-2">
                            <Label htmlFor="patente" className="flex items-center gap-2">
                                <FileSignature className="w-4 h-4" /> Patente
                                <em className="text-red-500 text-xs">{errors.patente}</em>
                            </Label>
                            <Input
                                id="patente"
                                name="patente"
                                value={data.patente}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="md:col-span-2 flex justify-end">
                            <Button disabled={processing} type="submit" className="px-6">
                                <Check /> {processing ? 'Attends...' : 'Enregistrer'}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </LayoutAdmin>
    )
}
