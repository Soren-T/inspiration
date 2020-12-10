import React from "react"
import { Card } from "./"

export const Cards = ({ cards }) => {
  return (
    <div className="container pt-6 overflow-hidden">
      <div className="flex flex-wrap -mx-3 xl:-mx-6">
        {cards.map((card) => {
          return (
            <div
              className="w-full sm:w-1/2 xl:w-1/3 px-3 xl:px-6 py-6"
              key={`card_${card.slug}`}>
              <Card {...card} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
