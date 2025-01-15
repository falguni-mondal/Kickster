import React, { useState } from "react";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import { NavLink } from "react-router-dom";
import MobileLeftNav from "./mobile/MobileLeftNav";
import MobileNavRight from "./mobile/MobileNavRight";
import MobileNavMenu from "./mobile/MobileNavMenu";
import { useDispatch, useSelector } from "react-redux";
import { setFilterData } from "../../store/features/filterSlice";

const Header = () => {
  const filterData = useSelector(state => state.filters.filterData);
  const dispatch = useDispatch();
  const [ reveal, setReveal ] = useState(false);
  const filterAdder = (key, value) => {
    filterData &&
    key === "gender" ?
    dispatch(setFilterData({...filterData, [key]: [...filterData[key], value]}))
    :
    dispatch(setFilterData({...filterData, sneaker: true}));
  }

  return (
    <section className="bg-[#fffffffb] lg:bg-[#ffffffb6] backdrop-blur-md navbar-section w-full fixed bottom-0 lg:sticky lg:flex justify-center z-[99] lg:top-0 left-0 shadow-lg  shadow-black lg:shadow-none">
      <div className="navigation-container h-[55px] relative w-full flex justify-between items-center px-5 lg:px-10 py-2">
        <LeftNav filterAdder={filterAdder} />
        <MobileLeftNav />
        <div className="logo uppercase text-[1.2rem] font-medium lg:text-[1.5rem] text-zinc-800">
          <NavLink to="/">Kickster</NavLink>
        </div>
        <RightNav />
        <MobileNavRight setReveal={setReveal} />
        <MobileNavMenu reveal={reveal} setReveal={setReveal} filterAdder={filterAdder} />
      </div>
    </section>
  );
};

export default Header;
