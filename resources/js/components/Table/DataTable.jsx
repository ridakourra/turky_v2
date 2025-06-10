import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from '@inertiajs/react'

/**
 * headers: [
 *   {
 *     label: 'CIN',
 *     accessor: 'cin',
 *     className: 'w-1/4',
 *     render: (value, row) => <strong>{value}</strong>, // اختياري
 *   },
 *   ...
 * ]
 *
 * actions: [
 *   {
 *     type: 'button' | 'link',
 *     icon: Eye,
 *     onClick: (row) => {},
 *     href: route => `/clients/${row.id}`,
 *     className: 'text-indigo-500',
 *   }
 * ]
 */
export default function DataTable({
    headers,
    data,
    actions = [],
    emptyMessage = 'No data available',
}) {
    return (
        <Card className="p-4">
            <Table>
                <TableHeader>
                    <TableRow>
                        {headers.map(({ label, className }, idx) => (
                            <TableHead key={idx} className={className}>
                                {label}
                            </TableHead>
                        ))}
                        {actions.length > 0 && (
                            <TableHead className="text-right">Actions</TableHead>
                        )}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data && data.length > 0 ? (
                        data.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {headers.map(({ accessor, render, className }, colIndex) => {
                                    const value = row[accessor]
                                    return (
                                        <TableCell key={colIndex} className={className}>
                                            {render ? render(value, row) : value}
                                        </TableCell>
                                    )
                                })}
                                {actions.length > 0 && (
                                    <TableCell className="text-right space-x-2">
                                        {actions.map((action, actIdx) => {
                                            const Icon = action.icon
                                            const key = `${rowIndex}-${actIdx}`
                                            if (action.type === 'button') {
                                                return (
                                                    <Button
                                                        key={key}
                                                        variant="link"
                                                        className={action.className}
                                                        onClick={() => action.onClick(row)}
                                                    >
                                                        <Icon />
                                                    </Button>
                                                )
                                            } else if (action.type === 'link') {
                                                const href =
                                                    typeof action.href === 'function'
                                                        ? action.href(row)
                                                        : action.href
                                                return (
                                                    <Link
                                                        key={key}
                                                        href={href}
                                                        className={action.className}
                                                    >
                                                        <Icon />
                                                    </Link>
                                                )
                                            }
                                            return null
                                        })}
                                    </TableCell>
                                )}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={headers.length + (actions.length > 0 ? 1 : 0)}>
                                {emptyMessage}
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </Card>
    )
}


