import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Nav from "../component/Nav";
import Course from "../component/Course";
import Footer from "../component/Footer";

function Profile() {
  const params = useParams();
  const id = params.id;

  return (
    <div className="min-h-screen flex flex-col justify-between bg-base-200">
      {/*Nav  */}
      <Nav id={id} />
      {localStorage.getItem("email") === null ? null : (
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-4 px-12 py-4 items-center max-sm:flex-col max-sm:text-center">
            <img
              className="rounded-full w-40"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQlplOFgkOWu4sMtbphZKPvkA9_aVFCxoSg&s"
            />
            <div className="flex flex-col justify-between gap-2">
              <h1 className=" font-extrabold text-3xl">
                King Faisal Univercity
              </h1>
              <p className=" font-semibold text-xl">
                SA, Eastern Province, Al Ahssa
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow  bg-base-300 my-auto">
            <input type="checkbox" defaultChecked />
            <div className="collapse-title text-3xl font-medium">
              Courses for you
            </div>
            <div className="collapse-content">
              <Course
                src="https://m.media-amazon.com/images/I/91DqXd9okHL._SY466_.jpg"
                course="B.S in Data Analysis"
                major="Data Science - Computer Science"
                duration="1440 Hours - 36 Months"
              />

              <Course
                src="https://m.media-amazon.com/images/I/41OonY0kRWL._SX342_SY445_.jpg"
                course="B.S in Data Science"
                major="Data Science - Computer Science"
                duration="460 Hours - 8 Months"
              />

              <Course
                src="https://m.media-amazon.com/images/I/51rB0y1ywoL._SX342_SY445_.jpg"
                course="B.S in Data Science"
                major="Data Science - Data Analysis"
                duration="2000 Hours - 40 Months"
              />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Profile;
