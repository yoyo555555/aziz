"use client";
import PaymentCard from "@/components/authenticated/send-money/PaymentCard";
import useTheme from "@/components/hooks/useTheme";
import React, { useState } from "react";
import { FaPaperPlane, FaWallet } from "react-icons/fa";
import paymentCardDetails, { countryData } from "@/constants/paymentCard";
import { Select } from "@mantine/core";
import SendMoneyPaywanderModal from "@/components/authenticated/send-money/SendMoneyPaywanderModal";
import SendMoneyModal from "@/components/authenticated/send-money/SendMoneyModal";
import { useRouter } from "next/navigation";
import { AiFillBank } from "react-icons/ai";
import useCompany from "@/components/hooks/useCompany";

const Send = () => {
  const { mode } = useTheme();
  const [displayPayment, setDisplayPayments] = useState(paymentCardDetails);
  const [sendToPaywanderAccountModal, setSendToPaywanderAccountModal] =
    useState(false);

  const [sendToOthersModal, setSendToOthersModal] = useState(false);
  const [sendToOthersTitle, setSendToOthersTitle] = useState("");
  const [sendToOthersLogo, setSendToOthersLogo] = useState("");

  const { company } = useCompany();

  return (
    <div
      className="flex justify-center flex-col 
    items-center gap-10"
    >
      <div
        className={`text-xl sm:text-2xl font-bold
      ${mode === "light" ? "text-slate-700" : "text-white"}`}
      >
<<<<<<< HEAD
       Envoyer de l&argent
=======
        Send Money
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
      </div>

      <div
        className={`w-full flex flex-col 
        items-center gap-5`}
      >
        <PaymentCard
          onClick={() => setSendToPaywanderAccountModal(true)}
<<<<<<< HEAD
          label={`Envoyer vers un autre ${company?.name} compte`}
=======
          label={`Send to other ${company?.name} Account`}
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
          icon={FaPaperPlane}
        />

        <div
          className={`text-lg sm:text-xl font-bold text-center
      ${mode === "light" ? "text-slate-700" : "text-white"}`}
        >
<<<<<<< HEAD
          Méthodes de retrait
=======
          Methods For Withdrawal
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
        </div>

        <PaymentCard
          onClick={() => setSendToOthersModal(true)}
          icon={FaWallet}
<<<<<<< HEAD
          label="Retrait vers votre portfeuille cryptomonnaie"
        />

        {/* <PaymentCard
          disabled
          onClick={() => setSendToOthersModal(true)}
          icon={AiFillBank}
          label="Retrait vers votre bank"
        /> */}
=======
          label="Withdraw To your Crypto wallet"
        />

        <PaymentCard
          disabled
          onClick={() => {}}
          icon={AiFillBank}
          label="Withdraw To your Bank"
        />
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
      </div>

      <SendMoneyPaywanderModal
        opened={sendToPaywanderAccountModal}
        onClose={() => setSendToPaywanderAccountModal(false)}
      />

      <SendMoneyModal
        icon={FaWallet}
        title={sendToOthersTitle}
        opened={sendToOthersModal}
        onClose={() => setSendToOthersModal(false)}
      />
    </div>
  );
};

export default Send;
