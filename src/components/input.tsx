interface InputProps {
  label: string
  name: string
  value: string | number
  onChange: (value: string | number) => void
}

const Input: React.FC<InputProps> = ({ label, name, value, onChange }) => {
  return (
    <div className="my-3 flex w-full max-w-xl flex-col">
      <label className="mb-1 flex items-start" htmlFor={name}>
        {label}
      </label>
      <input
        className="rounded-lg bg-yankees-blue px-4 py-4 outline-none"
        name={name}
        value={value}
        onChange={e => onChange(e.target.value)}
        type="text"
      />
    </div>
  )
}

export default Input
