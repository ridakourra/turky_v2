import React, { useContext } from 'react'
import { Link, router } from '@inertiajs/react'
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from '@/components/ui/table'
import { Eye, Edit2, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ClientContext } from '../../Index'
import Toast from '@/functions/Toast'

export default function ClientsTable() {
    const { clients, filters } = useContext(ClientContext)
    const { data } = clients

    const handleDelete = id => {
        if (confirm('Are you sure you want to delete this client?')) {
            router.delete(route('clients.destroy', id), {
                preserveState: true,
                onSuccess: page => {
                    ;<Toast flash={page.props.flash} />
                },
            })
        }
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-1/4">CIN</TableHead>
                    <TableHead className="w-1/3">Name</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {data.length > 0 ? (
                    data.map(client => (
                        <TableRow key={client.id}>
                            <TableCell>{client.cin}</TableCell>
                            <TableCell>{client.nom}</TableCell>
                            <TableCell>{client.telephone}</TableCell>
                            <TableCell className="text-right space-x-2">
                                {/* Show */}
                                <Link href={route('clients.show', client.id)}>
                                    <Button variant="link" className="p-0 text-blue-500">
                                        <Eye size={18} />
                                    </Button>
                                </Link>
                                {/* Edit */}
                                <Link href={route('clients.edit', client.id)}>
                                    <Button variant="link" className="p-0 text-green-500">
                                        <Edit2 size={18} />
                                    </Button>
                                </Link>
                                {/* Delete */}
                                <Button
                                    variant="link"
                                    className="p-0 text-red-500"
                                    onClick={() => handleDelete(client.id)}
                                >
                                    <Trash2 size={18} />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={4} className="text-center">
                            No clients found.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}
