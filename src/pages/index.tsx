import { NFTCard } from '../components'
import { NFTContext } from '../contexts/nfts'
import { useContext, useEffect } from 'react'

const Home: React.FC = () => {
  const { loadNFTs, NFTs } = useContext(NFTContext)

  useEffect(() => {
    loadNFTs()
  }, [loadNFTs])

  return (
    <main className="flex w-10/12 max-w-6xl flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">
        Create and sell your <span className="text-byzantine">NFTs!</span>
      </h1>
      <div className="flex w-full flex-wrap justify-center">
        {NFTs.length > 0 &&
          NFTs.map((NFT, index) => <NFTCard key={index} NFT={NFT} />)}
      </div>
    </main>
  )
}

export default Home
