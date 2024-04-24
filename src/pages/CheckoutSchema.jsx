import { Link } from "react-router-dom";

const CheckoutSchema = () => {
  return (
    <div className="flex flex-col mt-[20%] mb-[20%]">
        <p className="text-5xl text-center ">
        The Payment is Successful.
        Awaiting for your arrival.
        </p>
        <Link to='/home' className=" text-base mx-auto mt-[50px] text-white bg-primaryColor w-40 h-9 px-5 py-2  rounded-full text-center">Go back to home</Link>
    </div>
  );
};

export default CheckoutSchema;
