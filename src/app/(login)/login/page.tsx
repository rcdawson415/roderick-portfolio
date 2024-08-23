'use client'
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from '../../../../config/ddbDocClient'
import Image from 'next/image';
import logo from '/public/logo.svg';

export default function LoginPage() {
  const router = useRouter();
  
   const getUser = async () => {
    const command = new GetCommand({
      TableName: "User",
      Key: {
        userId:'abc',
        username:'user'
      },
    });
  
    const response = await ddbDocClient.send(command);
    console.log(response);
    return response;
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
 
   getUser();
  }
 
  return (
    <main className="flex min-h-screen flex-col items-center ">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Welcome to RC's coding projects&nbsp;
            <code className="font-mono font-bold">01001000 01000101 01001100 01001100 01001111 </code>
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" Paradise Solutions"}
              <Image
                src={logo}
                alt="Paradise Solutions Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="password" placeholder="Password" required />
              <button type="submit">Login</button>
        </form>

      </main>
  )
}