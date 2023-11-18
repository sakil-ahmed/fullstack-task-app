'use client'

import {Button, Center, Heading} from "@chakra-ui/react";

import {useRouter} from "next/navigation";
import Head from "next/head";


export default function Home() {

    const router = useRouter()

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <Center w={'full'} h={'100vh'} flexDirection={'column'}>
                <Heading as={'h1'} fontSize={'80px'} textAlign={'center'} mb={'40px'}>All of your projects,
                    <br/>
                    all in one place.</Heading>

                <Button onClick={() => router.push('/auth/login')}>Continue</Button>

            </Center>

        </>

    )
}

