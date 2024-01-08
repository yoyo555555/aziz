"use client";
import React from "react";
import Logo from "../Logo";
import Button from "../Button";
import Image from "next/image";
import Link from "next/link";
import useCompany from "../hooks/useCompany";

<<<<<<< HEAD
=======

>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
const Header = () => {
  const { company } = useCompany();

  return (
    <header className="max-w-full w-full h-fit min-h-screen bg-hero-bg-gradient bg-cover flex flex-col gap-5">
      <nav className="flex justify-between px-5 sm:px-10 md:px-20 py-8 items-center">
        <Logo home />

<<<<<<< HEAD
        <div className="flex items-center gap-3 w-full max-w-[120px] sm:max-w-[250px] bg-hero-bg-gradient">
          <Link className="w-full hidden sm:block" href={"/register"}>
            <Button small onClick={() => {}} label={"S'inscrire"} />
          </Link>

          <Link className="w-full" href={"/login"}>
            <Button outline small onClick={() => {}} label={"Se connecter"} />
=======
        <div className="flex items-center gap-3 w-full max-w-[120px] sm:max-w-[250px]">
          <Link className="w-full hidden sm:block" href={"/register"}>
            <Button small onClick={() => {}} label={"Sign Up"} />
          </Link>

          <Link className="w-full" href={"/login"}>
            <Button outline small onClick={() => {}} label={"Sign In"} />
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
          </Link>
        </div>
      </nav>

      <section
        className="px-5 sm:px-10 md:px-20 w-full text-white h-full 
      flex justify-between items-center 
      gap-20 flex-col lg:flex-row pb-20"
      >
        <div className="flex flex-col gap-5 w-full">
          <h1
            className="font-bold text-3xl leading-[2.5rem] 
          sm:text-4xl sm:leading-[3rem] md:text-5xl md:leading-[4rem]"
          >
<<<<<<< HEAD
            Effectuez des transferts mondiaux, investissez, empruntez et faites fructifier votre argent avec{" "}
=======
            Make Global tranfer, Invest, Borrow and grow your money with{" "}
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
            {company?.name}
          </h1>

          <h1 className="text-gray-200">
<<<<<<< HEAD
          Nous sommes là pour vous aider à organiser une collecte de richesse sécurisée et pratique.
=======
            We&apos;re here to assist you in making secure and convinient wealth
            gathering.
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
          </h1>

          <div className="w-full max-w-[400px]">
            <Link href={"/register"}>
<<<<<<< HEAD
              <Button onClick={() => {}} label={"Commencer"} />
=======
              <Button onClick={() => {}} label={"Get Started"} />
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
            </Link>
          </div>
        </div>

<<<<<<< HEAD
        {/* <div className="flex gap-5 w-full justify-center">
          <div className="max-w-[250px] max-h-[500px] w-full">
            <Image
              priority
              src={"/spend.png"}
              alt={"desktop"}
              layout="responsive"
              width={150}
              height={200}
            />
=======
        <div className="flex gap-5 w-full justify-center">
          <div className="max-w-[250px] max-h-[500px] w-full">
             <img
            
              src={"/spend1.png"}
             
            /> 
      
          
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
          </div>

          <div className="max-w-[250px] max-h-[500px] w-full translate-y-10">
            <Image
              priority
<<<<<<< HEAD
              src={"/invest.png"}
              alt={"desktop"}
              layout="responsive"
              width={150}
              height={150}
            />
          </div>
        </div> */}
=======
              src={"/invest1.png"}
              alt={"desktop"}
              layout="responsive"
              width={250}
              height={250}
            />
          </div>
        </div>
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
      </section>
    </header>
  );
};

export default Header;
