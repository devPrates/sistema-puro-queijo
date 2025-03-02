import { Button } from "@/components/ui/button";
import Link from "next/link"; 
import { LogoutButton } from "./login/components/logout-button";
import Header from "@/components/header";
import PageNavbar from "@/components/page-navbar";

export default function Home() {
  return (
    <>
      <PageNavbar />
      <Header />
    </>
  );
}
