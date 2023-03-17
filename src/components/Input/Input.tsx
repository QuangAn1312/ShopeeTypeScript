import { InputHTMLAttributes } from 'react'
import type { UseFormRegister, RegisterOptions } from 'react-hook-form'
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
  register?: UseFormRegister<any>
  rules?: RegisterOptions
  autoComplete?: string
}
export default function Input({
  type,
  errorMessage,
  placeholder,
  className,
  autoComplete,
  name,
  register,
  classNameInput = ' w-full border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm',
  classNameError = 'min-h-[1.25 rem] mt-1 mt-1 text-sm text-red-600',
  rules
}: Props) {
  const registerResult = register && name ? register(name, rules) : {}
  return (
    <div className={className}>
      <input
        type={type}
        className={classNameInput}
        autoComplete={autoComplete}
        placeholder={placeholder}
        {...registerResult}
      />
      <div className={classNameError}> {errorMessage}</div>
    </div>
  )
}
