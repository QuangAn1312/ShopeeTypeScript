import type { UseFormRegister, RegisterOptions } from 'react-hook-form'
interface Props {
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  className?: string
  name: string
  register?: UseFormRegister<any>
  rules?: RegisterOptions
  autoComplete?: string
}
export default function Input({
  type,
  errorMessage,
  placeholder,
  className,
  autoComplete ,
  name,
  register,
  rules
}: Props) {
  return (
    <div className={className}>
      <input
        type={type}
        className=' w-full border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
        autoComplete={autoComplete}
        placeholder={placeholder}
        {...register(name, rules)}
      />
      <div className='min-h-[1.25 rem] mt-1 text-sm text-red-600'> {errorMessage}</div>
    </div>
  )
}
