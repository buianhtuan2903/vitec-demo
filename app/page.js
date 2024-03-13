import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-24 flex flex-col items-center justify-between ">

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
  
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
      <div className="relative m-5 max-w-md">
          
          <div className="my-5 rounded-md shadow-sm">
            <input type="text" id="loginid" class="h-10 block w-full rounded-md pl-9 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="ID" spellcheck="false" name="loginid">
            </input>
          </div>
          <div className="my-5 rounded-md shadow-sm">
            <input type="text" id="loginpw" class="h-10 block w-full rounded-md  pl-9 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Password" spellcheck="false" name="loginpw">
            </input>
          </div>
        </div>

      <a
          href="./trangchu"
          className="group rounded-lg border border-gray-800 m-5 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        > Login
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={200}
            height={24}
            priority
          />
        </a>
      </div>

    </main>
  );
}
