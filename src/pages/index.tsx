import { NFTCard } from '../components'

const Home: React.FC = () => {
  return (
    <main className="flex w-10/12 max-w-6xl flex-col items-center justify-center px-20 text-center">
      <h1 className="text-6xl font-bold">
        Create and sell your <span className="text-byzantine">NFTs!</span>
      </h1>
      <div className="flex w-full flex-wrap justify-center">
        <NFTCard nft="1.jpeg" name="Nas" price={399} />
        <NFTCard nft="2.jpeg" name="Nas" price={399} />
        <NFTCard nft="3.jpeg" name="Nas" price={399} />
      </div>
    </main>
  )
}

export default Home
