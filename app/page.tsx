import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PageNavbar from "@/components/page-navbar";
import Products from "@/components/products";

export default function Home() {
  return (
    <>
      <PageNavbar />
      <Header />
      <Products />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
