import Image from 'next/image'
import { NFTButtonCard } from '.'

interface NFTCardProps {
  nft: string
  name: string
  price: number
}

const NFTCard: React.FC<NFTCardProps> = ({ nft, name, price }) => {
  return (
    <div className="mx-6 my-4 rounded-lg bg-yankees-blue">
      <div className="d-block h-56 w-56">
        <Image
          src={`/nfts/${nft}`}
          width={240}
          height={240}
          layout="responsive"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="flex flex-col justify-start p-5 text-xs">
        <span className="mb-1 w-fit text-sm">#{name}</span>
        <div className="mb-4 flex items-center justify-between">
          <span>Price</span>
          <span className="font-bold text-byzantine">{price} ETH</span>
        </div>
        <div className="flex justify-center">
          <NFTButtonCard icon="edit.svg" />
          <NFTButtonCard icon="trash.svg" />
        </div>
      </div>
    </div>
  )
}

export default NFTCard
