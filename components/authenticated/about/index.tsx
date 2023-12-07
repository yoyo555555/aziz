"use client";
import useCompany from "@/components/hooks/useCompany";
import useTheme from "@/components/hooks/useTheme";
import { useSession } from "next-auth/react";
import React, { useCallback, useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { GiPositionMarker } from "react-icons/gi";
import "../about/style.css";
const About = () => {
  const { mode } = useTheme();
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const userId = (session?.user as { id: string })?.id;
  const { company } = useCompany();
  const primaryColor = company?.color.primary;
  const primaryLightColor = company?.color.primaryLight;
  const primaryVeryLightColor = company?.color.primaryVeryLight;

  
 

  
  return (
   
    <div
    className={`rounded-md px-2 sm:px-7 py-10 shadow-lg
  flex flex-col gap-10
${
  mode === "light"
    ? "shadow-gray-200 hover:shadow-gray-300"
    : " shadow-[#1d1d1d] hover:shadow-[#585858]"
} `}
  >
    <div
      className={`text-xl sm:text-2xl font-bold 
    flex justify-center
  ${mode === "light" ? "text-slate-700" : "text-white"}`}
    >
      CONTACT
    </div>
    <div
      style={{
        padding: "20px",
        backgroundColor: "#fff", // Couleur de fond
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Ombre en arrière-plan
        width: "694px", // Largeur de la boîte
        margin: "auto", // Centrer la boîte
        marginTop: "20px", // Espace au-dessus de la boîte
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ marginBottom: "20px" }}>{/* Logo ici */}</div>
      <p
        style={{
          textAlign: "center", // Centrer le texte
          lineHeight: "1.5", // Espace entre les lignes
          color: "#1e409f", // Couleur de texte bleu foncé
          fontFamily: "Calibri",
          fontSize: "18pt", // Taille du texte
        }}
      ></p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <p
         
        >
          <span id="Ttitre">
            <span id="Ttitrelogo">
              <span id="Ttitrelogo">
                <GiPositionMarker />
              </span>
            </span>
            <span id="a">Address</span>
          </span>
          <br />
          <span id="Ttexte">
          Santander, Paseo de Pereda,<br />9-12 y CIF A-39000013.
          </span>
        </p>
        <p
          
        >
          <span id="Ttitre">
            <span id="Ttitrelogo">
              {" "}
              <MdEmail />
            </span>
            <span id="e">Email</span>
          </span>
          <br />
          <span id="Ttexte">contact@coinxsafe.eu</span>
        </p>
        <p
        
        >
          <span id="Ttitre">
            {" "}
            <span id="Ttitrelogo">
              {" "}
              <FaPhone />
            </span>
            <span id="p">Phone</span>
          </span>
          <br />
          <span id="Ttexte">01.83.80.92.10</span>
        </p>
      </div>
      <p
        style={{
          textAlign: "center", // Centrer le texte
          lineHeight: "1.5", // Espace entre les lignes
          color: "#1e409f", // Couleur de texte bleu foncé
          fontFamily: "Calibri",
          fontSize: "12pt", // Taille du texte
        }}
      ></p>
    </div>
  
    <div className={`flex flex-col items-center justify-center gap-5`}>
    
  
    </div>
  </div>
    
  );
};

export default About;

