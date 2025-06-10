import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm, usePage } from '@inertiajs/react'
import { LogIn } from 'lucide-react'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'
import { useEffect } from 'react'

export default function Login() {
    const { flash } = usePage().props
    const { data, setData, post, processing, errors } = useForm({
        cin: '',
        password: '',
    })

    const handleSubmit = e => {
        e.preventDefault()
        post(route('login'), {
            onSuccess: page => {
                const { flash } = page.props
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
            },
        })
    }
    return (
        <div className="bg-gray-900 w-screen h-screen flex justify-center items-center">
            {<Toaster />}
            <div className="absolute top-0 left-0 z-0 w-screen h-screen">
                <img
                    src="https://s1.elespanol.com/2023/10/03/omicrono/tecnologia/799180701_236514093_1024x576.jpg"
                    alt=""
                    className="w-full h-full opacity-30 ovject-fit-cover"
                />
            </div>
            <form
                onSubmit={handleSubmit}
                className="p-5 rounded-md bg-white max-w-[500px] w-full shadow-md relative z-2"
            >
                {/* Heading Title */}
                <div className="text-center mb-4 text-gray-800">
                    <p className="text-2xl text-indigo-500">Connexion Administrateur</p>
                    <p className="text-sm text-gray-500 w-3/4 mx-auto">
                        Veuillez vous connecter pour accéder au tableau de bord et gérer le système.
                    </p>
                </div>

                {/* Error for Failed */}

                {/* Form inputs */}
                <div className="w-full p-2 space-y-3">
                    <div>
                        <Label>
                            CIN <em className="text-red-500 text-xs">{errors.cin}</em>
                        </Label>
                        <Input
                            onChange={e => setData('cin', e.target.value)}
                            value={data.cin}
                            placeholder="CL493203..."
                        />
                    </div>
                    <div>
                        <Label>
                            Mot de passe <em className="text-red-500 text-xs">{errors.cin}</em>
                        </Label>
                        <Input
                            onChange={e => setData('password', e.target.value)}
                            value={data.password}
                            type="password"
                            placeholder="*********"
                        />
                    </div>

                    <div>
                        <Button
                            disabled={processing}
                            className="bg-indigo-500 hover:bg-indigo-600 "
                        >
                            <LogIn /> {processing ? 'Attends...' : 'Se connecter'}
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}
