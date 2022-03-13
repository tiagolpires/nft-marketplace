import { render, screen } from '@testing-library/react'
import { Input } from '.'

describe('NFTCard component', () => {
  test('Should have edit button', () => {
    render(
      //   <NFTCard NFT={{ id: 1, image: '1.jpeg', price: '100', name: 'Fulano' }} />
      <Input label="label" name="name" onChange={() => {}} value={''} />
    )

    const editButton = screen.getByRole('label')

    expect(editButton).toHaveTextContent('aoba')
  })
})
