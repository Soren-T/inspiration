import PropTypes from "prop-types"
import React from "react"
import { Card } from "./"

export const Cards = (props) => {
  const { nodes } = props;
  // flatten nodes and rename in cards array;
  const cards = nodes.map(n => n.node);

  return (
    <div className="container pt-6 overflow-hidden">
      <div className="flex flex-wrap -mx-3 xl:-mx-6">
        {cards.map((item, i) => {
          const { data } = item;
          const navItems = cards.map((item) => `/${item.data.slug}`);
          return (
            <div
              className="w-full sm:w-1/2 xl:w-1/3 px-3 xl:px-6 py-6"
              key={`card_${data.slug}`}>
              <Card
                {...data}
                navigation={{
                  current: i,
                  items: navItems,
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

Cards.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
}
