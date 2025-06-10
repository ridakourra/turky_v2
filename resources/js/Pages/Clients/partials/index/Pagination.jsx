import React, { useContext } from 'react'
import { Link } from '@inertiajs/react'
import { ClientContext } from '../../Index'
import { Button } from '@/components/ui/button'

export default function Pagination() {
  const { clients } = useContext(ClientContext)
  const { links } = clients

  return (
    <div className="flex space-x-2 mt-4">
      {links.map((link, idx) => {
        const isDisabled = !link.url
        const isActive = link.active

        // Button content: render label with HTML entities and text inside
        const content = <span dangerouslySetInnerHTML={{ __html: link.label }} />

        if (isDisabled) {
          return (
            <Button
              key={idx}
              disabled
              variant="outline"
              className="cursor-not-allowed"
            >
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
            <Button variant={isActive ? 'primary' : 'outline'}>
              {content}
            </Button>
          </Link>
        )
      })}
    </div>
  )
}
