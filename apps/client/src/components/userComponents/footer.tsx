import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-orange-100 mt-16 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h1 className="text-pink-950 text-2xl lg:text-3xl font-bold">
              SSECOMMERCE
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              Bridging Boundaries, Elevating Solutions: Your Ethiopian-Rooted, Global Tech Powerhouse.
            </p>
            <div className="space-y-2">
              <h2 className="font-bold text-lg text-gray-800">Follow Us</h2>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-950 hover:text-pink-800 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-950 hover:text-pink-800 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-950 hover:text-pink-800 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h2 className="font-bold text-lg text-gray-800">Quick Links</h2>
            <div className="flex flex-col gap-2">
              <Link href="/dashboard" className="text-gray-600 hover:text-pink-950 transition-colors text-sm">
                Home
              </Link>
              <Link href="/shop" className="text-gray-600 hover:text-pink-950 transition-colors text-sm">
                Shop
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-pink-950 transition-colors text-sm">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-pink-950 transition-colors text-sm">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h2 className="font-bold text-lg text-gray-800">Customer Service</h2>
            <div className="flex flex-col gap-2">
              <Link href="/cart" className="text-gray-600 hover:text-pink-950 transition-colors text-sm">
                Shopping Cart
              </Link>
              <Link href="/wishlist" className="text-gray-600 hover:text-pink-950 transition-colors text-sm">
                Wishlist
              </Link>
              <Link href="/profile" className="text-gray-600 hover:text-pink-950 transition-colors text-sm">
                My Account
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="font-bold text-lg text-gray-800">Contact</h2>
            <div className="flex flex-col gap-2 text-gray-600 text-sm">
              <p>Email: support@ssecommerce.com</p>
              <p>Phone: +251 911 234 567</p>
              <p className="mt-2">24/7 Customer Support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-pink-950 py-4 px-4">
        <div className="container mx-auto">
          <p className="text-sm text-center text-white">
            &copy; {new Date().getFullYear()} SSECOMMERCE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
