"use client"
import Image from 'next/image'
import {Sidebar} from "@/app/AppLayout/Sidebar/Sidebar";
import {useAuthStore} from "@/features/auth/logic/auth.store";
import {useRouter} from "next/navigation";


export default function Home() {

  return (<main className={'loading_screen'}>
    <div className={'main_loading'}></div>
  </main>)
}