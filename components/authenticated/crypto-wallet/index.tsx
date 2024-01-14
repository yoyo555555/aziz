"use client";
import React, { useEffect } from "react";
import "./style.css"; // Chemin vers votre feuille de style CSS
import { useRouter } from "next/navigation";
import Button from "@/components/Button";


const CoinGeckoWidget = () => {
  const router = useRouter();
  useEffect(() => {
    // Charge le script du widget Coingecko Coin Ticker dès que le composant est monté
    const script = document.createElement("script");
    script.src = "https://widgets.coingecko.com/coingecko-coin-ticker-widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Nettoie le script lorsque le composant est démonté
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center", paddingTop: "50px" }}>
      {/* Utilisez le premier widget Coingecko Coin Ticker après que le script est chargé */}
      <div className="widget-container1">
        <coingecko-coin-ticker-widget
          coin-id="bitcoin"
          currency="usd"
          locale="fr"
          background-color="#ffffff"
        ></coingecko-coin-ticker-widget>
        <Button onClick={() => router.push("/add-money")} label={"Make a deposit"} />
      </div>

      {/* Utilisez le deuxième widget Coingecko Coin Ticker après que le script est chargé */}
      <div className="widget-container2">
        <coingecko-coin-ticker-widget
          coin-id="ethereum"
          currency="usd"
          locale="fr"
          background-color="#ffffff"
        ></coingecko-coin-ticker-widget>
          <Button onClick={() => router.push("/add-money")} label={"Make a deposit"} />
      </div>

      {/* Utilisez le troisième widget Coingecko Coin Ticker après que le script est chargé */}
      <div className="widget-container3">
        <coingecko-coin-ticker-widget
          coin-id="tether"
          currency="usd"
          locale="fr"
        ></coingecko-coin-ticker-widget>
          <Button onClick={() => router.push("/add-money")} label={"Make a deposit"} />
      </div>
    </div>
  );
};

export default CoinGeckoWidget;
