import React from "react";

const Cart = ({
  courseDetails,
  totalCreditOfCourse,
  remainingCreditOfCourse,
  totalPriceOfCourse,
}) => {
  // console.log("Hello");
  // console.log(courseDetails);
  // console.log(totalCreditOfCourse);
  // console.log(remainingCreditOfCourse);
  // console.log(totalPriceOfCourse);

  return (
    <div>
      <div className="p-3 rounded-xl drop-shadow-lg bg-[#FFF] text-left">
        <p className="text-[#2F80ED] font-bold mb-2">
          Credit Hour Remaining <span> {remainingCreditOfCourse} </span> hr
        </p>
        <hr className="border-[#1C1B1B33]" />
        <div className="mt-2 mb-3">
          <p className="font-bold mb-3">Course Name</p>
          {courseDetails.map((detailCourse) => {
            return (
              <li
                className="list-decimal text-xs font-normal mt-1 mb-1"
                key={detailCourse.title}
              >
                {detailCourse.title}
              </li>
            );
          })}
        </div>
        <hr className="border border-[#1C1B1B33] mt-3 mb-3" />
        <span className="mt-6 mb-6 font-semibold text-sm">
          {" "}
          Total Credit Hour : {totalCreditOfCourse}{" "}
        </span>
        <hr className="border border-[#1C1B1B33] mt-3 mb-3" />
        <span className="mt-6 mb-6 font-semibold text-sm">
          {" "}
          Total Price : {totalPriceOfCourse} USD{" "}
        </span>
      </div>
    </div>
  );
};

export default Cart;
