'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.title = "Vse Pro Stavby";

    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3b82f6" /><stop offset="100%" stop-color="#2563eb" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = faviconUrl;
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Vse Pro Stavby</div>
          <div className="hidden md:flex space-x-6">
            <a href="#sluzby" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Služby</a>
            <a href="#kontakt" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Kontakt</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className="flex justify-end p-4">
            <button onClick={closeMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 pt-10">
            <a href="#sluzby" onClick={closeMenu} className="text-xl text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2">Služby</a>
            <a href="#kontakt" onClick={closeMenu} className="text-xl text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2">Kontakt</a>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20 md:py-32 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">Vše pro vaše stavby</h1>
            <p className="text-xl md:text-2xl mb-8">Komplexní řešení pro vaše stavební projekty</p>
            <a href="#kontakt" className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300">Kontaktujte nás</a>
          </div>
        </section>

        {/* Services Section */}
        <section id="sluzby" className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Naše Služby</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105">
                <div className="flex justify-center mb-4 text-blue-500">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2m7-12V7m-4 6h8m-4 0v4m0-4a4 4 0 100-8 4 4 0 000 8z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Půjčovna strojů</h3>
                <p className="text-gray-600">Nabízíme široký sortiment stavebních strojů a nářadí k pronájmu pro vaše projekty.</p>
              </div>
              {/* Service 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105">
                <div className="flex justify-center mb-4 text-blue-500">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.91l-7.778 4.757-.962-1.572L19.4 12V3h-9.4L3 12H1l-2 2h2v7H2C0 21 0 16 0 16s0-4 2-4h1V5h7l6-6h2V3l1 1v6zm-11 5L8 16V9l2-2v7zM4 14.5L2 12V6.5l2-2V13z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Zemní práce a doprava</h3>
                <p className="text-gray-600">Poskytujeme komplexní zemní práce a spolehlivou dopravu materiálu a strojů.</p>
              </div>
              {/* Service 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105">
                <div className="flex justify-center mb-4 text-blue-500">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Prodej stavebnin</h3>
                <p className="text-gray-600">Široký výběr kvalitních stavebních materiálů pro všechny typy konstrukcí.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - based on original site's 'O nás' and 'Sortiment' */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">O Nás</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Firma Vše pro Stavby zajišťuje komplexní služby pro vaše stavební projekty. Máme dlouholeté zkušenosti v oboru a nabízíme spolehlivá řešení pro profesionální i soukromé zákazníky.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Naším cílem je poskytovat vysoce kvalitní služby a produkty, které splňují i ty nejnáročnější požadavky. Spoléháme na individuální přístup a spokojenost zákazníka je prioritou.
              </p>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <img src="https://via.placeholder.com/600x400?text=Stavebn%C3%AD+pr%C3%A1ce" alt="Stavební práce" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-16 md:py-24 bg-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Kontaktujte Nás</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-12">
              <div className="flex flex-col items-center bg-blue-600 p-6 rounded-lg shadow-md w-full max-w-sm">
                <svg className="w-10 h-10 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13h9a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <p className="text-xl font-semibold mb-2">Email</p>
                <p className="text-lg">info@vseprostavby.cz</p>
              </div>
              <div className="flex flex-col items-center bg-blue-600 p-6 rounded-lg shadow-md w-full max-w-sm">
                <svg className="w-10 h-10 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <p className="text-xl font-semibold mb-2">Telefon</p>
                <p className="text-lg">+420 777 123 456</p>
              </div>
              <div className="flex flex-col items-center bg-blue-600 p-6 rounded-lg shadow-md w-full max-w-sm">
                <svg className="w-10 h-10 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <p className="text-xl font-semibold mb-2">Adresa</p>
                <p className="text-lg">Stavební 123, 110 00 Praha</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Vse Pro Stavby. Všechna práva vyhrazena.</p>
          <p className="mt-2 text-gray-400">Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">DigitalFusion</a></p>
        </div>
      </footer>
    </div>
  );
}
