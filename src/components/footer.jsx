
import {
  MapPin,
  Phone,

} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const aboutLinks = [
    "About Us",
    "Our Products",
    "Services",
    "Contact Us",
  ];

  const supportLinks = [
    "Frequently Asked Questions",
    "Shopping Information",
    "Order Enquiries",
    "Privacy Policy",
    "Terms and Conditions",
  ];

  const shopLinks = [
    "All Products",
    "Kitchen",
    "Cleaning",
    "Bathroom",
    "Home Organization",
    "Offers",
  ];

  return (
    <footer className="w-full bg-[#111111] text-white">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:gap-12 lg:px-24 lg:py-16">

        {/* About Castra */}
        <div>
          <h2 className="mb-7 text-xl font-bold">
            About Castra
          </h2>

          <ul className="space-y-3">
            {aboutLinks.map((link) => (
              <li key={link}>
                <span className="cursor-default text-base text-gray-300 transition-colors hover:text-white sm:text-lg">
                  {link}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h2 className="mb-7 text-xl font-bold">
            Customer Support
          </h2>

          <ul className="space-y-3">
            {supportLinks.map((link) => (
              <li key={link}>
                <span className="cursor-default text-base text-gray-300 transition-colors hover:text-white sm:text-lg">
                  {link}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Shop Categories */}
        <div>
          <h2 className="mb-7 text-xl font-bold">
            Shop
          </h2>

          <ul className="space-y-3">
            {shopLinks.map((link) => (
              <li key={link}>
                <span className="cursor-default text-base text-gray-300 transition-colors hover:text-white sm:text-lg">
                  {link}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="mb-7 text-xl font-bold">
            Visit or Contact Us
          </h2>

          <div className="space-y-5 text-base leading-7 text-gray-300 sm:text-lg">

            <p className="flex items-start gap-2">
              <MapPin
                size={21}
                className="mt-1 shrink-0 text-gray-400"
              />
              <span>
                Elius Plaza, 6th Floor, Room 3,
                Thika, Kenya
              </span>
            </p>

            <a
              href="tel:0771317400"
              className="flex items-center gap-2 font-medium text-white transition-colors hover:text-[#e8a0b3]"
            >
              <Phone size={20} />
              0771317400
            </a>

            <p className="text-sm leading-6 text-gray-400">
              Official social links will appear when configured.
            </p>

            {/* Add official social links when available */}
            {/*
            <div className="flex gap-4 pt-2">
              <a href="YOUR_FACEBOOK_URL" aria-label="Facebook">
                <Facebook size={22} />
              </a>
              <a href="YOUR_INSTAGRAM_URL" aria-label="Instagram">
                <Instagram size={22} />
              </a>
            </div>
            */}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1800px] flex-col justify-between gap-5 px-6 py-7 sm:px-10 md:flex-row md:items-start lg:px-24">

          <p className="text-base leading-7 text-gray-300 sm:text-lg">
            © {year} Castra Households. Everything Your Home Needs.
          </p>

          <div className="flex flex-col items-start gap-3 text-base text-gray-300 sm:text-lg">
            <span className="cursor-default hover:text-white">
              Privacy Policy
            </span>

            <span className="cursor-default hover:text-white">
              Terms and Conditions
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}
