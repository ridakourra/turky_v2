import { Button } from '@/components/ui/button'
import { Link } from '@inertiajs/react'
import {
    Archive,
    ArrowLeft,
    Box,
    Building2,
    Car,
    IdCardLanyard,
    ListOrdered,
    LogOut,
    ShoppingBasket,
    Truck,
    User,
} from 'lucide-react'

export default function NavbarSide() {
    const links = [
        { text: 'DASHBOARD', href: route('dashboard'), icon: Box },
        { text: 'ENTREPRISE', href: route('entreprise'), icon: Building2 },
        { text: 'CLIENTS', href: route('clients.index'), icon: User },
        { text: 'EMPLOYERS', href: route('employers.index'), icon: IdCardLanyard },
        { text: 'FOURNISSEURS', href: '/', icon: Archive },
        { text: 'VEHICULES', href: '/', icon: Car },
        { text: 'ENGINS LOURDS', href: '/', icon: Truck },
        { text: 'PRODUITS', href: '/', icon: ShoppingBasket },
        { text: 'COMMANDES', href: '/', icon: ListOrdered },
        { text: 'LOGOUT', href: route('logout'), icon: LogOut },
    ].map((link, key) => (
        <Link className="text-md" key={key} href={link.href}>
            <Button
                className="w-full text-white hover:bg-indigo-800 flex justify-start"
                variant="link"
            >
                {<link.icon />} {link.text}
            </Button>
        </Link>
    ))
    return (
        <div className="max-w-[250px] bg-indigo-900 h-full w-full p-2 flex flex-col gap-5">
            {/* Title */}
            <p className="text-xl p-2 text-center font-bold text-yellow-500">PANEL ADMIN</p>

            {/* Nav */}
            <div className="flex flex-col gap-1">{links}</div>
        </div>
    )
}
