import { NavLink } from "react-router-dom";

// ContactInformation Component
const ContactInformation = ({ title, branches, copyright }) => {
  return (
    <div className="w-full md:w-1/3 bg-officesBackground">
      <div className="flex flex-col gap-5 p-5">
        <div className="text-xl font-bold">{title}</div>
        {branches.map((branch, index) => (
          <div className="branch" key={index}>
            <div className="font-semibold">{branch.name}</div>
            <div className="text-sm text-footerText">{branch.address}</div>
            <div className="text-sm font-medium">{branch.contact}</div>
          </div>
        ))}
        <div className="text-sm text-copyright">{copyright}</div>
      </div>
    </div>
  );
};

// ImportantLinks Component
const ImportantLinks = ({ links }) => {
  return (
    <div className="w-full md:w-2/3 flex md:justify-center items-center">
      <div className="py-10 md:w-full md:w-3/4 flex flex-col md:flex-row md:justify-around ml-5 md:-ml-24 flex-wrap md:gap-5">
        {links.map((linkGroup, index) => (
          <ul className="flex flex-col gap-1" key={index}>
            {linkGroup.map((link, subIndex) => (
              <li key={subIndex}>
                <a
                  href={link.redirectionPath}
                  target={link.redirectionPath && "_blank"}
                  rel="noopener noreferrer"
                  className="text-dark hover:text-primary transition duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

// Main Footer Component
export const Footer = () => {
  const branches = [
    {
      name: "Head Office",
      address: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Atque sequi, labore aliquid nam minima neque corrupti, incidunt`,
      contact: "1234567890",
    },
    {
      name: "Bangalore Office",
      address: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Atque sequi, labore aliquid nam minima neque corrupti, incidunt`,
      contact: "1234567890",
    },
  ];

  const importantLinks = [
    [
      { label: "For Startups", redirectionPath: "" },
      { label: "For Enterprises", redirectionPath: "" },
      { label: "Apptware AI Lab", redirectionPath: "" },
      { label: "Contact", redirectionPath: "" },
      { label: "Blog", redirectionPath: "" },
    ],
    [
      { label: "Facebook", redirectionPath: "https://facebook.com" },
      { label: "LinkedIn", redirectionPath: "https://linkedin.com" },
      { label: "Twitter", redirectionPath: "https://twitter.com" },
      { label: "Instagram", redirectionPath: "https://instagram.com" },
      { label: "YouTube", redirectionPath: "https://youtube.com" },
    ],
    [
      { label: "MVP", redirectionPath: "" },
      { label: "Artificial Intelligence", redirectionPath: "" },
      { label: "Team Augmentation", redirectionPath: "" },
    ],
  ];

  return (
    <footer>
      <div className="flex flex-col md:flex-row bg-footerBackground">
        <ContactInformation
          title="APPTWARE"
          branches={branches}
          copyright="&copy; 2024 Apptware Solutions LLC"
        />
        <ImportantLinks links={importantLinks} />
      </div>
    </footer>
  );
};
