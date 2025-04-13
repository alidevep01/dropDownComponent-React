import React, { useState, useEffect, useRef } from "react";
import "./DropDown.css";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

function DropDown({ data }) {
  const [toggle, setToggle] = useState(false);
  const [selectItem, setSelectItem] = useState("");
  const dropDownRef = useRef(null);

  useEffect(() => {
    const handle = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("click", handle);

    return () => {
      document.removeEventListener("click", handle);
    };
  }, []);

  return (
    <div className="dropdown-content" ref={dropDownRef}>
      <button className="header-btn" onClick={() => setToggle((prev) => !prev)}>
        {selectItem ? selectItem : "select item"}
        <span>
          {toggle ? (
            <RiArrowDropDownLine size={20} />
          ) : (
            <RiArrowDropUpLine size={20} />
          )}
        </span>
      </button>
      <div className="dropdown-item">
        {data.map((item, index) => {
          return (
            <button
              key={index}
              className={`item-btn ${toggle ? "visible" : ""}`}
              onClick={() => {
                setSelectItem(item.label);
                setToggle((prev) => !prev);
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default DropDown;
