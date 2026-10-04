import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="p-10 bg-black text-white">
      <Reveal>
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-4xl">Let's Connect!</h1>
          <div className="flex flex-col sm:flex-row gap-10">
            {/* Contacts */}
            <div className="flex flex-col gap-4 items-center">
              <h1 className="text-3xl">Contacts</h1>
              <a
                className="flex items-center gap-2"
                href="mailto:oswaldoct2021@outlook.com"
              >
                <img src="/img/icons/email.svg" className="w-5" />
                <p className="hover:text-yellow-200">
                  oswaldoct2021@outlook.com
                </p>
              </a>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-4 items-center">
              <h1 className="text-3xl">Socials</h1>
              <div className="flex gap-5">
                <a
                  href="https://github.com/OsCortes88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-115"
                >
                  <img
                    src="/img/icons/github.svg"
                    className="w-8 filter invert brightness-0"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/oswaldo-cortes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-115"
                >
                  <img src="/img/icons/linkedin.svg" className="w-8" />
                </a>
              </div>
            </div>

            {/* Logo */}
            <img className="h-20 w-auto" src="/img/icons/initials.png" />
          </div>
          {/* Copyright */}
          <p className="text-center">Copyright © 2026 Oswaldo Cortes-Tinoco</p>
        </div>
      </Reveal>
    </footer>
  );
}
