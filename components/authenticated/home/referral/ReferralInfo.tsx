import React from "react";
import { FaMoneyBillAlt, FaAngleRight } from "react-icons/fa";
import formatNumber from "@/constants/formatNumber";
import formatDate from "@/constants/formatDate";
import "./style.css"; 


interface ReferralInfoProps {
  title: string;
  amount: number | string;
  createdAt?: Date;
  senderName?: string;
  currency: string;
}

const ReferralInfo = (props: ReferralInfoProps) => {
  const { title, amount, createdAt, senderName, currency } = props;
  const date = createdAt && new Date(createdAt);
  const formattedDate = formatDate(date);

  return (
    <div className="flex items-center gap-4">
      <FaMoneyBillAlt size={24} />

      <div>
        <div className="font-semibold text-gray-500">{title}</div>
        <div className="font-semibold text-sm text-gray-300">
          {`${formattedDate} . ${senderName}`}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="font-bold flex flex-col items-end text-slate-700">
          <div>
            {currency}
            {formatNumber(+amount)}
          </div>
        </div>

        <FaAngleRight size={24} />
      </div>
    </div>
  );
};

export default ReferralInfo;
