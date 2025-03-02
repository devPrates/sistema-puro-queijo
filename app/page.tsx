import { Button } from "@/components/ui/button";
import Link from "next/link"; 
import { LogoutButton } from "./login/components/logout-button";

export default function Home() {
  return (
    <div className="container mx-auto h-full flex flex-col items-center justify-center space-y-2 ">
      <h1>Puro Queijo</h1>
      <Link href="/login">
        <Button>Teste config</Button>
      </Link>

      <LogoutButton />
    </div>
  );
}
