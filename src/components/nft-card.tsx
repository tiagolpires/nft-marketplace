import Image from 'next/image'
import Link from 'next/link'
import { NFTButtonCard } from '.'
import { NFTType } from '../contexts/nfts'

export interface cardProps {
  NFT: NFTType
}

const NFTCard: React.FC<cardProps> = ({ NFT }) => {
  return (
    <div className="mx-6 my-4 rounded-lg bg-yankees-blue">
      <div className="d-block h-56 w-56">
        <Image
          src={`/nfts/${NFT.image}`}
          width={240}
          height={240}
          layout="responsive"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="flex flex-col justify-start p-5 text-xs">
        <span className="mb-1 w-fit text-sm">#{NFT.name}</span>
        <div className="mb-4 flex items-center justify-between">
          <span>Price</span>
          <span className="font-bold text-byzantine">{NFT.price} ETH</span>
        </div>
        <div className="flex justify-center">
          <Link href={`/nfts/${NFT.id}`}>
            <a>
              <NFTButtonCard icon="edit.svg" />
            </a>
          </Link>
          <NFTButtonCard icon="trash.svg" />
        </div>
      </div>
    </div>
  )
}

export default NFTCard
