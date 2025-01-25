import React, { useRef, useEffect } from "react";

//Icons
import { IoIosMale } from "react-icons/io";
import { IoIosFemale } from "react-icons/io";
import { PiSneakerLight } from "react-icons/pi";
import { CiUser, CiHeart } from "react-icons/ci";
import { PiBagLight } from "react-icons/pi";
import { PiPackage } from "react-icons/pi";
import { PiUsers } from "react-icons/pi";
import { PiShoppingBag } from "react-icons/pi";
import { LiaPowerOffSolid } from "react-icons/lia";
import { LiaUserShieldSolid } from "react-icons/lia";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import signOut from "../../auth/signOut";

const MobileNavMenu = ({ reveal, setReveal }) => {
  const user = useSelector((state) => state.loggedInUser.user);
  const adminId = useSelector(state => state.loggedInUser.admin);
  const menuRef = useRef(null);

  const navs = [
    {
      icon: IoIosMale,
      label: "Men",
      path: "/shop/men",
    },
    {
      icon: IoIosFemale,
      label: "Women",
      path: "/shop/women",
    },
    {
      icon: PiSneakerLight,
      label: "SNKRS",
      path: "/shop/sneaker",
    },
    {
      icon: CiUser,
      label: "Account",
      path: "/login",
    },
    {
      icon: PiBagLight,
      label: "Bag",
      path: "/user/bag",
    },
    {
      icon: CiHeart,
      label: "Wishlist",
      path: "/user/wishlist",
    }
  ];
  const adminNavs = [
    {
      label: "products",
      path: "/admin/products",
      icon: PiPackage,
    },
    {
      label: "users",
      path: "/admin/users",
      icon: PiUsers,
    },
    {
      label: "orders",
      path: "/admin/orders",
      icon: PiShoppingBag,
    },
    {
        label: "Admin",
        path: "/admin",
        icon: LiaUserShieldSolid,
      },
  ];
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && event.target.id !=="mobile_menu_icon" && event.target.id !=="menu_icon_container") {
        setReveal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, setReveal]);

  return (
    <div
      ref={menuRef}
      className={`hamburger-menu absolute w-[95vw] p-5 ${
        reveal ? "h-[27vh] top-[-27vh] opacity-100" : "h-0 top-[10vh] opacity-0"
      } left-[50%] -translate-x-[50%] lg:hidden bg-[#fffffffb] rounded-[10px_10px_0px_0px] border-zinc-100 border-x-2 border-t-2 grid grid-cols-3 gap-5 overflow-hidden transition-all duration-300`}
    >
      {
        navs.map(({ icon: IconBase, label, path }) => (
            <NavLink
            onClick={()=> setReveal(prev => !prev)}
            key={label + "MobileNav"}
            to={path}
            className={`${user ? user.id === adminId ? "hidden" :  "flex" : "flex"} flex-col justify-center items-center text-zinc-800`}
            >
            <IconBase className="text-[1.5rem] mb-1" />
            <span className="text-[0.9rem]">{label}</span>
            </NavLink>
        ))
      }
      {
        user && user.id === adminId &&
        adminNavs.map(({ icon: IconBase, label, path }) => (
            <NavLink
            onClick={()=> setReveal(prev => !prev)}
            key={label + "MobileNav"}
            to={path}
            className="flex flex-col justify-center items-center text-zinc-800 capitalize"
            >
            <IconBase className="text-[1.5rem] mb-1" />
            <span className="text-[0.9rem]">{label}</span>
            </NavLink>
        ))
      }
      {
        user && user.id === adminId &&
        <div
            onClick={()=> {
              signOut();
              setReveal(prev => !prev);
            }}
            className="flex flex-col justify-center items-center text-zinc-800"
            >
            <LiaPowerOffSolid className="text-[1.5rem] mb-1" />
            <span className="text-[0.9rem]">Sign Out</span>
            </div>
      }
    </div>
  );
};

export default MobileNavMenu;
