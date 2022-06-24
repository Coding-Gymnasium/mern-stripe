const PriceCard = ({ price, handleSubscription }) => {
  const dynamicDescription = () => {
    if (price.nickname === "Basic") {
      return "5 exclusive stocks";
    } else if (price.nickname === "Standard") {
      return "10 exclusive stocks";
    } else if (price.nickname === "Premium") {
      return "20 exclusive stocks";
    }
  };

  const buttonStyle = () => {
    return price.nickname === "Basic" ? "btn-outline-danger" : "btn-danger";
  };

  const headerStyle = () => {
    if (price.nickname === "Premium") return "bg-danger text-light";
  };

  const borderStyle = () => {
    if (price.nickname === "Premium") return "border-danger";
  }

  return (
    <div className="col">
      <div className={ `card mb-4 rounded-3 shadow-sm ${borderStyle()}` }>
        <div className={`card-header py-3 ${headerStyle()}`}>
          <h4 className="my-0 fw-normal">{price.nickname}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            {(price.unit_amount / 100).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}{" "}
            <small className="text-muted fw-light">/month</small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li className="fw-bold">{dynamicDescription()}</li>
            <li>Free market analysis</li>
            <li>Email support</li>
            <li>Help center access</li>
          </ul>

          {/*Preview Data*/}
          {/*<pre>{JSON.stringify(price, null, 4)}</pre>*/}

          <button
            onClick={() => handleSubscription(price)}
            className={`w-100 btn btn-lg ${buttonStyle()} `}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
