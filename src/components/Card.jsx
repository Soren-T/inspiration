import React from "react";
import { Link } from "gatsby";

export const Card = (props) => {
  const {
    slug,
    title,
    summary,
    image
  } = props;

  return (
    <div className="bg-white h-full shadow-sm rounded-md overflow-hidden hover:bg-blue-100">
      <Link to={`/${slug}`}>
        <div className="divide-y divide-gray-200 divide-solid">
          <div className="bg-blue-300">
            <img className="object-cover h-60 w-full" src={image[0].url} alt={title} />
          </div>
          <div className="p-4">
            <h1 className="text-2xl text-blue-500 font-bold leading-snug">
              {title}
            </h1>
          </div>
          <div className="p-4">
            <p className="text-base text-blue-900 mb-5 font-medium">
              {summary}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
