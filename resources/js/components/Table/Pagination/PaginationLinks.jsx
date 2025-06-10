import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'
import { useForm } from '@inertiajs/react'

export default function PaginationLinks({ links, currentPage, nameRoute }) {
    const { get } = useForm()
    const onPageChange = page => {
        get(route(nameRoute, { page }), {
            preserveScroll: true,
            preserveState: true,
        })
    }
    return (
        <Pagination>
            <PaginationContent>
                {links?.map((link, index) => {
                    if (link.url === null) return null

                    if (index === 0) {
                        return (
                            <PaginationItem key={index}>
                                <PaginationPrevious
                                    className={`${
                                        link.active
                                            ? 'bg-indigo-500 text-white'
                                            : 'hover:bg-indigo-100'
                                    }`}
                                    onClick={() => onPageChange(currentPage - 1)}
                                    disabled={!link.url}
                                />
                            </PaginationItem>
                        )
                    }

                    if (index === links.length - 1) {
                        return (
                            <PaginationItem key={index}>
                                <PaginationNext
                                    className={`${
                                        link.active
                                            ? 'bg-indigo-500 text-white'
                                            : 'hover:bg-indigo-100'
                                    }`}
                                    onClick={() => onPageChange(currentPage + 1)}
                                    disabled={!link.url}
                                />
                            </PaginationItem>
                        )
                    }

                    return (
                        <PaginationItem key={index}>
                            <PaginationLink
                                className={`${
                                    link.active ? 'bg-indigo-500 text-white' : 'hover:bg-indigo-100'
                                }`}
                                onClick={() => onPageChange(link.label)}
                            >
                                {link.label}
                            </PaginationLink>
                        </PaginationItem>
                    )
                })}
            </PaginationContent>
        </Pagination>
    )
}
