import { useState, useEffect } from 'react'
// import { useTranslation } from 'react-i18next'
import logo from '../images/ataev2.563d9f6552a0ae9e7a2b.png'
// import './Loader.css'
import { NavbarMobile } from './NavbarMobile'

export const Navbar = () => {
  const [loading, setLoading] = useState(true)
  // const { t, i18n } = useTranslation()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleLogoClick = () => {
    setLoading(true)
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }
  return (
    <>
      {loading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}
      <header className="bg-transparent fixed top-0 left-0 w-full z-50 py-4">
        <div className="container w-[1440px] max-w-4/5 mx-auto max-lg:hidden">
          <nav>
            <ul className="flex items-center justify-between">
              <li className="list-none">
                <a
                  className="text-xl font-bold text-slate-800 cursor-pointer"
                  onClick={handleLogoClick}
                >
                  {/* {t('home')} */} Information
                </a>
              </li>
              <li className="list-none">
                <a className="text-xl font-bold text-slate-800" href="#about">
                  {/* {t('about')} */} About Us
                </a>
              </li>
              <li className="list-none">
                <a className="text-xl font-bold text-slate-800" href="#tours">
                  {/* {t('tours')} */} Enterprises
                </a>
              </li>
              <li className="list-none">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={handleLogoClick}
                >
                  <div className="w-[200px] object-cover">
                    <img className="w-full" src={logo} alt="Logo" />
                  </div>
                </div>
              </li>
              <li className="list-none">
                <a
                  className="text-xl font-bold text-slate-800"
                  href="#contacts"
                >
                  {/* {t('contacts')} */} Our advantages
                </a>
              </li>
              <li className="list-none">
                <a
                  className="text-xl font-bold text-slate-800"
                  href="#contacts"
                >
                  {/* {t('contacts')} */} News
                </a>
              </li>
              <li className="list-none">
                <a
                  className="text-xl font-bold text-slate-800"
                  href="#contacts"
                >
                  {/* {t('contacts')} */} Communication
                </a>
              </li>
              <li>
                <select
                  name=""
                  id=""
                  className="bg-transparent outline-none text-xl font-bold text-slate-800"
                >
                  <option value="en">EN</option>
                  <option value="ru">RU</option>
                  <option value="uz">UZ</option>
                </select>
              </li>
            </ul>
          </nav>

          {/* <div className="flex items-center gap-5">
              <p
                className="text-xl font-bold text-slate-800 cursor-pointer"
                // onClick={() => i18n.changeLanguage('uz')}
              >
                UZ
              </p>
              <p
                className="text-xl font-bold text-slate-800 cursor-pointer"
                // onClick={() => i18n.changeLanguage('en')}
              >
                EN
              </p>
              <p
                className="text-xl font-bold text-slate-800 cursor-pointer"
                // onClick={() => i18n.changeLanguage('ru')}
              >
                RU
              </p>
              <div>
                <i className="fa-brands fa-telegram text-xl font-bold text-slate-800 cursor-pointer"></i>
              </div>
              <div>
                <i className="fa-brands fa-instagram text-xl font-bold text-slate-800 cursor-pointer"></i>
              </div>
            </div> */}
        </div>
        <NavbarMobile handleLogoClick={handleLogoClick} logo={logo} />
      </header>
    </>
  )
}
