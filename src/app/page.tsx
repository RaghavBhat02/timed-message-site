import Image from 'next/image'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import { spawn } from 'child_process';
const michegar = localFont({
  src: './Michegar.woff2',
  display: 'swap'
})
const inter = Inter({ subsets: ['latin'] })
type MessageProps = {
  user: string;
  profile: string;
  command?: Command;
  message?: ReactNode;
};

type Option = {
  name: string;
  value: string;
};
type Command = {
  command: string;
  options: Option[];
}
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
export default function Home() {
  return (
    <main className="p-4 md:p-8 flex flex-col justify-center items-center min-h-screen gap-10">

      <div className="flex flex-col items-center justify-center">
        <h1 className={`text-4xl md:text-6xl font-bold ${michegar.className}`}>Timed Message Bot<span className={inter.className + " italic"}>!</span></h1>
        <div className="w-96 h-64 overflow-clip">
          <Image className="w-96 -translate-y-16" src="/logo.svg" alt="logo" width={600} height={600} />
      </div>
        <div className="h-2"></div>
        <p className="md:ml-auto md:text-lg font-bold text-center">No one looks at pinned messages! Send timed messages throughout your server and automatically answer questions with AI!</p>
      </div>
      <a href="https://discord.com/api/oauth2/authorize?client_id=1100898467414540348&permissions=1494648760320&scope=bot%20applications.commands" className="shadow-lg py-2 px-4 md:py-4 md:px-6 rounded-md text-xl md:text-2xl font-bold bg-cyan-600 flex flex-row gap-2 items-center hover:scale-110 transition-all">
        <Image className="w-8 md:w-10" src="/discord-mark-white.svg" alt='discord logo' width={40} height={40} />
        Add to Discord!
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
