import React from "react";
// import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  // const socialLinks = [
  //   { icon: Github, href: "https://github.com", label: "GitHub" },
  //   { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  //   { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  //   { icon: Mail, href: "mailto:nagasivaklu@gmail.com", label: "Email" },
  // ];

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">

          {/* Text-only Footer Items */}
          <div className="flex space-x-6 text-sm">
            <span className="hover:text-white cursor-default">Privacy Policy</span>
            <span className="hover:text-white cursor-default">Terms of Service</span>
            <span className="hover:text-white cursor-default">Contact</span>
          </div>

          <p className="text-sm">
            © {new Date().getFullYear()} Nagasiva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
