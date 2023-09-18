import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Courses from "./components/courses/Courses";
import Cart from "./components/cart/Cart";

function App() {
  const [courseDetails, setCourseDetails] = useState([]);
  const [totalPriceOfCourse, setTotalPriceOfCourse] = useState(0);
  const [totalCreditOfCourse, setTotalCreditOfCourse] = useState(0);
  const [remainingCreditOfCourse, setRemainingCreditOfCourse] = useState(20);
  const showDetailsOnCart = (course) => {
    const isClickedAlready = courseDetails.find(
      (targetCourse) => targetCourse.title === course.title
    );
    let totalPrice = course.price;
    let totalCredit = course.credit;

    if (!isClickedAlready) {
      courseDetails.forEach((theCourse) => {
        totalPrice += theCourse.price;
        totalCredit += theCourse.credit;
      });
      if (totalCredit > 20) {
        toast("Credit limit exceeded!");
        return;
      }
      const remainingCredit = 20 - totalCredit;
      // console.log(totalPrice);
      setTotalPriceOfCourse(totalPrice);
      // console.log(totalCredit);
      setTotalCreditOfCourse(totalCredit);
      // console.log(remainingCredit);
      setRemainingCreditOfCourse(remainingCredit);
      setCourseDetails([...courseDetails, course]);
    } else {
      toast("This course already selected!");
      return;
    }
  };

  return (
    <>
      <h1 className="font-bold text-3xl">Course Registration</h1>
      <ToastContainer />
      <div className="mt-10 flex flex-col md:flex-row text-left">
        <div className="flex-1">
          <Courses showDetailsOnCart={showDetailsOnCart}></Courses>
        </div>

        <div className="ml-0 lg:ml-4 mt-4 lg:mt-0 w-72">
          <Cart
            courseDetails={courseDetails}
            totalCreditOfCourse={totalCreditOfCourse}
            remainingCreditOfCourse={remainingCreditOfCourse}
            totalPriceOfCourse={totalPriceOfCourse}
          ></Cart>
        </div>
      </div>
    </>
  );
}

export default App;
