import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { getRules } from 'src/utils/rules'

interface FormData {
  email: string
  password: string
  confirm_password: string
}
export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>()
  const rules = getRules(getValues)
  const onSubmit = handleSubmit(
    (data) => {
      console.log(data)
    },
    (data) => {
      const password = getValues('password')
      console.log('password',password)
    }
  )
  return (
    <div className='bg-orange'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Register</div>
              <div className='mt-8'>
                <input
                  type='email'
                  className=' w-full border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Email'
                  {...register('email', rules.email)}
                />
                <div className='min-h-[1.25 rem] mt-1 text-sm text-red-600'> {errors.email?.message}</div>
              </div>
              <div className='mt-2'>
                <input
                  type='password'
                  className=' w-full border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Password'
                  autoComplete='on'
                  {...register('password', rules.password)}
                />

                <div className='min-h-[1.25 rem] mt-1 text-sm text-red-600'>{errors.password?.message}</div>
              </div>
              <div className='mt-2'>
                <input
                  type='password'
                  className=' w-full border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Confirm Password'
                  autoComplete='on'
                  {...register('confirm_password', {
                    ...rules.confirm_password
                  })}
                />

                <div className='min-h-[1.25 rem] mt-1 text-sm text-red-600'>{errors.confirm_password?.message}</div>
              </div>
              <div className='mt-2'>
                <button className=' w-full bg-red-400 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-700'>
                  Register
                </button>
              </div>

              <div className=' mt-8 flex items-center justify-center'>
                <span className='text-gray-400'>Have account?</span>
                <Link className='ml-2 text-red-400' to='/login'>
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
