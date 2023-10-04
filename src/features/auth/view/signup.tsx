'use client'
import {HeadingH2} from "@/components/heading/Heading";
import Link from "next/link";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

export const Signup = () => {
  const schema = yup
    .object({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().min(6).required()
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: any) => console.log(data)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='login_form'>
      <HeadingH2>Sign Up</HeadingH2>
      <div className='input_group'>
        <label>Name</label>
        <input type='text' {...register('name')} placeholder='Enter your name'/>
        <p className='error_text'>{errors.name?.message}</p>
      </div>
      <div className='input_group'>
        <label>Email</label>
        <input type='email' {...register('email')} placeholder='Enter your email'/>
        <p className='error_text'>{errors.email?.message}</p>
      </div>
      <div className='input_group'>
        <label>Password</label>
        <input type='password' {...register('password')} placeholder='Password'/>
        <p className='error_text'>{errors.password?.message}</p>
      </div>
      <p> Already have an account? <Link href={'/auth/login'}> Log in</Link></p>
      <button className='login_button' type='submit'>Sign Up</button>
    </form>
  )
}