import React, { useState } from "react";
import "./searchSection.scss";
import { IoLocationOutline } from "react-icons/io5";
import { BsCalendar2Date } from "react-icons/bs";
import { WiDaySunnyOvercast } from "react-icons/wi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineHotel } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { CgGym } from "react-icons/cg";
import { RiPsychotherapyLine } from "react-icons/ri";

const SearchSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    console.log(dates);
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    if (start && end) {
      setIsOpen(false);
    }
  };
  return (
    <div className="container">
          <div className="mt-4  rounded-lg border-2 border-primary search_section">
      <div className="categories flex items-center justify-center flex-wrap gap-1">
        <div className="item active">
          <MdOutlineHotel size={18} />
          <span>Hotel</span>
        </div>
        <div className="item">
          <FaPerson size={18} />
          <span>Persons</span>
        </div>
        <div className="item">
          <CgGym size={18} />
          <span>Exercises</span>
        </div>
        <div className="item">
          <RiPsychotherapyLine size={18} />
          <span>Treatment</span>
        </div>
      </div>
      <div className="input_item">
        <IoLocationOutline size={30} />
        <input type="text" placeholder="Write The Location ?" />
      </div>
      <div className="input_item">
        <WiDaySunnyOvercast size={30} />
        <input type="number" placeholder="Write The Number Of Days ?" />
      </div>
      <div className="input_item">
        <BsCalendar2Date onClick={() => setIsOpen(!isOpen)} size={30} />
        <span onClick={() => setIsOpen(!isOpen)} className="text-gray-400">
          Write The Date ?
        </span>
        {isOpen && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
            <DatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              selectsDisabledDaysInRange
              inline
            />
          </div>
        )}
      </div>
      <button className="btn_submit">Search</button>
    </div>
    </div>
  );
};

export default SearchSection;
