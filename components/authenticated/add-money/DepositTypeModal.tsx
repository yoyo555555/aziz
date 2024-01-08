import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import useCompany from "@/components/hooks/useCompany";
import ModalContainer from "@/components/modals/ModalContainer";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

interface DepositTypeModalProps {
  opened: boolean;
  onClose: () => void;
  setSelectedDepositType: (
    depositType:
      | "automatic-coin-payment"
      | "manual-coin-payment"
      | "bank-transfer"
<<<<<<< HEAD
      | ""
=======
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
  ) => void;
}

// React.Dispatch<React.SetStateAction<string>>

const DepositTypeModal = (props: DepositTypeModalProps) => {
  const { opened, onClose, setSelectedDepositType } = props;
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { company } = useCompany();
  const isAutoCoinDepositDisabled =
    company?.payment.automaticCoinPayment === "off";
  const isManualCoinDepositDisabled =
    company?.payment.manualCoinPayment === "off";
  const isBankTransferDisabled = company?.payment.bankTransfer === "off";

  return (
<<<<<<< HEAD
    <ModalContainer title="Deposit" opened={opened} onClose={onClose}>
      <div className="flex flex-col gap-3">
        <Button
=======
    <ModalContainer title="Payment partners" opened={opened} onClose={onClose}>
      <div className="flex flex-col gap-3">
        {/* <Button
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
          outline
          disabled={isAutoCoinDepositDisabled}
          loading={loading}
          label={`Automatic Coin Payment ${
            isAutoCoinDepositDisabled ? "(not available)" : ""
          } `}
          onClick={() => {
            onClose();
            setSelectedDepositType("automatic-coin-payment");
          }}
<<<<<<< HEAD
        />
        <Button
          disabled={isManualCoinDepositDisabled}
          loading={loading}
          label={`Manual Coin Payment ${
=======
        /> */}
        <Button
          disabled={isManualCoinDepositDisabled}
          loading={loading}
          label={`Transak ${
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
            isManualCoinDepositDisabled ? "(not available)" : ""
          }`}
          onClick={() => {
            onClose();
            setSelectedDepositType("manual-coin-payment");
          }}
        />

        <Button
          disabled={isBankTransferDisabled}
          loading={loading}
<<<<<<< HEAD
          label={`Bank Transfer ${
=======
          label={`Moonpay${
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
            isBankTransferDisabled ? "(not available)" : ""
          } `}
          onClick={() => {
            onClose();
            setSelectedDepositType("bank-transfer");
          }}
        />
      </div>
    </ModalContainer>
  );
};

export default DepositTypeModal;
