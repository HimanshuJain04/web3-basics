import Link from "next/link";



const data = [
  {
    label:"Hashing",
    path:"/hashing"
  },
  {
    label:"Hashing With Prefix Nonce",
    path:"/hashing/prefix-nonce"
  }

];


export default function Home() {
  return (
  <div className="flex flex-col gap-10 items-center justify-center min-h-screen w-full">
    {data.map((item, index) => (
      <Link key={index} href={item.path}>
        <div className="bg-[#232323] font-medium hover:font-semibold transition-all duration-300 ease-in-out p-4 rounded-md">
        {item.label}
        </div>
      </Link>
    ))}
</div>
  );
}
