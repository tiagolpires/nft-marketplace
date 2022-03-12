import { NFTForm } from '../components'

const Create: React.FC = () => {
  return (
    <main className="flex w-10/12 max-w-6xl flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">
        Create and sell your <span className="text-byzantine">NFTs!</span>
      </h1>
      <NFTForm />
    </main>
  )
}

export default Create
