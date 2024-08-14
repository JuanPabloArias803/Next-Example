import Navbar from "@/components/navbar";
import { useLanguage } from "@/global-states/language";

export default function Home() {
  const language=useLanguage((state)=>state.language);
  return (
    <>
      <Navbar/>
      <h1>{language==='english' ? 'Next Functionalities Example' : language==='spanish' ? 'Funcionalidades de Next':''}</h1>
    </>
  );
}
