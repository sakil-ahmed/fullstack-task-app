'use client'
import {HeadingH2} from "@/components/heading/Heading";
import Link from "next/link";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import {authService} from "@/features/auth/logic/auth.service";
import {useMutation} from "@tanstack/react-query";
import {Notify} from "@/lib/utils/Notify";
import {AuthEntity} from "@/features/auth/data/auth.entity";
import {useRouter} from "next/navigation";
import {Button} from "@/components/Button/Button";

export const Signup = () => {
  const router = useRouter()
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


  const mutation = useMutation((dto: any) => authService.login(dto),
    {
      onSuccess() {
        Notify("Account Created" , "success")
        router.push('/board', { scroll: false })
      },
      onError(err:AuthEntity.responseError) {
        Notify(err.message , "error")
      }
    }
  )



  const onSubmit = (data: any) => mutation.mutate(data)
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
      <Button text={'Sign Up'} isLoading={mutation.isLoading} type={'submit'}/>
    </form>
  )
}