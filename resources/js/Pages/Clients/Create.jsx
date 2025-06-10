// resources/js/Pages/Clients/Create.jsx
import React from 'react'
import { useForm } from '@inertiajs/react'
import LayoutAdmin from '@/Layouts/LayoutAdmin'
import Heading from '@/components/Heading/Heading'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { toast, Toaster } from 'sonner'

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
                toast.success('Client added successfully.')
            },
            onError: () => {
                toast.error('Please fix the errors and try again.')
            },
            preserveScroll: true,
        })
    }

    return (
        <LayoutAdmin title="New Client">
            <div className="space-y-6">
                <Heading
                    title="Ajouter un nouveau client"
                    description="Remplissez ce formulaire pour créer un nouveau client."
                />

                {/* Card wrapper with padding */}
                <Card className="p-5 bg-white shadow">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="nom">Nom</Label>
                            <Input
                                id="nom"
                                value={data.nom}
                                onChange={e => setData('nom', e.target.value)}
                                className="mt-1"
                            />
                            {errors.nom && (
                                <p className="text-red-600 text-sm mt-1">{errors.nom}</p>
                            )}
                        </div>

                        <div>
                            <Label htmlFor="cin">CIN</Label>
                            <Input
                                id="cin"
                                value={data.cin}
                                onChange={e => setData('cin', e.target.value)}
                                className="mt-1"
                            />
                            {errors.cin && (
                                <p className="text-red-600 text-sm mt-1">{errors.cin}</p>
                            )}
                        </div>

                        <div>
                            <Label htmlFor="telephone">Téléphone</Label>
                            <Input
                                id="telephone"
                                value={data.telephone}
                                onChange={e => setData('telephone', e.target.value)}
                                className="mt-1"
                            />
                            {errors.telephone && (
                                <p className="text-red-600 text-sm mt-1">{errors.telephone}</p>
                            )}
                        </div>

                        <div>
                            <Label htmlFor="adresse">Adresse</Label>
                            <Input
                                id="adresse"
                                value={data.adresse}
                                onChange={e => setData('adresse', e.target.value)}
                                className="mt-1"
                            />
                            {errors.adresse && (
                                <p className="text-red-600 text-sm mt-1">{errors.adresse}</p>
                            )}
                        </div>

                        <div>
                            <Label htmlFor="dettes">Dettes (DH)</Label>
                            <Input
                                id="dettes"
                                type="number"
                                min="0"
                                step="0.01"
                                value={data.dettes}
                                onChange={e => setData('dettes', e.target.value)}
                                className="mt-1"
                            />
                            {errors.dettes && (
                                <p className="text-red-600 text-sm mt-1">{errors.dettes}</p>
                            )}
                        </div>

                        <div className="pt-4 flex space-x-2">
                            {/* Save button in indigo */}
                            <Button
                                type="submit"
                                disabled={processing}
                                className="bg-indigo-500 hover:bg-indigo-600 text-white"
                            >
                                Save
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </LayoutAdmin>
    )
}
