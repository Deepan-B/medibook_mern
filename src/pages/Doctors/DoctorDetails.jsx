import starIcon from "../../assets/images/Star.png";
import { useEffect, useState } from "react";
import DoctorsAbout from "./DoctorsAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
import { BASE_URL } from "../../../config";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loading.jsx";
import Error from "../../components/Error/Error.jsx";
import { useParams } from "react-router-dom";
const DoctorDetails = () => {
  const [tab, setTab] = useState("about");
  const [width, setWidth] = useState(window.innerWidth);
  const { id } = useParams();

  const {
    data: doctor,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors/${id}`);

  

  if (doctor) {
    const {
      name,
      qualifications,
      experiences,
      timeSlots,
      reviews,
      bio,
      about,
      averageRating,
      totalRating,
      specialization,
      ticketPrice,
      photo,
    } = doctor;
  }

  // console.log(doctor);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && <Loader />}
        {error && <Error />}

        {!loading && !error && doctor && (
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5">
                <figure className="max-w-[200px] max-h-[200px]">
                  <img src={doctor.photo} alt="" className="w-full" />
                </figure>

                <div>
                  <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                    {doctor.specialization}
                  </span>
                  <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                    {doctor.name}
                  </h3>
                  <div className="flex items-center gap-[6px]">
                    <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                      <img src={starIcon} alt="" />
                      {doctor.averageRating}
                    </span>
                    <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-normal text-headingColor">
                      ({doctor.totalRating})
                    </span>
                  </div>

                  <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                    {doctor.bio}
                  </p>
                </div>
              </div>

              <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                <button
                  onClick={() => setTab("about")}
                  className={`${
                    tab === "about" &&
                    "border-b border-solid border-primaryColor"
                  }   py-2 px-5 mr-5 text-[16px] leading-7 text-textColor font-semibold`}
                >
                  About
                </button>
                <button
                  onClick={() => setTab("Features")}
                  className={` ${
                    tab === "Features" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-textColor font-semibold`}
                >
                  Feedback
                </button>
              </div>

              <div className="mt-[50px]">
                {tab === "about" && (
                  <DoctorsAbout
                    name={doctor.name}
                    about={doctor.about}
                    qualifications={doctor.qualifications}
                    experiences={doctor.experiences}
                  />
                )}
                {tab === "Features" && (
                  <Feedback
                    reviews={doctor.reviews}
                    totalRating={doctor.totalRating}
                  />
                )}
              </div>
            </div>

            {width > 760 ? (
              <div>
                <SidePanel
                  doctorId={doctor._id}
                  ticketPrice={doctor.ticketPrice}
                  timeSlots={doctor.timeSlots}
                />
              </div>
            ) : (
              tab != "Features" && (
                <div>
                  <SidePanel
                    doctorId={doctor._id}
                    ticketPrice={doctor.ticketPrice}
                    timeSlots={doctor.timeSlots}
                  />
                </div>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorDetails;
