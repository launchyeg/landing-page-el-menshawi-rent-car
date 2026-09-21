import Layout from "./components/layout/Layout";
import LandingPage from "./pages/LandingPage";
import {
  brand,
  navbar,
  footer,
  contact,
  social,
  termsAndPrivacy,
} from "./content/content";

function App() {
  return (
    <Layout
      brand={brand}
      navbar={navbar}
      footer={footer}
      contact={contact}
      social={social}
      termsAndPrivacy={termsAndPrivacy}
    >
      <LandingPage />
    </Layout>
  );
}

export default App;
