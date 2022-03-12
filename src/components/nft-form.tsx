import { Input, Button } from '.'

const NFTForm: React.FC = () => {
  return (
    <form className="flex w-full flex-col items-center justify-center">
      <Input label="Name" />
      <Input label="Price" />
      <div className="my-3 flex w-full max-w-xl">
        <Button title="Save" type="submit" />
      </div>
    </form>
  )
}

export default NFTForm
