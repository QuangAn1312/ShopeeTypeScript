import { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }
export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email is required'
    },
    pattern: {
      value: /^S+@S+.S+$/,
      message: 'Email invalidate'
    },
    maxLength: {
      value: 160,
      message: 'Max length 5-160 characters'
    },
    minLength: {
      value: 5,
      message: 'Min length more than 5 characters'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password is required'
    },
    // pattern: {
    //   value: /^S+@S+.S+$/,
    //   message: 'Password invalidate'
    // },
    maxLength: {
      value: 160,
      message: 'Max length 5-160 characters'
    },
    minLength: {
      value: 6,
      message: 'Min length more than 6 characters'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Comfirm Password is required'
    },
    maxLength: {
      value: 160,
      message: 'Max length 5-160 characters'
    },
    minLength: {
      value: 6,
      message: 'Min length more than 6 characters'
    },
    validate: typeof getValues === 'function' ? (value) => value === getValues('password') || 'Try Again' : undefined
  }
})
function testPriceMinMax(this: yup.TestContext<yup.AnyObject>) {
  const { price_min, price_max } = this.parent as { price_min: string; price_max: string }
  if (price_min === '' && price_max !== '') {
    return Number(price_max) >= Number(price_min)
  }
  return price_min !== '' || price_max !== ''
}
export const schema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Email invalidate')
    .min(5, 'Min length more than 5 characters')
    .max(160, 'Max length 5-160 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Min length more than 6 characters')
    .max(160, 'Max length 6-160 characters'),
  confirm_password: yup
    .string()
    .required('Comfirm Password is required')
    .min(6, 'Min length more than 6 characters')
    .max(160, 'Max length 6-160 characters')
    .oneOf([yup.ref('password')], 'Try Again'),
  price_min: yup.string().test({
    name: 'price-not-allowed',
    message: 'Gia khong phu hop',
    test: testPriceMinMax
  }),
  price_max: yup.string().test({
    name: 'price-not-allowed',
    message: 'Gia khong phu hop',
    test: testPriceMinMax
  })
})
export type Schema = yup.InferType<typeof schema>
