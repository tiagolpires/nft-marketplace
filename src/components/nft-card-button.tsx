import Image from 'next/image'

interface CardButtonProps {
  icon: string
}

const CardButton: React.FC<CardButtonProps> = ({ icon }) => {
  return (
    <button className="mx-4 flex cursor-pointer items-center justify-center rounded-xl bg-space-cadet py-1 px-4">
      <Image src={`/icons/${icon}`} width={20} height={20} />
    </button>
  )
}

export default CardButton
