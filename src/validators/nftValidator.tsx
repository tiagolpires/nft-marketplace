import * as yup from 'yup'

export const CreateSchema = yup.object().shape({
  name: yup.string().required('Name is a required field'),
  price: yup.string().required('Price is a required field'),
  image: yup.string().required('Image is a required field'),
})
