// src/components/Sidebar.js
import React, { useState } from "react";
import {
  FaHome,
  FaBook,
  FaUser,
  FaAngleRight,
  FaProductHunt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  const [productListShow, setProductListShow] = useState(false);

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* <img src={require("")} alt="LOGO" /> */}
        <ul className="navigation_flex">
          <li className="navigation_item">
            <NavLink to={"/"}>
              <FaHome /> Dashboard
            </NavLink>
          </li>
          <li className="navigation_item">
            <NavLink to={"/blogs"}>
              <FaBook /> Bloglar
            </NavLink>
          </li>
          <li className="navigation_item">
            <NavLink to={"/news"}>
              <FaUser /> Haberler
            </NavLink>
          </li>
          <li
            className={`navigation_item navigation_collapse${
              productListShow ? " open" : ""
            }`}
          >
            <div onClick={() => setProductListShow(!productListShow)}>
              <div>
                <FaProductHunt /> Ürünler
              </div>
              <div>
                <FaAngleRight />
              </div>
            </div>
            <ul
              className={`${
                productListShow ? "open " : ""
              }navigation_collapse_list`}
            >
              <li>
                <NavLink to={"/panel/sayfa1"}>
                  <FaAngleRight /> Panel Sayfa 1
                </NavLink>
              </li>

              <li>
                <NavLink to={"/panel/sayfa2"}>
                  <FaAngleRight /> Panel Sayfa 2
                </NavLink>
              </li>

              <li>
                <NavLink to={"/panel/sayfa3"}>
                  <FaAngleRight /> Panel Sayfa 3
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
