import { Button } from '.'
import Link from 'next/link'

interface HeaderProps {
  title: string
  hasButton?: boolean
}

const Header: React.FC<HeaderProps> = ({ title, hasButton = false }) => {
  return (
    <div className="header flex w-full items-center justify-center">
      <div className="flex w-10/12 flex-col items-center justify-center">
        <h1 className="mb-10 text-center text-4xl font-bold md:text-5xl">
          {title}
          <span className="text-byzantine">NFTs!</span>
        </h1>
        {hasButton && (
          <Link href="/nfts/create#create">
            <a>
              <Button title="Create" type="button" />
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
