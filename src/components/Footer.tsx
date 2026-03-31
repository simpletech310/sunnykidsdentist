import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-text-dark text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/sunnykidsdental.jpg"
                alt="Sunny Kids Dental"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="font-[family-name:var(--font-nunito)] font-extrabold text-xl">
                Sunny Kids Dental
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Where every smile shines bright! Fun, gentle dental care for kids in Pomona and Compton, CA.
            </p>
          </div>

          {/* Pomona */}
          <div>
            <h4 className="font-[family-name:var(--font-nunito)] font-bold text-lg mb-3">Pomona Office</h4>
            <p className="text-gray-400 text-sm mb-1">819 E Mission Blvd</p>
            <p className="text-gray-400 text-sm mb-3">Pomona, CA 91766</p>
            <a href="tel:+19094175369" className="text-sunny-yellow font-[family-name:var(--font-nunito)] font-bold hover:text-white transition-colors">
              909-417-5369
            </a>
          </div>

          {/* Compton */}
          <div>
            <h4 className="font-[family-name:var(--font-nunito)] font-bold text-lg mb-3">Compton Office</h4>
            <p className="text-gray-400 text-sm mb-1">1308 E Alondra Blvd</p>
            <p className="text-gray-400 text-sm mb-3">Compton, CA 90222</p>
            <a href="tel:+14247856995" className="text-sunny-yellow font-[family-name:var(--font-nunito)] font-bold hover:text-white transition-colors">
              (424) 785-6995
            </a>
          </div>
        </div>

        {/* Social + copyright */}
        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Sunny Kids Dental. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/sunnykidsdental"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sunny-yellow transition-colors"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
