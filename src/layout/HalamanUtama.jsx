import Footer from "../components/Footer";
import Header from "../components/headerComponents/Header";
import Content from "../components/mainContent/Content";

export default function HalamanUtama(){
    return (
      <>
        <div className="max-w-screen overflow-x-hidden">
        <Header/>
        <Content />
        <Footer />
        </div>
      </>
    );
}