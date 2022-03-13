import { createContext, useState, useCallback } from 'react'
import { formDataInterface } from '../components/nft-form'
import { Api } from '../helpers'
import Router from 'next/router'

export interface NFTType {
  id?: number
  name: string
  image: string
  price: string
}

interface NFTContextData {
  loadNFTs: () => void
  loadOne: (id: number) => void
  remove: (id: number | undefined) => void
  edit: (id: number, formData: formDataInterface) => void
  create: (formData: formDataInterface) => void
  NFTs: NFTType[]
  NFT: NFTType
}

export const NFTContext = createContext<NFTContextData>({
  NFTs: [],
  NFT: { name: '', image: '', price: '' },
  loadNFTs: () => {},
  create: () => {},
  edit: () => {},
  loadOne: () => {},
  remove: () => {},
})

export const NFTProvider: React.FC = ({ children }) => {
  const [NFTs, setNFTs] = useState([])
  const [NFT, setNFT] = useState({ name: '', image: '', price: '' })

  const loadNFTs = useCallback(async () => {
    try {
      const response = await Api.get('nfts?_sort=id&_order=desc')
      if (response.status === 200 || response.data) {
        setNFTs(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  const create = useCallback(async (formData: formDataInterface) => {
    try {
      const response = await Api.post('nfts', formData)
      if (response.status === 200 || response.data) {
        Router.push('/')
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  const edit = useCallback(async (id: number, formData: formDataInterface) => {
    try {
      const response = await Api.put(`nfts/${id}`, formData)
      if (response.status === 200 || response.data) {
        Router.push('/')
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  const loadOne = useCallback(async (id: number) => {
    try {
      const response = await Api.get(`nfts/${id}`)
      if (response.status === 200 || response.data) {
        setNFT(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  const remove = useCallback(async (id: number | undefined) => {
    try {
      const newNFTs = NFTs.filter((nft: NFTType) => nft.id !== id)
      setNFTs(newNFTs)
      await Api.delete(`nfts/${id}`)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <NFTContext.Provider
      value={{ loadNFTs, loadOne, create, NFTs, NFT, edit, remove }}
    >
      {children}
    </NFTContext.Provider>
  )
}
