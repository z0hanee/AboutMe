import React from 'react'

const Cards = ({ titleUp, cards }) => {
  return (
    <div className="works">
      <div className="container">
        <div className="works__title">{titleUp}</div>
        <div className="works__list">
          {cards.map((card) => (
            <div key={card.id} className="works__card">
              <img src={card.imgCards} alt="da" />
              <div className="works__geo">{card.cardDescGeo}</div>
              <div className="works__desc">{card.cardDesc}</div>
              <a href={card.url} className="works__btn">{card.cardWrapBtn}</a>
            </div>

          ))}
        </div>
      </div>
    </div>
  )
}

export default Cards
