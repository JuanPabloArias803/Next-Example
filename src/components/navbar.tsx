import Link from "next/link";
import { useLanguage } from "@/global-states/language";

export default function Navbar() {
  const language=useLanguage((state)=>state.language);
  const {setLanguage}=useLanguage();
  return (
    <>
      <nav>
          <ul>
              <li><Link href="/">{language==='english' ? 'Home' : language==='spanish' ? 'Inicio':''}</Link></li>
              <li><Link href="/about-us">{language==='english' ? 'About Us' : language==='spanish' ? '¿Quienes Sómos?':''}</Link></li>
              <li><Link href="/contact">{language==='english' ? 'Contact' : language==='spanish' ? 'Contactanos':''}</Link></li>
          </ul>
          <select onChange={(e)=>setLanguage(e.target.value)}>
            <option value="english">English</option>
            <option value="spanish">Español</option>
          </select>
      </nav>
    </>
  );
  }
  