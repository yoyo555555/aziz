import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import useTheme from "@/components/hooks/useTheme";
import ModalContainer from "@/components/modals/ModalContainer";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

interface PayModalProps {
  opened: boolean;
  onClose: () => void;

  planName: string;
  ROIDaily: number;
  totalROI: number;
  duration: number;
  maxAmount: number;
  minAmount: number;
  referralBonus: number;
}

const PayModal = (props: PayModalProps) => {
  const {
    opened,
    onClose,
    planName,
    ROIDaily,
    totalROI,
    duration,
    minAmount,
    maxAmount,
    referralBonus,
  } = props;
  const [amountInput, setAmountInput] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { mode } = useTheme();

  const payHandler = async () => {
    try {
      if (Number(amountInput) < minAmount || Number(amountInput) > maxAmount)
        throw new Error(
          `Investment For this plan is between ${minAmount} and ${maxAmount}`
        );

      setLoading(true);
      const { data } = await axios.post("/api/invest", {
        planName,
        amountInvested: Number(amountInput),
        ROIDaily,
        totalROI,
        duration,
        referralBonus,
      });

<<<<<<< HEAD
      if (data.error === "VOUS N'AVEZ PAS UN SOLDE DE COMPTE SUFFISANT") {
=======
      if (data.error === "YOU DO NOT HAVE SUFFICIENT ACCOUNT BALANCE") {
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
        router.push(`/add-money`);
        throw new Error(data.error);
      }
      if (data.error) throw new Error(data.error);

      // const { _id: transactionId }: TransactionProps = data;
      router.push(`/home/invest-and-earn`);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalContainer
      title="Pay With Acc Balance"
      opened={opened}
      onClose={onClose}
    >
      <div className="flex flex-col gap-3">
        <div>
<<<<<<< HEAD
        Le montant sera déduit du solde de votre compte. (
=======
          Amount will be deducted from your account balance. (
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
          <span
            className={`${
              mode === "light" ? "text-[#f43f5e]" : "text-[#fb7185]"
            }`}
          >
            {planName} plan
          </span>
          )
        </div>

        <TextInput
          value={amountInput}
          onChange={(e) => {
            if (isNaN(Number(e.target.value))) return;
            setAmountInput(e.target.value);
          }}
<<<<<<< HEAD
          placeholder="Entrez le montant à investir"
        />
        <Button loading={loading} label="Payez maintenant" onClick={payHandler} />
=======
          placeholder="Enter amount to invest"
        />
        <Button loading={loading} label="Pay Now" onClick={payHandler} />
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
      </div>
    </ModalContainer>
  );
};

export default PayModal;
