import React, { useEffect, useState } from "react";
import Course from "../course/Course";

const Courses = ({ showDetailsOnCart }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {courses.map((course) => (
        <Course
          key={course.title}
          course={course}
          showDetailsOnCart={showDetailsOnCart}
        ></Course>
      ))}
    </div>
  );
};

export default Courses;
