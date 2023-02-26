import React, { useState } from "react";
import CustomFilter from "./CustomFilter";
import PeopleCard from "./homePage/PeopleCard";

const Home = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [renderfirst, setrenderfirst] = useState(false);
  const handleFilter = (data) => {
    setFilteredData(data);
    setrenderfirst(true);
  };

  const data = [
    {
      id: 1,
      userImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3IBQWoTRb0sbfh7uoh-GPOixkEv7uyWklcvFmIjG-2A&s",
      name: "John Doe",
      location: "New York, USA",
      active: true,
      age: 28,
      jobTitle: "Front-end Developer",
      gender: "Male"
    },
    {
      id: 2,
      userImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpTGr12l0gML_2NWbvSErhWZzgmqmw2XVE4ECXb07vuQ&s",
      name: "Jane Doe",
      location: "London, UK",
      active: false,
      age: 32,
      jobTitle: "UI/UX Designer",
      gender: "Female"
    },
    {
      id: 3,
      userImage:
        "https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=",
      name: "Bob Smith",
      location: "Toronto, Canada",
      active: true,
      age: 25,
      jobTitle: "Software Engineer",
      gender: "Male"
    },
    {
      id: 4,
      userImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtuBiYlR3l_J6ReURfKv3Idjr-hGYhQd8TEerBL7m_rQ&s",
      name: "Sarah Johnson",
      location: "Los Angeles, USA",
      active: true,
      age: 29,
      jobTitle: "Full-stack Developer",
      gender: "Female"
    },
    {
      id: 5,
      userImage:
        "https://media.istockphoto.com/id/1167535115/photo/young-handsome-man-wearing-casual-white-t-shirt-over-isolated-background-with-serious.jpg?s=612x612&w=0&k=20&c=ebJPvOg2HmzbzUPGyDxbQ_GnuhDDmwj95Emo2y0RFm4=",
      name: "Michael Lee",
      location: "Sydney, Australia",
      active: false,
      age: 35,
      jobTitle: "Software Architect",
      gender: "Male"
    },
    {
      id: 6,
      userImage:
        "https://media.istockphoto.com/id/1277996375/photo/happy-young-woman-studio-portrait.jpg?b=1&s=612x612&w=0&k=20&c=MVfgDOCMHqOpzMZ52trrDPBoT6FdRcDSDetUKAzulQc=",
      name: "Jennifer Kim",
      location: "Seoul, South Korea",
      active: true,
      age: 27,
      jobTitle: "Mobile App Developer",
      gender: "Female"
    },
    {
      id: 7,
      userImage:
        "https://media.istockphoto.com/id/957333242/photo/portrait-of-thoughtful-handsome-man-with-black-glasses-in-casual-style-thinking.jpg?s=612x612&w=0&k=20&c=EsTcqu9_pbvW59-DLhYZrhtTzxRy_6jqGfPERmesOx8=",
      name: "Alex Rodriguez",
      location: "Mexico City, Mexico",
      active: false,
      age: 31,
      jobTitle: "Backend Developer",
      gender: "Male"
    },
    {
      id: 8,
      userImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwSQ-KANUHNdQO1tVImfEF9e6cerQnJzqd5cTzNBDq34-TZAL3HEPPShvGAd4ShjP_UPY&usqp=CAU",
      name: "Emily Wilson",
      location: "Paris, France",
      active: true,
      age: 26,
      jobTitle: "Web Designer",
      gender: "Female"
    },
    {
      id: 9,
      userImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgELXIpKBXbfFoMmiKBB1R1PzRcD_ZLpal75t-dVoCuUjUqBEiUebeyVv0rXcFWB-5z24&usqp=CAU",
      name: "David Brown",
      location: "Berlin, Germany",
      active: false,
      age: 30,
      jobTitle: "Software Developer",
      gender: "Male"
    },
    {
      id: 10,
      userImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmVMDrqCSA3XC557ksu1-tkDZ6SjueRvWznMnN1fkj213PMKrhyFPasqx__CHgnpFeCOM&usqp=CAU",
      name: "Jessica Martinez",
      location: "Barcelona, Spain",
      active: true,
      age: 28,
      jobTitle: "Front-end Developer",
      gender: "Female"
    }
  ];

  return (
    <>
      <div>
        <CustomFilter data={data} onFilter={handleFilter} />
        {renderfirst ? (
          <>
            <div className="container" id="container">
              {filteredData &&
                filteredData.map((filteredData) => (
                  <PeopleCard key={filteredData._id} profiles={filteredData} />
                ))}
            </div>
          </>
        ) : (
          <>
            <div className="container" id="container">
              {data &&
                data.map((data) => (
                  <PeopleCard key={data._id} profiles={data} />
                ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
