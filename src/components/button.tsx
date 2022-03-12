interface ButtonProps {
  title: string
  type: 'button' | 'submit'
}

const Button: React.FC<ButtonProps> = ({ type, title }) => {
  return (
    <button
      className="cursor-pointer rounded-lg bg-byzantine py-2 px-6"
      type={type}
    >
      {title}
    </button>
  )
}

export default Button
