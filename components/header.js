import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HamburgerMenu from './hamburger-menu'

const links = [
  {text: 'Données cadastrales', href: '/datasets'},
  {text: 'Carte', href: '/map'},
  {text: 'DVF', href: '/dvf'},
  {text: 'FAQ', href: '/faq'}
]

export default () => (
  <header className='navbar' role='navigation'>
    <div className='navbar__container'>

      <Link href='/'>
        <a>
          <img className='nav__logo' src='/static/images/logos/bird.png' height={38} width={'auto'} alt='Page d’accueil de pigeon.immo' />
        </a>
      </Link>

      <nav>
        <ul className='nav__links'>
          {links.map(link => (
            <li key={link.text} className='nav__item'>
              <Link href={link.href}><a>{link.text}</a></Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className='hamburger-menu'>
        <HamburgerMenu links={links} />
      </div>

    </div>
    <style jsx>{`
      .navbar__container {
        flex-flow: nowrap;
        align-items: center;
      }

      .navbar__home:hover {
        background: none;
      }

      .hamburger-menu {
        display: none;
      }

      .nav__logo {
        height: 38px;
      }

      .nav__title{
      line-height: 100%;
      font-size:26px;
      color:green;
      }

      @media (max-width: 800px) {
        nav {
          display: none;
        }

        .hamburger-menu {
          display: block;
          margin: 0 1em;
        }
      }

      @media (max-width: 380px) {
        .nav__logo {
          height: 28px;
        }
      }
    `}</style>
  </header>
)
