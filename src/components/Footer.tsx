
import React, { useState } from "react";
import bgImage from "../assets/bg-image.jpg";
import { socialLinks } from "../utils/appData";
import type { SocialLink } from "../utils/types";

const Footer = () => {
  const [email, setEmail] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

  }
  return (
    <footer className="w-screen top-border-shape py-12 px-2 md:px-10 relative" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#301e1ad7] z-0" />

      <section className="  relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white px-2">
        {/* Get In Touch */}
        <div>
          <h4 className="uppercase mb-4 text-2xl font-semibold tracking-[3px]">Get In Touch</h4>
          <p>123 Street, New York, USA</p>
          <a href="tel:+01234567890">+012 345 67890</a>
          <a href="mailto:info@example.com" className="m-0">info@example.com</a>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="uppercase mb-4 text-2xl font-semibold tracking-[3px]">Follow Us</h4>
          <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
          <div className="flex space-x-2 mt-3">
            {socialLinks.map((item: SocialLink, index: number) => (
              <a
                key={index}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white text-white text-lg transition-all duration-300 hover:bg-[var(--primary-bg-color)] hover:text-[var(--primary-dark)]"
              >
                <item.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Open Hours */}
        <div>
          <h4 className="uppercase mb-4 text-2xl font-semibold tracking-[3px]">Open Hours</h4>
          <div>
            <h6 className="uppercase">Monday - Friday</h6>
            <p>8.00 AM - 8.00 PM</p>
            <h6 className="uppercase">Saturday - Sunday</h6>
            <p>2.00 PM - 8.00 PM</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="px-4 md:px-0">
          <h4 className="uppercase mb-4 text-2xl font-semibold tracking-[3px]">Newsletter</h4>
          <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
          <form onSubmit={handleSubmit} className="flex mt-3 bg-white">
            <input
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="flex-1 px-4 py-3 text-sm text-black outline-none"
            />
            <button className="bg-[var(--primary-fair)] font-bold px-4 py-3 text-[var(--primary-dark)]">
              Sign Up
            </button>
          </form>
        </div>
      </section>

      <hr className="text-white bg-white my-5" />

      <article className="text-center text-white relative z-20">
        <p>
          Copyright © <span className="text-[var(--primary-fair)]">yourBrand</span>. All Rights Reserved.
        </p>
        <p>
          Designed by <span className="text-[var(--primary-fair)]">Ali</span>
        </p>
      </article>
    </footer>
  )
}

export default Footer