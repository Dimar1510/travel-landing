const pageLinks: { title: string; links: string[] }[] = [
  {
    title: "Company",
    links: ["About", "Locations", "Partnership"],
  },
  {
    title: "Travels",
    links: ["Community", "Guidelines", "Choose with us"],
  },
  {
    title: "Help",
    links: ["Legal", "Billing", "Contact us"],
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="flex px-8 py-8 justify-evenly gap-16 flex-col lg:flex-row">
        <div className="flex gap-8 justify-center phone:flex-col">
          {pageLinks.map((list) => (
            <ul key={list.title} className="flex flex-col gap-4">
              <h4 className="uppercase font-semibold">{list.title}</h4>
              {list.links.map((link) => (
                <li
                  className="cursor-pointer text-xs hover:underline"
                  key={link}
                >
                  {link}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="uppercase font-semibold text-center">Contact us</h3>
          <p>Book your trip today!</p>
          <h3 className="text-2xl font-semibold">
            <i className="bx bx-phone"></i>
            (000) 555-12-34
          </h3>
          <div className="flex w-full justify-evenly text-2xl">
            <i className="bx bx-envelope cursor-pointer"></i>
            <i className="bx bx-chat cursor-pointer"></i>
            <i className="bx bxl-twitter cursor-pointer"></i>
          </div>
        </div>
      </div>
      <div className="flex p-4 bg-default-50 w-full justify-center">
        <a
          aria-label={"Github"}
          href={"https://github.com/Dimar1510/travel-landing"}
          className="text-text-clr inline-flex rounded-lg p-1 justify-center group"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center gap-2">
            <span className="text-center text-text-clr group-hover:scale-125  transition-transform duration-500 group-hover:rotate-[360deg] will-change-transform ">
              <i className="bx bxl-github"></i>
            </span>
            <span className="uppercase">Dmitry Martynov</span>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
