"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import PendingTransaction from "@/components/authenticated/PendingTransaction";
import useTheme from "@/components/hooks/useTheme";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
<<<<<<< HEAD
import { FaEuroSign } from "react-icons/fa";

=======
import { FaEuroSign  } from "react-icons/fa";
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
import { useSession } from "next-auth/react";
import { Loader } from "@mantine/core";
import DepositTypeModal from "./DepositTypeModal";
import AutomaticCoinPayment from "./automaticCoinPayment";
import ManualCoinPayment from "./manualCoinPayment";
import BankTranfer from "./bankTransfer";
import useCompany from "@/components/hooks/useCompany";

const AddMoney = () => {
  const { mode } = useTheme();
  const [depositType, setDepositType] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingTransaction, setLoadingTransaction] = useState(false);
  const [amountInput, setAmountInput] = useState("");
  const [linkedTransaction, setLinkedTransaction] = useState("");
  const [pendingTransaction, setPendingTransaction] = useState<
    TransactionProps[]
  >([]);
<<<<<<< HEAD
  const [selectedDepositType, setSelectedDepositType] =
    useState<
      "automatic-coin-payment" | "manual-coin-payment" | "bank-transfer" | ""
    >("");
=======
  const [selectedDepositType, setSelectedDepositType] = useState<
    "automatic-coin-payment" | "manual-coin-payment" | "bank-transfer" | ""
  >("");
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
  const [coinName, setCoinName] = useState("");

  const { data: session } = useSession();
  const userId = (session?.user as { id: string })?.id;

  const { company } = useCompany();
  const primaryColor = company?.color.primary;

  const getPendingTransaction = useCallback(async () => {
    try {
      setLoadingTransaction(true);
      const { data: transactions } = await axios.get(
        `/api/transactions/user/${userId}`
      );

      if (transactions.error) throw new Error(transactions.error);

      const pending: TransactionProps[] = transactions.filter(
        (item: TransactionProps) => item.status === "pending"
      );
      setPendingTransaction(pending);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoadingTransaction(false);
    }
  }, [userId]);

  useEffect(() => {
    if (userId) getPendingTransaction();
  }, [getPendingTransaction, userId]);

  const displayDepositTypeHandler = () => {
    if (pendingTransaction.length > 0 && linkedTransaction.trim() === "") {
<<<<<<< HEAD
      return toast.error(
        "Vous avez une transaction en attente. S'il vous plait sélectionner en un"
      );
=======
      return toast.error("You have pending transaction. Please select one");
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
    }

    if (
      amountInput.trim() === "" ||
      (company && Number(amountInput) < company.desposit.minimum)
    ) {
      return toast.error(
<<<<<<< HEAD
        `Le montant minimum à déposer est €${company?.desposit.minimum}`
=======
        `Minimum amount to deposit is $${company?.desposit.minimum}`
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
      );
    }

    if (company && Number(amountInput) > company.desposit.maximum) {
      return toast.error(
<<<<<<< HEAD
        `Le montant maximum à déposer est de €${company.desposit.maximum}`
=======
        `Maximum amount to deposit is $${company.desposit.maximum}`
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
      );
    }
    setDepositType(true);
  };

  return (
    <>
      {selectedDepositType === "" && (
        <div
          className={`flex flex-col items-center 
    gap-10
    ${mode === "light" ? "text-slate-700" : "text-white"}`}
        >
<<<<<<< HEAD
          <div className="text-2xl font-bold">Effectuer un depot</div>
=======
          <div className="text-2xl font-bold">Add Money</div>
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7

          <div
            className={`shadow-md w-full sm:w-[70%] 
      p-5 rounded-md flex flex-col 
      gap-7
      ${mode === "light" ? "shadow-gray-200" : "shadow-[#1d1d1d]"}`}
          >
            <TextInput
              value={amountInput}
              onChange={(e) => {
                if (isNaN(Number(e.target.value))) return;
                setAmountInput(e.target.value);
              }}
<<<<<<< HEAD
              placeholder="Entrez le montant que vous souhaitez déposer"
              icon={FaEuroSign}
=======
              placeholder="Enter the amount you want to deposit"
              icon={FaEuroSign }
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
            />

            {!loadingTransaction && (
              <div className="text-center">
                {pendingTransaction.length > 0
<<<<<<< HEAD
                  ? ` vous avez ${pendingTransaction.length} transaction en attente, choisissez-en une
                  et continuez votre dépôt.`
                  : `Vous n'avez aucune transaction en attente, vous pouvez continuer votre dépôt`}
=======
                  ? ` You have ${pendingTransaction.length} pending transaction, choose one
          and continue with your deposit.`
                  : `You Do not have any pending transaction, you can continue with your Deposit`}
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
              </div>
            )}

            <div
              className="flex flex-col items-center 
        w-full gap-3"
            >
              {!loadingTransaction &&
                pendingTransaction.map((item) => (
                  <PendingTransaction
                    key={item._id}
                    setLinkedTransaction={setLinkedTransaction}
                    linkedTransaction={linkedTransaction}
                    title={item.title}
                    createdAt={item.createdAt}
                    status={item.status}
                    transactionId={item._id || ""}
                    amount={item.amount}
                  />
                ))}

              {loadingTransaction && <Loader color={primaryColor} size={24} />}
            </div>

            <Button
              disabled={loadingTransaction}
              loading={loading}
              onClick={displayDepositTypeHandler}
              label="Continue"
            />
          </div>
        </div>
      )}

      {selectedDepositType === "automatic-coin-payment" && (
        <AutomaticCoinPayment
          amount={Number(amountInput)}
          setSelectedDepositType={setSelectedDepositType}
          linkedTransaction={linkedTransaction}
          selectedDepositType={selectedDepositType}
          coinName={coinName}
          setCoinName={setCoinName}
        />
      )}

      {selectedDepositType === "manual-coin-payment" && (
        <ManualCoinPayment
          amount={Number(amountInput)}
          setSelectedDepositType={setSelectedDepositType}
          linkedTransaction={linkedTransaction}
          selectedDepositType={selectedDepositType}
          coinName={coinName}
          setCoinName={setCoinName}
        />
      )}

      {selectedDepositType === "bank-transfer" && <BankTranfer />}

      <DepositTypeModal
        setSelectedDepositType={setSelectedDepositType}
        opened={depositType}
        onClose={() => setDepositType(false)}
      />
    </>
  );
};

export default AddMoney;
