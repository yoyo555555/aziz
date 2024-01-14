"use client";
import React, { useState } from "react";
import Logo from "../Logo";
import { usePathname, useRouter } from "next/navigation";
import { IoMdPerson, IoMdMenu } from "react-icons/io";
import useMobileNavbar from "../hooks/useMobileNavbar";
import useTheme from "../hooks/useTheme";
import ThemeToggle from "../ThemeToggle";
import useCompany from "../hooks/useCompany";

import { MdDashboard } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";

import "./Navbar.css";

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
  const [walletHover, setWalletHover] = useState(false);
  const [accountHover, setAccountHover] = useState(false);

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
    <>
      <nav
        id="navbar"
        className={`shadow-lg flex justify-between 
    items-center px-4 sm:px-10 fixed 
    w-full py-3 z-30
     top-0 transition-colors duration-500
    ${mode === "light" ? "bg-white" : "bg-[#121212]"}`}
      >
        <div id="logo">
          <Logo />
        </div>

        <div className="sm:flex items-center gap-10 hidden" id="itemNav">
          <div
            onMouseEnter={() => setHomeHover(true)}
            onMouseLeave={() => setHomeHover(false)}
            onClick={() => router.push("/home")}
            className={`flex cursor-pointer 
        text-lg items-center gap-1 font-semibold`}
          >
            <MdDashboard />
            Dashboard
          </div>

          <div
            onClick={() => router.push("/home/invest-and-earn")}
            className={`flex cursor-pointer 
        text-lg items-center gap-1 font-semibold`}
          >
            <GiReceiveMoney />
            Pool
          </div>

          <div
            onMouseEnter={() => setHomeHover(true)}
            onMouseLeave={() => setHomeHover(false)}
            onClick={() => router.push("/home/referrals")}
            className={`flex cursor-pointer 
        text-lg items-center gap-1 font-semibold`}
          >
            <BsPeopleFill />
            Referrals
          </div>

          <div
            onClick={() => router.push("/card")}
            className={`flex cursor-pointer 
        text-lg items-center gap-1 font-semibold`}
          >
            <MdContactPhone />
            Contact
          </div>
        </div>

        <div className="flex items-center" id="account">
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
            <span className="hidden sm:block">Account</span>
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
    </>
  );
};

export default Navbar;
