import DoctorCard from "./DoctorCard";

import { BASE_URL } from "../../../config";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loading.jsx";
import Error from "../../components/Error/Error.jsx";

const Doctors = () => {
  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors`);

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {!loading && !error && 
        <div className="doc grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {doctors?.map((doctor) =>
            <DoctorCard key={doctor.id} doctor={doctor} />
          )}
        </div>
      }
    </>
  );
};

export default Doctors;
