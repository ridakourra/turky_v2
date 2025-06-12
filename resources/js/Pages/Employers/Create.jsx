import Heading from '@/components/Heading/Heading'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import LayoutAdmin from '@/Layouts/LayoutAdmin'
import { Link, useForm } from '@inertiajs/react'
import { SelectValue } from '@radix-ui/react-select'
import { Check, StepBack } from 'lucide-react'
import ChooseProduct from './partials/create/ChooseProduct'
import { useEffect, useState } from 'react'
import Toast from '@/functions/Toast'

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        nom: '',
        cin: '',
        telephone: '',
        adresse: '',
        fonction: '',
        password: '',
        date_embauche: '',
        type: '', // for salaire
        prix: '',
        produit_id: '',
    })

    const types_salaire = ['mensuel', 'journalier', 'horaire', 'unite']

    const handleSalaire = type => {
        if (type === 'unite') {
            return (
                <>
                    <div className="w-full space-y-1">
                        <Label>Salaire</Label>
                        <em className="text-red-500 text-xs">{errors.prix}</em>
                        <em className="text-red-500 text-xs">{errors.unite}</em>
                        <div className="w-full flex items-center gap-2">
                            <Input
                                onChange={e => setData('prix', e.target.value)}
                                placeholder="Saisir montant de unite..."
                            />
                            <ChooseProduct setDataForm={setData} />
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="w-full space-y-1">
                        <Label>Salaire</Label>
                        <Input
                            value={data.prix}
                            onChange={e => setData('prix', e.target.value)}
                            placeholder={`Saisir montant de ${type}...`}
                        />
                    </div>
                </>
            )
        }
    }

    const submit = e => {
        e.preventDefault()
        console.log(data)
        post(route('employers.store'), {
            onSuccess: page => {
                Toast(page.props.flash)
                console.log(page.props.err)
            },
        })
    }
    return (
        <LayoutAdmin title="Nouveau employeur">
            <Heading
                title="Créer nouvel employeur"
                description="Formulaire de création d'un nouvel employeur"
            />

            {/* Form */}
            <Card className="p-5">
                <form className="space-y-4" onSubmit={submit}>
                    {/* Nom */}
                    <div>
                        <Label>
                            Nom <em className="text-red-500 text-xs">{errors.nom}</em>
                        </Label>
                        <Input
                            placeholder="Saisir nom..."
                            value={data.nom}
                            onChange={e => setData('nom', e.target.value)}
                        />
                    </div>

                    {/* CIN */}
                    <div>
                        <Label>
                            CIN <em className="text-red-500 text-xs">{errors.cin}</em>
                        </Label>
                        <Input
                            placeholder="Saisir CIN..."
                            value={data.cin}
                            onChange={e => setData('cin', e.target.value)}
                        />
                    </div>

                    {/* Téléphone */}
                    <div>
                        <Label>
                            Téléphone <em className="text-red-500 text-xs">{errors.telephone}</em>
                        </Label>
                        <Input
                            placeholder="Saisir Téléphone..."
                            value={data.telephone}
                            onChange={e => setData('telephone', e.target.value)}
                        />
                    </div>

                    {/* Adresse */}
                    <div>
                        <Label>
                            Adresse <em className="text-red-500 text-xs">{errors.adresse}</em>
                        </Label>
                        <Input
                            placeholder="Saisir Adresse..."
                            value={data.adresse}
                            onChange={e => setData('adresse', e.target.value)}
                        />
                    </div>

                    {/* Fonction */}
                    <div>
                        <Label>
                            Fonction <em className="text-red-500 text-xs">{errors.fonction}</em>
                        </Label>
                        <Select
                            value={data.fonction}
                            onValueChange={value => setData('fonction', value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Choisir Fonction..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="directeur">Directeur</SelectItem>
                                <SelectItem value="comptable">Comptable</SelectItem>
                                <SelectItem value="ouvrier">Ouvrier</SelectItem>
                                <SelectItem value="livreur">Livreur</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Password */}
                    <div>
                        <Label>
                            Mot de passe <em className="text-red-500 text-xs">{errors.password}</em>
                        </Label>
                        <Input
                            placeholder="**********"
                            value={data.password}
                            onChange={e => setData('password', e.target.value)}
                        />
                    </div>

                    {/* Date d'embauche */}
                    <div>
                        <Label>
                            Date d'embauche{' '}
                            <em className="text-red-500 text-xs">{errors.date_embauche}</em>
                        </Label>
                        <Input
                            type="date"
                            value={data.date_embauche}
                            onChange={e => setData('date_embauche', e.target.value)}
                        />
                    </div>

                    {/* Type de salaire */}
                    <div>
                        <Label>
                            Type de salaire <em className="text-red-500 text-xs">{errors.type}</em>
                        </Label>
                        <Select value={data.type} onValueChange={value => setData('type', value)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Choisir Type Salaire..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="mensuel">Mensuel</SelectItem>
                                <SelectItem value="journalier">Journalier</SelectItem>
                                <SelectItem value="horaire">Horaire</SelectItem>
                                <SelectItem value="unite">Unité</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Salaire */}
                    {data.type && handleSalaire(data.type)}

                    <div className="space-x-2">
                        <Button className="bg-indigo-500 hover:bg-indigo-600">
                            <Check /> Créer
                        </Button>
                        <Link href={route('employers.index')}>
                            <Button variant="destructive">
                                <StepBack /> Retourner
                            </Button>
                        </Link>
                    </div>
                </form>
            </Card>
        </LayoutAdmin>
    )
}
