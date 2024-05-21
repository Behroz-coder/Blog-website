import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

/**
 * Footer component for displaying company information, support links, and legal information.
 *
 * @returns {JSX.Element} - Rendered component.
 */
function Footer() {
  return (
    <footer className="py-10 bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col justify-between">
            <div className="mb-4">
              <Logo className="w-20 h-20" />
            </div>
            <p className="text-sm text-gray-400">
              &copy; 2024. All Rights Reserved by Behroz.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase text-gray-400 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-base hover:text-gray-400">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/" className="text-base hover:text-gray-400">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="text-base hover:text-gray-400">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link to="/" className="text-base hover:text-gray-400">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase text-gray-400 mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-base hover:text-gray-400">
                  Account
                </Link>
              </li>
              <li>
                <Link to="/" className="text-base hover:text-gray-400">
                  Help
                </Link>
              </li>
              <li>
                <Link to="/" className="text-base hover:text-gray-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-base hover:text-gray-400">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase text-gray-400 mb-4">
              Legals
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-base hover:text-gray-400">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link to="/" className="text-base hover:text-gray-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-base hover:text-gray-400">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
