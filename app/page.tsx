import Head from "@/components/Header/Head";
import Image from "next/image";
import HomeScreen from "@/components/Pages/Home";
import Footer from "@/components/Pages/Footer";

export default function Home() {
  return (
    <div className="pt-16 overflow-y-auto relative overflow-x-hidden">
      <Head/>
      <HomeScreen/> 
     <Footer/>
    </div>
  );
}
