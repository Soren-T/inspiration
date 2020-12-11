import React from "react"
import { Card } from "./"

export const Cards = ({ cards }) => {
  const empty = !cards.length;
  const emptyState = {
    title: "No Articles Found",
    summary: "There are no articles that match the selected filters",
    image: [
      { url: '/map-question-mark.jpg' }
    ]
  }
  return (
    <div className="container pt-6 overflow-hidden">
      <div className="flex flex-wrap -mx-3 xl:-mx-6">
        {empty ? (
          <div className="w-full sm:w-1/2 xl:w-1/3 px-3 xl:px-6 py-6">
            <Card {...emptyState} />
          </div>
        ) : cards.map((card) => {
          return (              
            <div 
              key={`card_${card.slug}`}
              className="w-full sm:w-1/2 xl:w-1/3 px-3 xl:px-6 py-6">
              <Card {...card} />
            </div>
          );
        })}
      </div>
    </div>
  )
}
