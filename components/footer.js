import React from 'react'
import Link from 'next/link'

const Footer = () => (
  <footer className='footer'>
    <div className='container'>
      <ul className='footer__links'>
        <li><h2>pigeon.immo</h2></li>
        <li><Link href='/mentions-legales'><a>Mentions légales</a></Link></li>
        <li><Link href='/faq'><a>FAQ</a></Link></li>
        <li><a href='mailto:cadastre@data.gouv.fr'>Contact</a></li>
      </ul>
    </div>
    <style jsx>{`
      .footer__social img {
        width: 25px;
      }
      `}</style>
  </footer>
)

export default Footer
