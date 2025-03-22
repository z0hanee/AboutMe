import React from 'react'

const Footer = ({ footer }) => {
  return (
    <div className="footer">
      <div className="container">
        <h2 className="footer__title">{footer.titleUp}</h2>
        <ul className="footer__list">
          {footer.links.map((link, index) => (
            <li key={index} className="footer__list-item">
              <a href={link.url} className="footer__list-item-link">
                <img src={link.img} alt={link.name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer
