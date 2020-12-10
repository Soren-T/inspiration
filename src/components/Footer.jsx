import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export const Footer = ({ share }) => {
  const links = [
    {
      label: 'Facebook',
      link: "https://www.facebook.com",
      icon: FaFacebookF
    },
    {
      label: 'Twitter',
      link: "https://www.twitter.com",
      icon: FaTwitter
    },
    {
      label: 'Facebook',
      link: "https://www.linkedin.com",
      icon: FaLinkedinIn
    }
  ];

  return (
    <footer className="bg-white">
      <div className="container pt-4 pb-4 flex flex-wrap text-center lg:flex-row-reverse lg:justify-between lg:items-center">
        {share && (
          <ul className="w-full lg:w-auto">
            {links.map(l => (
              <FooterIconLink
                href={l.link}
                icon={l.icon}
                label={l.label}
              />
            ))}
          </ul>
        )}
        <div className="w-full lg:w-auto pt-6 lg:pt-0 text-blue-800 text-sm">
          &copy; 2020 All rights reserved.
        </div>
      </div>
    </footer>
  )
}

const FooterIconLink = ({ href, label, icon: Icon }) => {
  const linkParams = { href }

  if (href.startsWith("http")) {
    linkParams.target = "_blank"
    linkParams.rel = "noreferrer noopener"
  }

  return (
    <li className="inline-block px-2">
      <a
        {...linkParams}
        className="
          inline-flex h-8 w-8 border border-blue-800 text-blue-800
          rounded-full items-center justify-center transition-colors
          duration-200 hover:text-white hover:bg-blue-400 hover:border-blue-40
        ">
        <span className="sr-only">{label}</span>
        <Icon className="w-3 h-3 fill-current" />
      </a>
    </li>
  )
}
