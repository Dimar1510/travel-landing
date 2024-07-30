const Header = () => {
  return (
    <header className="w-full z-10 textShadow text-lg p-2">
      <ul className="flex uppercase justify-evenly w-full font-semibold">
        <li>
          <a href="#about" className="hover:underline underline-offset-4">
            About
          </a>
        </li>
        <li>
          <a href="#blogs" className="hover:underline underline-offset-4">
            Blogs
          </a>
        </li>
        <li>
          <a href="#team" className="hover:underline underline-offset-4">
            Our team
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
