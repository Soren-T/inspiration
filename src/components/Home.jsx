import React, { useState } from "react";
import { Cards, Filter } from "./";

export const Home = ({ cards, tags }) => {
  // flatten posts array and rename to cards
  const [filteredCards, setFilteredCards] = useState(cards);

  function filterCards(activeTags) {
    // if there are no tags don't try to filter
    if (!activeTags.length) return;
    let newFilter = filteredCards.slice();
    newFilter = newFilter.filter(n => {
      let match = false;
      n.Tags.forEach(t => {
        if (activeTags.indexOf(t) !== -1) match = true;
      });
      return match;
    });
    setFilteredCards(newFilter);
  }
  console.log('f', filteredCards)

  return (
    <div className="container pt-6">
      <div className="flex flex-wrap -mx-3 xl:-mx-6">
        <Filter filterCards={filterCards} tags={tags} />
        <Cards cards={filteredCards} />
      </div>
    </div>
  )
}
