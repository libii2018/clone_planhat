import Features from "@/components/features";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Testimoniale from "@/components/testimoniale";
import Curstomers from "@/components/curstomers";
import Stats from "@/components/Stats";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Curstomers />
      <Testimoniale />
      <Features />
      <Stats />
      <Footer />
    </div>
  );
}
