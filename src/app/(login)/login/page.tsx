'use client'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from '../../../../config/ddbDocClient'
import Image from 'next/image';
import logo from '/public/logo.svg';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
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

  async function handleSubmit() {
 
   getUser();
  }
 
  return (
    <main className="flex min-h-screen flex-col items-center ">
        <div className="z-10 w-full max-w-5xl items-center flex flex-col font-mono text-lg lg:flex">
          <p className="left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Welcome to Paradise Portfolios &nbsp;
            <code className="font-mono font-bold">Paradise Solutions </code>
          </p>
          <div className="">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
               Please Signin or SignUp to continue
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
          <div className=' grid grid-cols-2 space-x-2'>
            <div> 
              <label>Email</label>
              <input className="text-black dark:invert" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}name="email" placeholder="Email" required />
            </div>
             <div>
              <label>Password</label>
              <input className="text-black dark:invert" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
             </div>
              <button>SignUp</button>
              <button onClick={()=>handleSubmit()}>Login</button>
            </div>
        </div>

      </main>
  )
}