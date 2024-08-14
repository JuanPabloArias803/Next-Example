import Navbar from '../components/navbar';
import { useLanguage } from '@/global-states/language';

export default function AboutUs() {
  const language=useLanguage((state)=>state.language);
    return (
      <>
        <Navbar/>
        <h2>{language==='english' ? 'About Us' : language==='spanish' ? '¿Quienes Somos?':''}</h2>
      </>
    );
  }
  