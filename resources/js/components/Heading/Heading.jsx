import { Card } from '../ui/card'

export default function Heading({ title, description }) {
    return (
        <Card className="w-full p-5">
            <p className="text-3xl font-bold text-indigo-500">{title}</p>
            <p className="text-sm text-gray-600">{description}</p>
        </Card>
    )
}
