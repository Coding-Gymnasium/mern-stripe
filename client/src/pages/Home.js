import PriceCard from "../components/cards/PriceCard.js";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row col-md-6 offset-md-3 text-center">
        <h1 className="pt-5 fw-bold">Explore Plans</h1>
        <p className="lead pb-4">Find the right plan for your business</p>
      </div>
      <div className="row pt-5 mb-3 text-center">
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </div>
    </div>
  );
};

export default Home;
