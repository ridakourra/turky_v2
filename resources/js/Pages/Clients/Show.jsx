import React from 'react'
import LayoutAdmin from '@/Layouts/LayoutAdmin'
import Heading from '@/components/Heading/Heading'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link, router } from '@inertiajs/react'
import { Eye, Edit2, Trash2 } from 'lucide-react'
import { toast, Toaster } from 'sonner'

export default function Show({ client }) {
    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this client?')) {
            router.delete(route('clients.destroy', client.id), {
                onSuccess: () => toast.success('Client deleted.'),
            })
        }
    }

    return (
        <LayoutAdmin title="Client Details">
            <div className="space-y-6">
                <Heading title={`Detail: ${client.nom}`} description="View client information" />

                <Card className="p-5 bg-white shadow space-y-3">
                    <p>
                        <strong>Nom:</strong> {client.nom}
                    </p>
                    <p>
                        <strong>CIN:</strong> {client.cin}
                    </p>
                    <p>
                        <strong>Téléphone:</strong> {client.telephone}
                    </p>
                    <p>
                        <strong>Adresse:</strong> {client.adresse}
                    </p>
                    <p>
                        <strong>Dettes:</strong> {client.dettes} DH
                    </p>
                </Card>

                <div className="flex space-x-2">
                    <Link href={route('clients.edit', client.id)}>
                        <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">
                            <Edit2 className="mr-1" /> Edit
                        </Button>
                    </Link>
                    <Button
                        onClick={handleDelete}
                        className="bg-red-500 hover:bg-red-600 text-white"
                    >
                        <Trash2 className="mr-1" /> Delete
                    </Button>
                    <Link href={route('clients.index')}>
                        <Button className="bg-gray-500 hover:bg-gray-600 text-white">Back</Button>
                    </Link>
                </div>
            </div>
        </LayoutAdmin>
    )
}
