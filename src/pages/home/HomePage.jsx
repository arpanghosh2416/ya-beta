import {
  Hero,
  Service,
  Work,
  Course,
  About,
  Testimonial,
} from "../../components";
import Acheivement from "../../components/Acheivement/Acheivement";
import Product from "../../components/product/Product";

const HomePage = (props) => {
  return (
    <main>
      <div className="bg-black">
        <Hero /> 
      </div>

      <div className="bg-white">
        <Service />
      </div>

      {/* why choose us*/}
      <div className="bg-black">
        <Work />
      </div>

      {/* Works */}
      <div className="bg-white">
        <Product />
      </div>

      {/* ed component */}
      <div className="bg-black">
        <Course />
      </div>

      {/* ed acheivement - need to be done */}
      <div className="bg-white">
      <Acheivement />
      </div>

      {/* teams */}
      <div className="bg-black">
        <About /> 
      </div>

      <div className="bg-white">
        <Testimonial />
      </div>
    </main>
  );
};

export default HomePage;
