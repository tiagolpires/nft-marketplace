import { NFTForm, Header } from '../../components'
import { formDataInterface } from '../../components/nft-form'
import { NFTContext } from '../../contexts/nfts'
import { useContext } from 'react'

const Create: React.FC = () => {
  const { create } = useContext(NFTContext)

  const onSubmit = (formData: formDataInterface) => {
    create(formData)
  }

  return (
    <>
      <div className="flex h-[20vh] max-h-[200px] w-full">
        <Header title={'Create your '} />
      </div>
      <main className="flex w-10/12 max-w-6xl flex-col items-center justify-center text-center">
        <NFTForm onSubmit={onSubmit} />
      </main>
    </>
  )
}

export default Create
