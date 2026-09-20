import Navbar from "./Navbar";
import Footer from "./Footer";

// The page chrome shared by every page: the navbar and footer frame whatever
// page content is passed in as children.
export default function Layout({ brand, navbar, footer, children }) {
  return (
    <>
      <Navbar brand={brand} {...navbar} />
      <main>{children}</main>
      <Footer brand={brand} {...footer} />
    </>
  );
}
