import Header from "./Header";
import Footer from "./Footer";
import { ServicesItemType } from "./HomePage";
import ServiceCardItem from "./ServiceCardItem";
import Approach from "./Approach";

export type ConsultingListItemType = {
  id: number;
  header?: string;
  description?: string;
};

const ServicesPage = () => {
  const ServicesItemList: ServicesItemType[] = [
    {
      id: 1,
      header: "Quality Management System",
      description:
        "ISO 9001; ISO 17025; ISO 17020; TS 16949; ISO 13485; AS 9100; ISO 15189; ISO 17024",
    },
    {
      id: 2,
      header: "Environment and Occupational Health and Safety",
      description:
        "ISO 14001, ISO 45001, RC14001, IMS-Integrated management system",
    },
    {
      id: 3,
      header: "Laboratory And Hospitals And Testing Accreditation",
      description: "ISO 17025",
    },
    {
      id: 4,
      header: "Information Security Related",
      description: "ISO 27001, ISO 20000; CMMI",
    },
    {
      id: 5,
      header: "Asset Management",
      description: "ISO 55000  ",
    },
    {
      id: 6,
      header: "Food Safety Management System",
      description:
        "ISO 22000; HACCP; BRC food; Fami-QS; FSSC 22000; Organic & Global GAP; Halal; Kausher",
    },
    {
      id: 7,
      header: "Social Accountability And Energy Management",
      description: "SA 8000 , Sedex, ISO 50001",
    },
  ];

  const ConsultingList: ConsultingListItemType[] = [
    {
      id: 1,
      header: "Risk Management",
    },
    {
      id: 2,
      header: "Process Management",
    },
    {
      id: 3,
      header: "Flexibility in Process Management",
    },
    {
      id: 4,
      header: "Operation System Review",
    },
    {
      id: 5,

      description:
        "Collaboratively create an Integrated Management System Policy, objectives, procedures, and documentation to implement policies and objectives effectively",
    },
    {
      id: 6,
      header: "Integrated Management System Review",
    },
    {
      id: 7,
      header: "Inernal Audits",
    },
    {
      id: 8,
      header: "Management Review Meetings",
    },
    {
      id: 9,
      header: "Certification Audit Preparation",
    },
  ];

  return (
    <>
      <Header />
      <div className=" min-h-screen container  mt-16 mx-auto">
        <div className="flex justify-between">
          {/* content div */}
          <div className=" flex ml-30 mt-10 object-cover w-full pl-10 py-10 font-bold tracking-widest leading-snug text-5xl flex-col justify-center align-middle">
            {/* <img
              className="relative h-full w-full container "
              src={background}
              alt="background_image"
            /> */}
            <div className="">
              <div>
                <h1 className="text-gacRed flex flex-row">Our Services.</h1>
              </div>
              <div className="flex flex-col justify-between w-611">
                <h1 className="text-black mt-5 font-medium tracking-normal leading-normal text-lg">
                  At GAC, we're dedicated to delivering top-notch services that
                  exceed your expectations. With years of experience and a
                  commitment to excellence, we've become a trusted partner for
                  individuals and businesses alike. Whether you're looking for
                  Quality Management, Asset Management, Information Security,
                  we've got you covered.
                </h1>
                <button className=" w-44 mt-10 p-4  bg-red-500 text-white text-base font-medium">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          {/* img div */}
          {/* <div className="w-611 h-611"><img src={home} alt="" /></div> */}
        </div>
        <div className="mt-5 w-full p-5 items-center mb-10 flex flex-col">
          <div className="flex flex-wrap m-5  justify-center overflow-x-auto flex-row">
            {ServicesItemList.map((item) => {
              return (
                <ServiceCardItem
                  key={item.id}
                  header={item.header}
                  description={item.description}
                />
              );
            })}
          </div>
        </div>
        <div className="mt-5 w-full p-5 items-center mb-10 flex flex-col">
          <div className="flex flex-col justify-center items-center">
            <span className="text-gacRed">Structure</span>
            <h1 className="text-gacBlue text-2xl mt-2 mb-5 font-semibold">
              Our Consulting Structure
            </h1>
          </div>
          <div className="flex flex-wrap m-5  justify-center overflow-x-auto flex-row">
            {ConsultingList.map((item) => {
              return (
                <ServiceCardItem
                  key={item.id}
                  header={item.header}
                  description={item.description}
                />
              );
            })}
          </div>
        </div>
        <div className="mt-5 w-full p-5 items-center mb-10 flex flex-col">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-gacBlue text-2xl mt-2 mb-5 font-semibold">
              Approach
            </h1>
          </div>
          <Approach />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServicesPage;
