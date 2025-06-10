import { Head, usePage } from '@inertiajs/react'
import NavbarSide from './NavbarSide'
import NavbarHead from './NavbarHead'
import { useEffect } from 'react'
import { Toaster } from 'sonner'
import { toast } from 'sonner'

export default function LayoutAdmin({ title, children }) {
    const { flash } = usePage().props

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success, {
                action: {
                    label: 'X',
                    onClick: () => toast.dismiss(),
                },
            })
        }
        if (flash.error) {
            toast.error(flash.error, {
                action: {
                    label: 'X',
                    onClick: () => toast.dismiss(),
                },
            })
        }
        if (flash.info) {
            toast(flash.info, {
                action: {
                    label: 'X',
                    onClick: () => toast.dismiss(),
                },
            })
        }
    }, [])
    return (
        <div className="w-screen h-screen flex">
            <Toaster />
            <Head title={title} />
            {/* Navbar */}
            <NavbarSide />
            {/* Main */}
            <main className="w-full h-full bg-gray-100 p-5 space-y-2">{children}</main>
        </div>
    )
}
