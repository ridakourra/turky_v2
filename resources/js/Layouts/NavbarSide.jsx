import { Button } from '@/components/ui/button'
import { Link, usePage } from '@inertiajs/react'
import {
    Archive,
    ArrowLeft,
    Box,
    Building2,
    Car,
    IdCard,
    ListOrdered,
    LogOut,
    ShoppingBasket,
    Truck,
    User,
    Shield,
    ChevronRight,
} from 'lucide-react'

export default function NavbarSide() {
    const { url } = usePage()

    const navigationItems = [
        { text: 'Dashboard', href: route('dashboard'), icon: Box, color: 'text-blue-400' },
        {
            text: 'Entreprise',
            href: route('entreprise'),
            icon: Building2,
            color: 'text-emerald-400',
        },
        { text: 'Clients', href: route('clients.index'), icon: User, color: 'text-cyan-400' },
        {
            text: 'Employés',
            href: route('employers.index'),
            icon: IdCard,
            color: 'text-purple-400',
        },
        { text: 'Fournisseurs', href: '/', icon: Archive, color: 'text-orange-400' },
        { text: 'Véhicules', href: '/', icon: Car, color: 'text-green-400' },
        { text: 'Engins Lourds', href: '/', icon: Truck, color: 'text-red-400' },
        { text: 'Produits', href: '/', icon: ShoppingBasket, color: 'text-pink-400' },
        { text: 'Commandes', href: '/', icon: ListOrdered, color: 'text-yellow-400' },
    ]

    const isActiveLink = href => {
        if (href === route('dashboard')) {
            return url === href
        }
        return url.startsWith(href) && href !== '/'
    }

    return (
        <div className="w-72 bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-900 h-full relative overflow-hidden shadow-2xl border-r border-indigo-700/50">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-800/20 to-purple-900/20"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative z-10 p-6 flex flex-col h-full">
                {/* Enhanced Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-center space-x-3 mb-2">
                        <div className="p-3 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl shadow-lg">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <h1 className="text-xl font-bold text-center bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                        Panel Admin
                    </h1>
                    <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mx-auto mt-2"></div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-1.5">
                    {navigationItems.map((item, index) => {
                        const IconComponent = item.icon
                        const isActive = isActiveLink(item.href)

                        return (
                            <Link key={index} href={item.href}>
                                <div
                                    className={`group relative overflow-hidden rounded-lg transition-all duration-300 ${
                                        isActive
                                            ? 'bg-gradient-to-r from-white/20 to-white/10 shadow-lg border border-white/20'
                                            : 'hover:bg-white/10 hover:shadow-md'
                                    }`}
                                >
                                    {/* Active Indicator */}
                                    {isActive && (
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-yellow-500 rounded-r-full"></div>
                                    )}

                                    {/* Button Content */}
                                    <div className="flex items-center justify-between p-3">
                                        <div className="flex items-center space-x-3">
                                            <div
                                                className={`p-2 rounded-lg transition-colors duration-300 ${
                                                    isActive
                                                        ? 'bg-white/20'
                                                        : 'bg-white/10 group-hover:bg-white/20'
                                                }`}
                                            >
                                                <IconComponent
                                                    className={`w-4 h-4 ${
                                                        isActive
                                                            ? 'text-white'
                                                            : `${item.color} group-hover:text-white`
                                                    } transition-colors duration-300`}
                                                />
                                            </div>
                                            <span
                                                className={`font-medium text-xs tracking-wide transition-colors duration-300 ${
                                                    isActive
                                                        ? 'text-white'
                                                        : 'text-indigo-100 group-hover:text-white'
                                                }`}
                                            >
                                                {item.text}
                                            </span>
                                        </div>

                                        {/* Arrow Indicator */}
                                        <ChevronRight
                                            className={`w-3 h-3 transition-all duration-300 ${
                                                isActive
                                                    ? 'text-white opacity-100 translate-x-0'
                                                    : 'text-indigo-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white'
                                            }`}
                                        />
                                    </div>

                                    {/* Hover Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </Link>
                        )
                    })}
                </nav>

                {/* Enhanced Logout Section */}
                <div className="mt-8 pt-6 border-t border-white/10">
                    <Link href={route('logout')}>
                        <div className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-red-500/80 to-red-600/80 hover:from-red-500 hover:to-red-600 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0"></div>
                            <div className="relative z-10 flex items-center justify-between p-3">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-white/20 rounded-lg">
                                        <LogOut className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="font-medium text-xs text-white tracking-wide">
                                        Déconnexion
                                    </span>
                                </div>
                                <ChevronRight className="w-3 h-3 text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Footer */}
                <div className="mt-6 text-center">
                    <p className="text-xs text-indigo-300">v2.0.0</p>
                </div>
            </div>
        </div>
    )
}
