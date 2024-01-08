"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import useTheme from "@/components/hooks/useTheme";
import ModalContainer from "@/components/modals/ModalContainer";
import { Select } from "@mantine/core";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
<<<<<<< HEAD
import { HiCurrencyEuro } from "react-icons/hi";
=======
import { AiOutlineDollar } from "react-icons/ai";
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
import { IoIosPerson } from "react-icons/io";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useCompany from "@/components/hooks/useCompany";

interface TopUpModalProps {
  opened: boolean;
  onClose: () => void;
}

const SendMoneyPaywanderModal = (props: TopUpModalProps) => {
  const { mode } = useTheme();
  const { opened, onClose } = props;

  const router = useRouter();
  const [loading, setLaoding] = useState(false);

  const { company } = useCompany();

  const [input, setInput] = useState({ username: "", amount: "" });
  const { data: session } = useSession();
  const userId = (session?.user as { id: string })?.id;
  const data = {
    senderId: userId,
    amount: Number(input.amount),
    receiverUsername: input.username.toLowerCase(),
  };

  const sendMoneyHandler = async () => {
    try {
      setLaoding(true);
      const res = await axios.post("/api/send-money/internal", data);
      if (res.data.error) throw new Error(res.data.error);
      const { _id: transationId } = res.data.senderTransaction;
      router.push(`/transaction-info/${transationId}`);
    } catch (error: any) {
      toast.error(error.message, { duration: 10000 });
    } finally {
      setLaoding(false);
    }
  };

  return (
    <ModalContainer
      title={`${company?.name} account`}
      opened={opened}
      onClose={onClose}
    >
      <div className="flex flex-col gap-5">
        <div className="flex justify-center">
          <Image
            src={company?.logo.url || ""}
            alt="logo"
<<<<<<< HEAD
            width={91}
            height={50}
=======
            width={70}
            height={70}
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
            className="w-[auto] h-[auto]"
          />
        </div>

        <TextInput
          value={input.amount}
          onChange={(e) => {
            if (isNaN(+e.target.value)) return;
            setInput({ ...input, amount: e.target.value });
          }}
<<<<<<< HEAD
          placeholder="Entrez le montant à envoyer"
          icon={HiCurrencyEuro}
=======
          placeholder="Enter amount to send"
          icon={AiOutlineDollar}
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
        />

        <TextInput
          value={input.username}
          onChange={(e) => setInput({ ...input, username: e.target.value })}
          placeholder="Receipient username"
          icon={IoIosPerson}
        />

        <Button loading={loading} onClick={sendMoneyHandler} label="Send" />
      </div>
    </ModalContainer>
  );
};

export default SendMoneyPaywanderModal;
