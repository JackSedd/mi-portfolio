"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname() ?? "/";
  const isEnglish = pathname.startsWith("/en");

  // compute switch path: if we're in /en/... remove /en else add /en
  const switchPath = isEnglish
    ? (pathname.replace(/^\/en/, "") || "/")
    : (pathname === "/" ? "/en" : `/en${pathname}`);

  return (
    <nav className="flex items-center justify-center gap-6 py-4 bg-white text-gray-800 shadow-sm fixed top-0 left-0 right-0 z-50">
      {isEnglish ? (
        <>
          <Link href="/en" className="hover:text-blue-600">Home</Link>
          <Link href="/en/about" className="hover:text-blue-600">About</Link>
          <Link href="/en/projects" className="hover:text-blue-600">Projects</Link>
          <Link href="/en/certifications" className="hover:text-blue-600">Certifications</Link>
          <Link href="/en/contact" className="hover:text-blue-600">Contact</Link>

          <Link href={switchPath} className="ml-4 px-3 py-1 border rounded-full text-sm">
            🇪🇸 Español
          </Link>
        </>
      ) : (
        <>
          <Link href="/" className="hover:text-blue-600">Inicio</Link>
          <Link href="/about" className="hover:text-blue-600">Sobre mí</Link>
          <Link href="/projects" className="hover:text-blue-600">Proyectos</Link>
          <Link href="/certifications" className="hover:text-blue-600">Certificaciones</Link>
          <Link href="/contact" className="hover:text-blue-600">Contacto</Link>

          <Link href={switchPath} className="ml-4 px-3 py-1 border rounded-full text-sm">
            🇬🇧 English
          </Link>
        </>
      )}
    </nav>
  );
}