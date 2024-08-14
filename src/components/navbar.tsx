import Link from "next/link";

export default function Navbar() {
    return (
      <>
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-us">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
      </>
    );
  }
  