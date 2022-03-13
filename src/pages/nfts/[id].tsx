import { NFTForm, Header } from '../../components'
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
    <>
      <div className="flex h-[20vh] max-h-[200px] w-full">
        <Header title={'Edit your '} />
      </div>
      <main className="flex w-10/12 max-w-6xl flex-col items-center justify-center text-center">
        <NFTForm onSubmit={onSubmit} data={NFT} />
      </main>
    </>
  )
}

export default Create
