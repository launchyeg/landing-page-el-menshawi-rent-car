import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactFab from "./ContactFab";

// The page chrome shared by every page: the navbar and footer frame whatever
// page content is passed in as children.
export default function Layout({
  brand,
  navbar,
  footer,
  contact,
  social,
  termsAndPrivacy,
  children,
}) {
  return (
    <>
      <Navbar brand={brand} {...navbar} />
      <main>{children}</main>
      <Footer
        brand={brand}
        contact={contact}
        social={social}
        termsAndPrivacy={termsAndPrivacy}
        {...footer}
      />
      <ContactFab contact={contact} social={social} />
    </>
  );
}
