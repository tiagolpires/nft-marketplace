import { createContext, useState, useCallback } from 'react'
import axios from 'axios'

export interface NFTType {
  name: string
  image: string
  price: number
}

interface NFTContextData {
  loadNFTs: () => void
  NFTs: NFTType[]
}

export const NFTContext = createContext<NFTContextData>({
  NFTs: [],
  loadNFTs: () => {},
})

export const NFTProvider: React.FC = ({ children }) => {
  const [NFTs, setNFTs] = useState([])

  const loadNFTs = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:3001/nfts')
      if (response.status === 200 || response.data) {
        setNFTs(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <NFTContext.Provider value={{ loadNFTs, NFTs }}>
      {children}
    </NFTContext.Provider>
  )
}
