"use client";
import React, { useCallback, useEffect, useState } from "react";
import "../card/style.css"; // Chemin vers votre feuille de style CSS
import TransactionCard from "@/components/authenticated/home/spend/TransactionCard";
import ReferralInfo from "@/components/authenticated/home/referral/ReferralInfo"




const Card = () => {
 

  return (
    <>
    <section>
      <h1>Your Referrals</h1>
      <br />
    {/* <TransactionCard title="Frank Pottier"
          amount={50.0}
          createdAt={new Date()}
          senderName="John Doe"
          id="1"
          status="successful"
          category="money-received"/>
    <TransactionCard/>
    <TransactionCard/>
    <TransactionCard/>
    <TransactionCard  />*/}
 <ReferralInfo
  title="Frank Pottier"
  amount={50.0}
  createdAt={new Date()}
  senderName="John Doe"
  currency="EUR"
/>
    </section>

     </>


)};

export default Card;
