import { NFTForm } from '../../components'
import { formDataInterface } from '../../components/nft-form'
import { NFTContext } from '../../contexts/nfts'
import { useContext } from 'react'

const Create: React.FC = () => {
  const { create } = useContext(NFTContext)

  const onSubmit = (formData: formDataInterface) => {
    create(formData)
  }

  return (
    <main className="flex w-10/12 max-w-6xl flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">
        Create and sell your <span className="text-byzantine">NFTs!</span>
      </h1>
      <NFTForm onSubmit={onSubmit} />
    </main>
  )
}

export default Create
