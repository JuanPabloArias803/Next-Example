import Navbar from "@/components/navbar";
import { useLanguage } from "@/global-states/language";

export default function Contact() {
  const language=useLanguage((state)=>state.language);
    return (
      <>
        <Navbar/>
        <h2>{language==='english' ? 'Contact' : language==='spanish' ? 'Contáctanos':''}</h2>
      </>
    );
  }
  