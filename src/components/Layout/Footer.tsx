import { Link } from "react-router-dom";
import { Flower, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand + Social Media */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Flower className="h-6 w-6 text-primary" />
              <span className="font-heading text-xl font-semibold">
                 FloraBloom
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Where flowers speak the language of love. Handcrafted
              arrangements for every special moment.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Explore Flowers
                </Link>
              </li>
              <li>
                <Link
                  to="/#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Create Bouquet
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-medium">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>123 Bloom Street</p>
              <p>Garden City, GC 12345</p>
              <p>Phone: (555) 123-FLOWER</p>
              <p>Email: hello@bloomandbliss.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Bloom & Bliss. All rights reserved. Made with 💝 for flower
            lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
