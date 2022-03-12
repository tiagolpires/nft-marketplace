interface InputProps {
  label: string
}

const Input: React.FC<InputProps> = ({ label }) => {
  return (
    <div className="my-3 flex w-full max-w-xl flex-col">
      <label className="mb-1 flex items-start" htmlFor="">
        {label}
      </label>
      <input
        className="rounded-lg bg-yankees-blue px-4 py-4 outline-none"
        type="text"
      />
    </div>
  )
}

export default Input
