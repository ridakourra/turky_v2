// resources/js/Pages/Employers/Partials/EmployersTable.jsx
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
import { EmployerIndexContext } from '../../Index'

export default function EmployersTable() {
    const { employers, filters } = useContext(EmployerIndexContext)
    const { data } = employers

    const handleDelete = id => {
        if (confirm('Voulez-vous vraiment supprimer cet employé ?')) {
            router.delete(route('employers.destroy', id), {
                preserveState: true,
                onSuccess: () => {
                    /* toast */
                },
            })
        }
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>CIN</TableHead>
                    <TableHead>Fonction</TableHead>
                    <TableHead>Date d'embauche</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {data.length > 0 ? (
                    data.map(emp => (
                        <TableRow key={emp.id}>
                            <TableCell>{emp.cin}</TableCell>
                            <TableCell>{emp.fonction}</TableCell>
                            <TableCell>{emp.date_embauche}</TableCell>
                            <TableCell className="text-right space-x-2">
                                <Link href={route('employers.show', emp.id)}>
                                    <Button variant="link" className="p-0 text-blue-500">
                                        <Eye size={18} />
                                    </Button>
                                </Link>
                                <Link href={route('employers.edit', emp.id)}>
                                    <Button variant="link" className="p-0 text-green-500">
                                        <Edit2 size={18} />
                                    </Button>
                                </Link>
                                <Button
                                    variant="link"
                                    className="p-0 text-red-500"
                                    onClick={() => handleDelete(emp.id)}
                                >
                                    <Trash2 size={18} />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={4} className="text-center">
                            Aucun employé trouvé.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}
