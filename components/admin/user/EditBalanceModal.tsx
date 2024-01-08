import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import ModalContainer from "@/components/modals/ModalContainer";
import { isNumber } from "@/constants/isNumber";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

interface EditBalanceModalProps {
  opened: boolean;
  onClose: () => void;
  user: userSchemaType;
}

const EditBalanceModal = (props: EditBalanceModalProps) => {
  const { opened, onClose, user } = props;
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    accountBalance: "",
    investWithdrawableBalance: "",
    loanBalance: "",
  });

  useEffect(() => {
    setInput({
      accountBalance: user.accountBalance.toString() || "",
      investWithdrawableBalance:
        user.investWithdrawableBalance.toString() || "",
      loanBalance: user.loanBalance.toString() || "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handler = async () => {
    try {
      if (
        input.accountBalance.trim() === "" ||
        input.investWithdrawableBalance.trim() === "" ||
        input.loanBalance.trim() === ""
      )
        throw new Error("Field cannot be empty");

      setLoading(true);

      const { data } = await axios.post("/api/admin/users/edit-balance", {
        accountBalance: Number(input.accountBalance),
        investWithdrawableBalance: Number(input.investWithdrawableBalance),
        loanBalance: Number(input.loanBalance),
        userId: user._id,
      });
      if (data.error) throw new Error(data.error);

      toast.success("Balance Updated");
      location.reload();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalContainer title="" opened={opened} onClose={onClose}>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="account-balance">Account Balance</label>
          <TextInput
            id="account-balance"
            value={input.accountBalance}
            onChange={(e) => {
              if (!isNumber(+e.target.value)) return;
              setInput({ ...input, accountBalance: e.target.value });
            }}
<<<<<<< HEAD
            placeholder="Solde du compte"
          />

          <label htmlFor="solde du portefeuille d'investissement">
          Solde d&investissement retirable          </label>
=======
            placeholder="Account Balance"
          />

          <label htmlFor="invest-balance">
            Withdrawable Investment Balance
          </label>
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
          <TextInput
            id="invest-balance"
            value={input.investWithdrawableBalance}
            onChange={(e) => {
              if (!isNumber(+e.target.value)) return;
              setInput({ ...input, investWithdrawableBalance: e.target.value });
            }}
<<<<<<< HEAD
            placeholder="solde du portefeuille d'investissement"
          />

          <label htmlFor="loan-balance">Solde du prêt</label>
=======
            placeholder="Invest Balance"
          />

          <label htmlFor="loan-balance">Loan Balance</label>
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
          <TextInput
            id="loan-balance"
            value={input.loanBalance}
            onChange={(e) => {
              if (!isNumber(+e.target.value)) return;
              setInput({ ...input, loanBalance: e.target.value });
            }}
<<<<<<< HEAD
            placeholder="Solde du prêt"
          />
        </div>
        <Button loading={loading} label="Recharger" onClick={handler} />
=======
            placeholder="Loan Balance"
          />
        </div>
        <Button loading={loading} label="Top Up" onClick={handler} />
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
      </div>
    </ModalContainer>
  );
};

export default EditBalanceModal;
