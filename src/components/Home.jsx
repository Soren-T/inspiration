import React, { useCallback, useState } from "react";
import { Cards, Filter } from "./";

import * as _ from 'lodash';

export const Home = ({ cards, tags }) => {
  const [filteredCards, setFilteredCards] = useState(cards);

  // with array of tags sent from the Filter component filter the cards to be displayed
  const filterCards = useCallback(
    (activeTags) => {
      // if there are no tags don't try to filter
      console.log(activeTags, cards, filteredCards);
      if (!activeTags.length) {
        // if the original array of cards and the filtered array
        // are the same length we can assume no update is needed
        if (cards.length !== filteredCards.length) {
          setFilteredCards(cards);
        }
      } else {
        let newFilter = cards.slice();
        newFilter = newFilter.filter(n => {
          let match = false;
          n.tag__from_Tags_.forEach(t => {
            if (activeTags.indexOf(t) !== -1) match = true;
          });
          return match;
        });
        // order matters for differenceBy so always compare against the larger array.
        // in other words larger array goes first.
        const diff = newFilter.length > filteredCards.length
          ? _.differenceBy(newFilter, filteredCards, 'slug').length
          : _.differenceBy(filteredCards, newFilter, 'slug').length;
        if (diff > 0) {
          setFilteredCards(newFilter);
        }
      }
    },
    [filteredCards, cards]
  );

  return (
    <div className="container pt-6">
      <div className="flex flex-wrap -mx-3 xl:-mx-6">
        <Filter filterCards={filterCards} tags={tags} />
        <Cards cards={filteredCards} />
      </div>
    </div>
  )
}
