// resources/js/Pages/Employers/Partials/Pagination.jsx
import React, { useContext } from 'react'
import { Link } from '@inertiajs/react'
import { EmployerIndexContext } from '../../Index'
import { Button } from '@/components/ui/button'

export default function Pagination() {
  const { employers } = useContext(EmployerIndexContext)
  const { links } = employers

  return (
    <div className="flex space-x-2 mt-4">
      {links.map((link, idx) => {
        const content = <span dangerouslySetInnerHTML={{ __html: link.label }} />
        if (!link.url) {
          return (
            <Button key={idx} disabled variant="outline">
              {content}
            </Button>
          )
        }
        return (
          <Link
            key={idx}
            href={link.url}
            preserveScroll
            preserveState
          >
            <Button variant={link.active ? 'primary' : 'outline'}>
              {content}
            </Button>
          </Link>
        )
      })}
    </div>
  )
}
