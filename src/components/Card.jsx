import React from "react";
import { Link } from "gatsby-plugin-modal-routing";

export const Card = (props) => {
  const {
    slug,
    title,
    summary,
    image
  } = props;

  return (
    <div className="bg-white dark:bg-blue-900 h-full shadow-sm rounded-md overflow-hidden hover:bg-blue-100 dark:hover:bg-blue-800">
      <Link to={`/${slug}`}  asModal>
        <div className="bg-blue-300">
          <img src={image[0].url} alt={title} />
        </div>
        <div className="p-5 pb-1">
          <h1 className="text-2xl text-blue-500 dark:text-blue-300 font-bold leading-snug">
            {title}
          </h1>
          <p className="text-base text-blue-900 dark:text-blue-400 mb-5 font-medium">
            {summary}
          </p>
        </div>
      </Link>
    </div>
  )
}
