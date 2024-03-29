"use client";
import Button from "@/components/Button";
import useCompany from "@/components/hooks/useCompany";
import useTheme from "@/components/hooks/useTheme";
import formatDate from "@/constants/formatDate";
import { useRouter } from "next/navigation";
import React from "react";
import { FaMoneyCheckAlt } from "react-icons/fa";

interface PlanCardProps {
  key: string;
  id: string;
  planName: string;
  minAmount: number;
  maxAmount: number;
  ROIDaily: number;
  totalROI: number;
  duration: number;
  createdAt: Date;
  referralBonus: number;
  selectedPlan: string; // Assurez-vous que selectedPlan est défini
}

const PlanCard: React.FC<PlanCardProps> = (props) => {
  const { key, id, planName, minAmount, maxAmount, ROIDaily, totalROI, duration, createdAt, referralBonus, selectedPlan } = props;

  const router = useRouter();
  const date = new Date(`${createdAt}`);

  const { company } = useCompany();
  const primaryLightColor = company?.color.primaryLight;

  // Utilisez la propriété selectedPlan pour déterminer la devise correspondante
  let currency = "";
  if (selectedPlan === "BTC") {
    currency = "Bitcoin";
  } else if (selectedPlan === "ETH") {
    currency = "ETH";
  } else if (selectedPlan === "USDT") {
    currency = "USDT";
  } else {
    currency = "DefaultCurrency"; // Définissez la devise par défaut si le plan n'est pas reconnu
  }

  return (
    <div
   
  
    >
      <div>
        <FaMoneyCheckAlt color={primaryLightColor} size={24} />
      </div>

      <div className="flex flex-col gap-1.5 items-center text-center w-full">
        <div className="flex justify-start items-center gap-1 w-full">
          <div className="text-sm">Name:</div>
          <div className="font-bold">{planName}</div>
        </div>

        <div className="flex justify-start items-center gap-1 w-full">
          <div className="text-sm">Mini Deposit:</div>
          <div className="font-bold">
            {currency}
            {minAmount}
          </div>
        </div>

        <div className="flex justify-start items-center gap-1 w-full">
          <div className="text-sm">Max Deposit:</div>
          <div className="font-bold">
            {currency}
            {maxAmount}
          </div>
        </div>

        <div className="flex justify-start items-center gap-1 w-full">
          <div className="text-sm">Referral Bonus:</div>
          <div className="font-bold">
            {referralBonus === 0 || !referralBonus
              ? "No Bonus"
              : `${referralBonus}%`}
          </div>
        </div>

        <div className="flex justify-start items-center gap-1 w-full">
          <div className="text-sm">Total ROI:</div>
          <div className="font-bold">{totalROI}%</div>
        </div>

        <div className="flex justify-start items-center gap-1 w-full">
          <div className="text-sm">ROI Daily:</div>
          <div className="font-bold">{ROIDaily}%</div>
        </div>

        <div className="flex justify-start items-center gap-1 w-full">
          <div className="text-sm">Duration (days):</div>
          <div className="font-bold">{duration}</div>
        </div>

        <div className="flex justify-start items-center gap-1 w-full">
          <div className="text-sm">Created At:</div>
          <div className="font-bold">{formatDate(date)}</div>
        </div>
      </div>

      <Button
        onClick={() => router.push(`/admin/settings/plans/${id}`)}
        label={"View Details"}
      />
    </div>
  );
};

export default PlanCard;