import { NFTForm } from '../../components'
import { formDataInterface } from '../../components/nft-form'
import { NFTContext } from '../../contexts/nfts'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

const Create: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  const { loadOne, NFT, edit } = useContext(NFTContext)

  useEffect(() => {
    if (id) loadOne(Number(id))
  }, [loadOne, id])

  const onSubmit = (formData: formDataInterface) => {
    if (id) edit(Number(id), formData)
  }

  return (
    <main className="flex w-10/12 max-w-6xl flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">
        Create and sell your <span className="text-byzantine">NFTs!</span>
      </h1>
      <NFTForm onSubmit={onSubmit} data={NFT} />
    </main>
  )
}

export default Create
