import "../styles/LandingPage.css"
import NavigationBar from "../components/NavigationBar";
import News from '../components/News';
import Product from '../components/Product';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="myBG">
      <NavigationBar/>
      <News />
      <Product />
      <Footer />
    </div>
  );
}

export default Home;
