"use client";
import Button from "@/components/Button";
import useCompany from "@/components/hooks/useCompany";
import useTheme from "@/components/hooks/useTheme";
import formatDate from "@/constants/formatDate";
import formatNumber from "@/constants/formatNumber";
import { useRouter } from "next/navigation";
import React from "react";

interface InvestmentCardCardProps {
  name: string;
  id: string;
  roiDaily: number;
  roiReceived: number;
  amountInvested: number;
  status: "active" | "completed";
  createdAt: Date;
}

const InvestmentCard = (props: InvestmentCardCardProps) => {
  const { company } = useCompany();
  const { mode } = useTheme();
  const { name, roiReceived, id, roiDaily, amountInvested, status, createdAt } =
    props;
  const router = useRouter();
  const date = new Date(`${createdAt}`);

  let currency = "";
  if (name.toUpperCase() === "POOL ETH") {
    currency = "ETH ";
  } else if (name.toUpperCase() === "POOL BTC") {
    currency = "BTC ";
  } else if (name.toUpperCase() === "POOL USDT") {
    currency = "USDT ";
  } else {
    currency = "DefaultCurrency"; // Définissez la devise par défaut si le plan n'est pas reconnu
  }

  return (
    <>
      <div
        className={`w-full sm:w-[45%] h-[270px] 
    shadow-md rounded-md p-5 
    transition-all duration-300 hover:scale-105 
    hover:shadow-lg flex flex-col items-start 
    gap-4 justify-between
    ${
      mode === "light"
        ? "shadow-[#d9d9d9] hover:shadow-[#c1c1c1]"
        : "shadow-[#5d5d5d] hover:shadow-[#7b7b7b]"
    }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`${
              status === "active" ? "text-[#48d38a]" : "text-rose-500"
            }`}
          >
            {status}
          </div>
          <div className="font-bold">{name.toUpperCase()} PLAN</div>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="font-semibold text-sm flex gap-3">
            <div className="text-xs">Amount Invested:</div>
            <div className="font-semibold text-lg">
              {currency}
              {formatNumber(amountInvested)}
            </div>
          </div>

          <div className="font-semibold text-sm flex gap-3">
            <div className="text-xs">ROI Recieved:</div>
            <div className="font-semibold text-lg">
              {currency}
              {formatNumber(roiReceived)} ({roiDaily}% daily)
            </div>
          </div>

          <div className="font-semibold text-sm flex gap-3">
            <div className="text-xs">Created At:</div>
            <div className="font-semibold text-lg">{formatDate(date)}</div>
          </div>
        </div>

        <Button
          outline
          onClick={() => router.push(`/home/invest-and-earn/${id}`)}
          label={"View Details"}
        />
      </div>
    </>
  );
};

export default InvestmentCard;
