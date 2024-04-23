import { Link } from "react-router-dom";

const CheckoutSchema = () => {
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          The Payment is Successful .Have a nice day.
        </p>
      </div>

      <Link to='/home' className="btn">Go back to home</Link>
    </div>
  );
};

export default CheckoutSchema;
