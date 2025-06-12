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
                duration: 4000,
            })
        }
        if (flash.error) {
            toast.error(flash.error, {
                action: {
                    label: 'X',
                    onClick: () => toast.dismiss(),
                },
                duration: 4000,
            })
        }
        if (flash.info) {
            toast(flash.info, {
                action: {
                    label: 'X',
                    onClick: () => toast.dismiss(),
                },
                duration: 4000,
            })
        }
    }, [])

    return (
        <div className="w-screen h-screen flex bg-gradient-to-br from-slate-50 to-indigo-50">
            <Toaster
                position="top-right"
                toastOptions={{
                    className: 'bg-white border-l-4 border-indigo-500 shadow-2xl',
                    style: {
                        background: 'white',
                        border: '1px solid #e5e7eb',
                        borderLeft: '4px solid #6366f1',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    },
                }}
            />
            <Head title={title} />

            {/* Enhanced Sidebar */}
            <NavbarSide />

            {/* Enhanced Main Content Area */}
            <main className="flex-1 h-full overflow-y-auto relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(99,102,241,0.05)_1px,_transparent_0)] bg-[length:20px_20px]"></div>

                {/* Content */}
                <div className="relative z-10 p-6">{children}</div>
            </main>
        </div>
    )
}
