"use client";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-purple-300 text-black py-12 mt-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">About SM SHOP</h2>
            <p className="text-sm text-black">
              NextCommerce offers the best products for men, women, kids, and more. Quality and satisfaction guaranteed!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Men" className="hover:text-primary">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/Women" className="hover:text-primary">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/Kids" className="hover:text-primary">
                  Kids
                </Link>
              </li>
              <li>
                <Link href="/Accessories" className="hover:text-primary">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <ul className="text-sm space-y-2 text-black">
              <li>Email: support@nextcommerce.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Commerce Street, City, Country</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-lg font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-primary">
                <Facebook size={24} />
              </Link>
              <Link href="https://instagram.com" className="hover:text-primary">
                <Instagram size={24} />
              </Link>
              <Link href="https://twitter.com" className="hover:text-primary">
                <Twitter size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <h2 className="text-lg font-bold mb-4">Subscribe to our Newsletter</h2>
          <form className="flex space-x-4">
            <input
              type="email"
              className="w-full rounded-md bg-gray-800 text-white px-4 py-2 focus:outline-none focus:ring focus:ring-primary"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
