"use client";
import React, { useState } from "react";
import Logo from "../Logo";
import { usePathname, useRouter } from "next/navigation";
import { FaHome, FaCreditCard, FaPaperPlane } from "react-icons/fa";
import { IoMdPerson, IoMdMenu } from "react-icons/io";
import useMobileNavbar from "../hooks/useMobileNavbar";
import useTheme from "../hooks/useTheme";
import ThemeToggle from "../ThemeToggle";
import useCompany from "../hooks/useCompany";
<<<<<<< HEAD
=======
import { FaInfo } from "react-icons/fa";

>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const { onOpen } = useMobileNavbar();
  const { mode } = useTheme();

  const { company } = useCompany();
  const primaryColor = company?.color.primary;
  const primaryLightColor = company?.color.primaryLight;
  const primaryVeryLightColor = company?.color.primaryVeryLight;

  const [homeHover, setHomeHover] = useState(false);
  const [moneyHover, setMoneyHover] = useState(false);
  const [cardHover, setCardHover] = useState(false);
  const [accountHover, setAccountHover] = useState(false);
<<<<<<< HEAD
=======
  const [aboutHover, setAboutHover] = useState(false);
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7

  const getColor = (condition: boolean, hoverState: boolean) => {
    if (condition) {
      if (mode === "light") {
        return primaryColor;
      } else {
        return primaryLightColor;
      }
    } else {
      if (hoverState) {
        return primaryLightColor;
      } else {
        if (mode === "light") {
          return "#334155";
        } else {
          return "white";
        }
      }
    }
  };

  return (
    <nav
      className={`shadow-lg flex justify-between 
    items-center px-4 sm:px-10 fixed 
    w-full py-3 z-30
     top-0 transition-colors duration-500
    ${mode === "light" ? "bg-white" : "bg-[#121212]"}`}
    >
      <Logo />

      <div className="sm:flex items-center gap-10 hidden">
        <div
          onMouseEnter={() => setHomeHover(true)}
          onMouseLeave={() => setHomeHover(false)}
          style={{
            color: getColor(pathName.startsWith("/home"), homeHover),
          }}
          onClick={() => router.push("/home")}
          className={`flex cursor-pointer 
        text-lg items-center gap-1 font-semibold`}
        >
<<<<<<< HEAD
          Acceuil
          {/* <FaHome /> */}
=======
          Home
          <FaHome />
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
        </div>

        <div
          onMouseEnter={() => setMoneyHover(true)}
          onMouseLeave={() => setMoneyHover(false)}
          style={{
            color: getColor(pathName.startsWith("/send-money"), moneyHover),
          }}
          onClick={() => router.push("/send-money")}
          className={`flex cursor-pointer 
        text-lg items-center gap-1 font-semibold

        `}
        >
<<<<<<< HEAD
          Envoyer de l&argent {/* <FaPaperPlane /> */}
=======
          Send Money
          <FaPaperPlane />
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
        </div>

        <div
          onMouseEnter={() => setCardHover(true)}
          onMouseLeave={() => setCardHover(false)}
          style={{
            color: getColor(pathName.startsWith("/card"), cardHover),
          }}
          onClick={() => router.push("/card")}
          className={`flex cursor-pointer 
        text-lg items-center gap-1 font-semibold`}
        >
<<<<<<< HEAD
          Contact
          {/* <FaCreditCard /> */}
        </div>
        {/* <div className="sm:flex items-center gap-10 hidden"> */}
          {/* <div
            onMouseEnter={() => setHomeHover(true)}
            onMouseLeave={() => setHomeHover(false)}
            style={{
              color: getColor(pathName.startsWith("/about"), homeHover),
            }}
            onClick={() => router.push("/about")}
            className={`flex cursor-pointer 
        text-lg items-center gap-1 font-semibold`}
          >
            A propos
            {/* <FaHome /> */}
          {/* </div>{" "} */}
        {/* </div> */} 
=======
          Cards
          <FaCreditCard />
        </div>


        <div
          onMouseEnter={() => setAboutHover(true)}
          onMouseLeave={() => setAboutHover(false)}
          style={{
            color: getColor(pathName.startsWith("/about"), aboutHover),
          }}
          onClick={() => router.push("/about")}
          className={`flex cursor-pointer 
        text-lg items-center gap-1 font-semibold`}
        >
          About
          <FaInfo /> 
        </div>


>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle />

        <div
          onMouseEnter={() => setAccountHover(true)}
          onMouseLeave={() => setAccountHover(false)}
          style={{
            color: getColor(pathName.startsWith("/account"), accountHover),
          }}
          onClick={() => router.push("/account")}
          className={`flex cursor-pointer
        text-lg items-center gap-1 font-semibold`}
        >
<<<<<<< HEAD
          <span className="hidden sm:block">Compte</span>
=======
          <span className="hidden sm:block">Account</span>
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
          <IoMdPerson size={22} />
        </div>

        <IoMdMenu
          onClick={onOpen}
          size={24}
          className={`sm:hidden cursor-pointer
          ${mode === "light" ? "text-slate-700" : "text-white"}`}
        />
      </div>
    </nav>
  );
};

export default Navbar;
