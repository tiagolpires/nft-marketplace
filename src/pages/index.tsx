import { NFTCard, Header } from '../components'
import { NFTContext } from '../contexts/nfts'
import { useContext, useEffect } from 'react'

const Home: React.FC = () => {
  const { loadNFTs, NFTs } = useContext(NFTContext)

  useEffect(() => {
    loadNFTs()
  }, [loadNFTs])

  return (
    <>
      <div className="flex h-[40vh] max-h-[400px] w-full">
        <Header hasButton={true} title={'Create and sell your '} />
      </div>
      <main className="flex w-10/12 max-w-6xl flex-col items-center justify-center text-center">
        <div className="flex w-full flex-wrap justify-center">
          {NFTs.length > 0 &&
            NFTs.map((NFT, index) => <NFTCard key={index} NFT={NFT} />)}
        </div>
      </main>
    </>
  )
}

export default Home
