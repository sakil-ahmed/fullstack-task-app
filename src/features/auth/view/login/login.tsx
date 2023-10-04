'use client'
import {HeadingH2} from "@/components/heading/Heading";
import Link from "next/link";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {authService} from "@/features/auth/logic/auth.service";

export const Login = () => {

  const schema = yup
    .object({
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
  const onSubmit = (data: any) => authService.login(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='login_form'>
      <HeadingH2>Login</HeadingH2>
      <div className='input_group'>
        <label>Email</label>
        <input type='text' {...register('email')} placeholder='Enter your email'/>
        <p className='error_text'>{errors.email?.message}</p>
      </div>
      <div className='input_group'>
        <label>Password</label>
        <input type='password' {...register('password')} placeholder='Password'/>
        <p className='error_text'>{errors.password?.message}</p>
      </div>

      <p>{"Don't"} have an account yet? <Link href={'/auth/signup'}>Sign up</Link> for free</p>

      <button className='login_button' type='submit'>Login</button>
    </form>
  )
}