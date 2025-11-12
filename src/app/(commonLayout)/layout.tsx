
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import TopBar from "@/components/shared/Topbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
     <TopBar/>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;