import Layout from "./components/layout/Layout";
import LandingPage from "./pages/LandingPage";
import { brand, navbar, footer } from "./content/content";

function App() {
  return (
    <Layout brand={brand} navbar={navbar} footer={footer}>
      <LandingPage />
    </Layout>
  );
}

export default App;
