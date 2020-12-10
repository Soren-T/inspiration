import React from "react";
import { Link } from "gatsby-plugin-modal-routing";

export const Card = (props) => {
  const {
    slug,
    title,
    summary,
    image,
    navigation
  } = props;

  return (
    <div className="bg-white h-full shadow-sm rounded-md overflow-hidden hover:bg-blue-100">
      <Link
        state={{ navigation }}
        to={`/${slug}`}
        asModal>
        <div className="divide-y divide-gray-200 divide-solid">
          <div className="bg-blue-300">
            <img src={image[0].url} alt={title} />
          </div>
          <div className="p-5 pb-1">
            <h1 className="text-2xl text-blue-500 font-bold leading-snug">
              {title}
            </h1>
            <p className="text-base text-blue-900 mb-5 font-medium">
              {summary}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
