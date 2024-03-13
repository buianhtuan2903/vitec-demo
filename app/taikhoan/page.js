import Image from "next/image";

export default function Page() {
  return (
    <div className="mt-24 flex flex-col items-center justify-between ">
      <div className="m-5 grid text-center lg:max-w-5xl lg:w-full  lg:text-left">

      <a
          href="./"
          className="group rounded-lg border border-gray-800 m-5 p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        > Logout
          {/* <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={200}
            height={24}
            priority
          /> */}
        </a>
      </div>

    </div>
  );
}
