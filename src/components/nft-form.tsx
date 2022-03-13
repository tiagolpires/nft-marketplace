import { Input, Button, Carousel } from '.'
import { useState, FormEvent, useEffect, useCallback } from 'react'
import { CreateSchema } from '../validators/nftValidator'
import Image from 'next/image'
export interface formDataInterface {
  name: string
  price: string
  image: string
}
interface NFTFormProps {
  onSubmit: (formData: formDataInterface) => void
  data?: formDataInterface
}

const NFTForm: React.FC<NFTFormProps> = ({ onSubmit, data }) => {
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '1.jpeg',
  })

  const parseData = useCallback(() => {
    if (data) {
      setFormData(data)
    }
  }, [data, setFormData])

  useEffect(() => {
    parseData()
  }, [parseData])

  const handleChange = (field: string, value: string | number) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    try {
      await CreateSchema.validate(formData)
    } catch (err: any) {
      return setError(err.errors[0])
    }

    onSubmit(formData)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-center justify-center"
    >
      <Carousel
        onChange={(value: string | number) => handleChange('image', value)}
        image={formData.image}
      />
      <Input
        label="Name"
        name="name"
        value={formData.name}
        onChange={(value: string | number) => handleChange('name', value)}
      />
      <Input
        label="Price"
        name="price"
        value={formData.price}
        onChange={(value: string | number) => handleChange('price', value)}
      />
      {error && (
        <span className="text- my-3 flex w-full max-w-xl items-center justify-start text-red-500">
          <div className="mr-1 flex items-center">
            <Image src="/icons/error.svg" width="20px" height="20px" />{' '}
          </div>
          {error}
        </span>
      )}
      <div className="my-3 flex w-full max-w-xl">
        <Button title="Save" type="submit" />
      </div>
    </form>
  )
}

export default NFTForm
