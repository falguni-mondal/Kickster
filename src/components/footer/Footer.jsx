import React from 'react'
import { RiGithubFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    {
      heading: "shop",
      links: [
        { label: "men", path: "/shop/men" },
        { label: "women", path: "/shop/women" },
        { label: "kids", path: "/shop/kids" },
        { label: "collections", path: "/collections" },
        { label: "brands", path: "/brands" },
      ]
    },
    {
      heading: "customer",
      links: [
        { label: "my account", path: "/login" },
        { label: "order history", path: "/user/orders" },
        { label: "wishlist", path: "/user/wishlist" },
        { label: "cart", path: "/user/cart" }
      ]
    },
    {
      heading: "project",
      links: [
        { label: "github repository", path: "https://github.com/falguni-mondal/Kickster" }
      ]
    }
  ]
  const creator = [
    { name: "creatorGithub", icon: RiGithubFill, path: "https://github.com/falguni-mondal" },
    { name: "creatorLinkedIn", icon: FaLinkedinIn, path: "https://www.linkedin.com/in/falguni-mondal/" },
  ]

  return (
    <footer className='w-full px-5 lg:px-10 pb-0 mt-[18vh]'>
      <div className="footer-links flex flex-col gap-7 lg:grid lg:grid-cols-5 pb-14 lg:pb-20 pt-14 border-t-[1px] border-t-zinc-300">
        <div className="the-app lg:col-span-2 flex flex-col lg:justify-between gap-4">
          <h1 className='logo uppercase text-[3rem] mb-1 leading-none'><Link to="/">Kickster</Link></h1>
          <p className='w-[28ch] text-[0.9rem]'>Discover branded footwear to kickstart your wardrobe, one step at a time —</p>
          <div className="footer-heading creator-dets flex flex-col">
            <div className="creator-links text-zinc-500 lg:text-zinc-700 flex items-center gap-5 lg:gap-3 mt-1 text-[1rem] lg:text-[1.125rem]">
              <Link to="https://falguni.netlify.app" target='_blank'>My Portfolio</Link>
              <span>|</span>
              {
                creator.map(({ name, icon: Icon, path }) => (
                  <Link key={name} to={path} target="_blank"><Icon className='text-[1.4rem] lg:text-[1.3rem]' /></Link>
                ))
              }
            </div>
          </div>
        </div>
        {
          footerLinks.map(item => (
            <div key={item.heading} className="footer-heading">
              <h2 className='txt-medium capitalize text-[1.1rem] lg:text-[0.95rem]'>{item.heading}</h2>
              <ul className="flex flex-col gap-1 lg:gap-3 mt-1 lg:mt-3">
                {
                  item.links.map(({ label, path }) => (
                    <li key={label}>
                      {
                        label === "github repository" ?
                          <Link key={`${label}_footerlink`} to={path} target="_blank" className='capitalize text-zinc-500 lg:text-zinc-700 text-[0.9rem] lg:text-[0.95rem]'>{label}</Link>
                          :
                          <Link key={`${label}_footerlink`} className='capitalize text-zinc-500 lg:text-zinc-700 text-[0.9rem] lg:text-[0.95rem]' to={path}>{label}</Link>
                      }
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
      <span className='block py-5 pb-[5rem] lg:py-8 border-t border-t-zinc-400 text-zinc-700 text-[0.95rem]'>©2024 Kickster. All rights reserved.</span>
    </footer>
  )
}

export default Footer