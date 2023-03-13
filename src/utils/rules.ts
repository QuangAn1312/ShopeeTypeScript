import { RegisterOptions, UseFormGetValues } from 'react-hook-form'

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
    pattern: {
      value: /^S+@S+.S+$/,
      message: 'Password invalidate'
    },
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
    pattern: {
      value: /^S+@S+.S+$/,
      message: 'Comfirm Password invalidate'
    },
    maxLength: {
      value: 160,
      message: 'Max length 5-160 characters'
    },
    minLength: {
      value: 6,
      message: 'Min length more than 6 characters'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Try Again'
        : undefined
  }
})
