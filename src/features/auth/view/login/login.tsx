'use client'
import {HeadingH2} from "@/components/heading/Heading";
import Link from "next/link";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {authService} from "@/features/auth/logic/auth.service";
import {Button} from "@/components/Button/Button";
import {useMutation} from "@tanstack/react-query";
import {useRouter} from "next/navigation";
import {Notify} from "@/lib/utils/Notify";
import {AuthEntity} from "@/features/auth/data/auth.entity";

export const Login = () => {

  const router = useRouter()

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
    reset
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    }
  })

  const mutation = useMutation((dto: any) => authService.login(dto),
    {
      onSuccess() {
        Notify("Logged in" , "success")
        router.push('/board', { scroll: false })
      },
      onError(err:AuthEntity.responseError) {
        Notify(err.message , "error")
      }
    }
  )

  const onSubmit = (data: any) => {
    mutation.mutate(data);
    reset()
  }

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

      <Button isLoading={mutation.isLoading} text={'Login'} type={'submit'}/>
    </form>
  )
}