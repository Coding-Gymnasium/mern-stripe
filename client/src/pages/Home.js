import { UserContext } from "../context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import PriceCard from "../components/cards/PriceCard.js";

const Home = () => {
  const [state, _setState] = useContext(UserContext);
  const [prices, setPrices] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data } = await axios.get("/prices");
    setPrices(data);
  };

  const handleClick = async (e, price) => {
    e.preventDefault();
    if (state && state.token) {
      const { data } = await axios.post("/create-subscription", {
        priceId: price.id,
      });
      window.open(data);
    } else {
      navigate("/register");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row col-md-6 offset-md-3 text-center">
        <h1 className="pt-5 fw-bold">Explore Plans</h1>
        <p className="lead pb-4">Find the right plan for your business</p>
      </div>
      <div className="row pt-5 mb-3 text-center">
        {prices &&
          prices.map((price) => (
            <PriceCard
              key={price.id}
              price={price}
              handleSubscription={handleClick}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
