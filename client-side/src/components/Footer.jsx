import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-gray-300 py-8 mt-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          
          {/* About */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Book Haven</h2>
            <p className="text-sm">
              Discover and manage your favorite books easily. A MERN stack project
              for book lovers with sorting, filtering, and pagination features.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/books" className="hover:text-white">Books</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Follow Us</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook className="text-2xl hover:text-white" />
              </a>
              <a href="https://github.com/Romicha935" target="_blank" rel="noreferrer">
                <FaGithub className="text-2xl hover:text-white" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-2xl hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          <p>© {new Date().getFullYear()} Book Haven | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
