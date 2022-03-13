import Image from 'next/image'

interface CardButtonProps {
  icon: string
  onClick?: () => void
}

const CardButton: React.FC<CardButtonProps> = ({ icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mx-4 flex cursor-pointer items-center justify-center rounded-xl bg-space-cadet py-1 px-4"
    >
      <Image src={`/icons/${icon}`} width={20} height={20} />
    </button>
  )
}

export default CardButton
