interface ButtonProps {
  title: string
  className?: string
  type: 'button' | 'submit'
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  type,
  title,
  className = '',
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer rounded-lg bg-byzantine py-2 px-6 ${className}`}
      type={type}
    >
      {title}
    </button>
  )
}

export default Button
