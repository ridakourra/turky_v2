import { ComboBox } from '@/components/ComboBox/ComboBox'
import { router } from '@inertiajs/react'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Test() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        try {
            const response = await axios.get('api/products')
            setData(response.data)
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching users:', error)
        }
    }

    return (
        <div>
            <ComboBox data={data} placeholder="Choisir..." />
        </div>
    )
}
