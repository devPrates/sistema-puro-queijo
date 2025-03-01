import { Button } from "@/components/ui/button";
import Link from "next/link"; 

export default function Home() {
  return (
    <div className="container mx-auto h-full flex flex-col items-center justify-center space-y-2 ">
      <h1>Puro Queijo</h1>
      <Link href="/dashboard/users">
        <Button>Teste config</Button>
      </Link>
    </div>
  );
}
