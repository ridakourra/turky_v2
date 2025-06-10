import { toast } from 'sonner'

export default function Toast(flash) {
    if (flash.success) {
        return toast.success(flash.success, {
            action: {
                label: 'X',
                onClick: () => toast.dismiss(),
            },
        })
    } else if (flash.error) {
        return toast.error(flash.error, {
            action: {
                label: 'X',
                onClick: () => toast.dismiss(),
            },
        })
    } else if (flash.info) {
        return toast(flash.info, {
            action: {
                label: 'X',
                onClick: () => toast.dismiss(),
            },
        })
    }
}
