import { Link } from "gatsby"
import React from "react"
// import { Footer, SignupForm } from "../components";

export const Layout = ({ children, signup = true, share = false }) => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white py-6">
        <div className="container text-center">          
          <div className="relative">
            <Link to="/" className="inline-block">
              <img alt="Logo" src="/d20.png" />
            </Link>
          </div>
          <h3 className="text-2xl lg:text-4xl font-bold text-blue-700 tracking-tight">
            Gain Inspiration - a DnD Blog
          </h3>
        </div>
      </header>
      {children}
      {/*
        Hide SignupForm/Footer for now until email functionality built out.
        Without the signup form there's not much reason for the footer so hide that as well.
        {signup && (
          <div className="bg-white border-t border-b border-transparent  py-8 lg:py-16 mt-8">
            <div className="container">
              <SignupForm />
            </div>
          </div>
        )}
        <Footer share={share} />
      */}
    </div>
  )
}
