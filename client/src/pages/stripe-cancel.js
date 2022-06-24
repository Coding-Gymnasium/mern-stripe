import { WarningTwoTone } from "@ant-design/icons";

const StripeCancel = () => {
  return (
    <div
      className="d-flex justify-content-center fw-bold"
      style={{ height: "90vh" }}
    >
      <div className="d-flex flex-column justify-content-center">
        <WarningTwoTone style={{ fontSize: "50px" }} />
        <h1>Operation Canceled</h1>
      </div>
    </div>
  );
};

export default StripeCancel;
