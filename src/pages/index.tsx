import { NFTCard, Header, ModalConfirm } from '../components'
import { NFTContext } from '../contexts/nfts'
import { useContext, useEffect, useState } from 'react'

const Home: React.FC = () => {
  const { loadNFTs, NFTs, remove } = useContext(NFTContext)
  const [displayModal, setDisplayModal] = useState(false)
  const [cardIdToRemove, setCardIdToRemove] = useState<number | undefined>()

  const onModalConfirm = () => {
    setDisplayModal(false)
    remove(cardIdToRemove)
    setCardIdToRemove(undefined)
  }

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
            NFTs.map((NFT, index) => (
              <NFTCard
                key={index}
                NFT={NFT}
                displayModal={setDisplayModal}
                setCardIdToRemove={setCardIdToRemove}
              />
            ))}
        </div>
      </main>
      <ModalConfirm
        show={displayModal}
        onClose={() => setDisplayModal(false)}
        onBtnYes={onModalConfirm}
      />
    </>
  )
}

export default Home
