import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-ieBackground flex flex-col h-screen">
      
      <div className="flex flex-col mx-auto h-full justify-center items-center w-full gap-3 bg-ieBlue-10">
        <span className="text-display-xl font-semibold">Pouri Kalantari</span>
        <span className="text-display-lg font-bold">
          <Link href={"./en/test"}>Please See My Work</Link>
        </span>
      </div>
    </div>
  );
}
