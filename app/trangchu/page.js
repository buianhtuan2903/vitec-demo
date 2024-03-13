import Image from "next/image";
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between ">

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
  
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

      <a
          href="./"
          className="group rounded-lg border border-gray-800 my-4 px-10 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        > Chart 1
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={200}
            height={24}
            priority
          />
        </a>
        <a
          href="./"
          className="group rounded-lg border border-gray-800 my-4 px-10 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        > Chart 2
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={200}
            height={24}
            priority
          />
        </a>
        <a
          href="./"
          className="group rounded-lg border border-gray-800 my-4 px-10 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        > Chart 3
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