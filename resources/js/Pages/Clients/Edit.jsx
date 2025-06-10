import React from 'react'
import { Link, useForm } from '@inertiajs/react'
import LayoutAdmin from '@/Layouts/LayoutAdmin'
import Heading from '@/components/Heading/Heading'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { toast, Toaster } from 'sonner'

export default function Edit({ client }) {
    const { data, setData, put, processing, errors } = useForm({
        nom: client.nom,
        cin: client.cin,
        telephone: client.telephone,
        adresse: client.adresse,
        dettes: client.dettes,
    })

    function handleSubmit(e) {
        e.preventDefault()

        put(route('clients.update', client.id), {
            onSuccess: () => {
                toast.success('Client updated successfully.')
            },
            onError: () => {
                toast.error('Please fix the errors and try again.')
            },
            preserveScroll: true,
        })
    }

    return (
        <LayoutAdmin title="Edit Client">

            <div className="space-y-6">
                <Heading
                    title="Modifier Client"
                    description="Mettez à jour les informations du client."
                />

                <Card className="p-5 bg-white shadow">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {['nom', 'cin', 'telephone', 'adresse', 'dettes'].map(field => (
                            <div key={field}>
                                <Label htmlFor={field}>
                                    {field.charAt(0).toUpperCase() + field.slice(1)}
                                </Label>
                                <Input
                                    id={field}
                                    type={field === 'dettes' ? 'number' : 'text'}
                                    value={data[field]}
                                    onChange={e => setData(field, e.target.value)}
                                    className="mt-1"
                                />
                                {errors[field] && (
                                    <p className="text-red-600 text-sm mt-1">{errors[field]}</p>
                                )}
                            </div>
                        ))}

                        <div className="pt-4 flex space-x-2">
                            <Button
                                type="submit"
                                disabled={processing}
                                className="bg-indigo-500 hover:bg-indigo-600 text-white"
                            >
                                Update
                            </Button>
                            <Link href={route('clients.show', client.id)}>
                                <Button className="bg-gray-500 hover:bg-gray-600 text-white">
                                    Cancel
                                </Button>
                            </Link>
                        </div>
                    </form>
                </Card>
            </div>
        </LayoutAdmin>
    )
}
