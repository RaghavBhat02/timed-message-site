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

const setMessage: Command = {
  command: "/setMessage",
  options: [
    {
      name: "announcement",
      value: "Gora's Grill Now!"
    },
    {
      name: "channel",
      value: "#govindas-party"
    },
    {
      name: "time",
      value: "120"
    }
  ]
}
const listMessages: Command = {
  command: "/listMessages",
  options: []
}

const removeMessage: Command = {
  command: "/removeMessage",
  options: [
    {
      name: "messageId",
      value: "2d7ba34f-35b8-4b28-846e-f79fb2f61ee6"
    }
  ]
}
function Message({ user, profile, message, command }: MessageProps) {
  return (
    <div className="flex flex-row gap-2 bg-rose-400 rounded-md p-2 hover:scale-105 transition-all lg:w-3/4 mx-auto">
      <Image src={profile} alt={`profile pic for ${user}`} className="h-12 w-12 rounded-full bg-berry-blue" width={40} height={40} />
      <div className="flex flex-col">
        <span className="text-lg font-semibold">{user}</span>
        <span>
          <span className="italic font-semibold">{command?.command} </span>
          {command?.options.map((opt, i) => 
            <span key={i}>{opt.name}=<span className="bg-gray-800 p-1 rounded-md">{opt.value}</span> </span>
          )}
          <span>{message}</span>
        </span>
      </div>
    </div> 
  )
}
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
      <div className="space-y-4">
        <h1 className={`text-3xl md:text-6xl font-bold ${michegar.className} lg:w-3/4 mx-auto`}>Check out how we work<span className={inter.className + " italic"}>:</span> </h1>
        <div className="space-y-2">
          <h2 className="font-bold text-2xl md:text-4xl lg:w-3/4 mx-auto">Set a Message!</h2>
          <div className="space-y-2">
            <Message  
              user="Admin User Gaura" 
              profile="/profile.jpg"
              command={setMessage}
            />
            <Message  
              user="Timed Message Bot" 
              profile="/logo.svg"
              message={(<span>You have successsfully set the following message 
                  <br /> ---- <br /> 
                  Gora&apos;s Grill Now 
                  <br /> ---- <br /> 
                  in the channel<span> </span>
                  <span className="inline-flex flex-col max-w-max">
                    <span className="bg-slate-500 px-1 rounded-md">#govindas-party</span>
                  </span>
                  <span> </span>
                  every 120 minutes.
                </span>
              )}
            />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="font-bold text-2xl md:text-4xl lg:w-3/4 mx-auto">See your Messages!</h2>
          <div className="space-y-2">
            <Message  
              user="Admin User Gaura" 
              profile="/profile.jpg"
              command={listMessages}
            />
            <Message  
              user="Timed Message Bot" 
              profile="/logo.svg"
              message={(
                <div className="bg-rose-600 p-2 rounded-md">
                  <span className="font-bold text-lg">Your Messages:</span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-2">
                    <div className="flex flex-col">
                      <span className="font-semibold">Message Id</span>
                      <span>2d7ba34f-35b8-4b28-846e-f79fb2f61ee6</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold">Message/Announcement</span>
                      <span>Gora&apos;s Grill Now</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold">Timer (in minutes)</span>
                      <span>120</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold">Channel</span>
                      <span className="bg-slate-500 px-1 rounded-md max-w-max">#govindas-party</span>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="font-bold text-2xl md:text-4xl lg:w-3/4 mx-auto">Remove Messages!</h2>
          <div className="space-y-2">
            <Message  
              user="Admin User Gaura" 
              profile="/profile.jpg"
              command={removeMessage}
            />
            <Message  
              user="Timed Message Bot" 
              profile="/logo.svg"
              message={(<span>You have successfully deleted the message with id <code className="bg-rose-600 px-1">3cf76985-f957-48dd-972f-a9a652bc0af6</code></span>)}
            />
          </div>
        </div>
      </div>

    </main>
  )
}
