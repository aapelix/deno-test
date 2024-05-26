import { Head } from "$fresh/runtime.ts";
import Button from "../islands/Button.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="py-10 w-screen min-h-screen font-mono overflow-x-hidden text-center flex justify-center flex-col items-center text-5xl bg-[#e7fdff]">
        <h1 class="font-black">404</h1>
        <h1>Page not found</h1>
        <Button text="Back to home" link="/" />
      </div>
    </>
  );
}
