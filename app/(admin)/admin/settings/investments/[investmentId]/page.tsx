"use client";

import Button from "@/components/Button";
import AddInvestmentBonusModal from "@/components/admin/settings/investment/AddInvestmentBonusModal";
import DeleteInvestmentModal from "@/components/admin/settings/investment/DeleteInvestmentModal";
import EditInvestmentModal from "@/components/admin/settings/investment/EditInvestmentModal";
import useCompany from "@/components/hooks/useCompany";
import useTheme from "@/components/hooks/useTheme";
import formatDate from "@/constants/formatDate";
import { Loader } from "@mantine/core";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import PlanCard, {  } from "@/components/admin/settings/plan/PlanCard"; // Importer le composant PlanCard

interface InvestmentProps {
  // Ajoutez les propriétés spécifiques à InvestmentProps ici
  planName: string;
  amountInvested: number;
  ROIDaily: number;
  totalROI: number;
  duration: number;
  referralBonus: number;
  createdAt: Date;
  selectedPlan: string;
  _id: string;
}

interface ReturnProps {
  // Définissez les propriétés spécifiques à ReturnProps ici
}

const Page = () => {
  const { mode } = useTheme();
  const [loading, setLoading] = useState(false);
  const investmentId = useParams().investmentId;

  const [deleteModal, setDeleteModal] = useState(false);
  const [addBonusModal, setAddBonusModal] = useState(false);

  const [investmentInfo, setInvestmentInfo] = useState<{
    investment: InvestmentProps;
    returns: ReturnProps[];
  }>();
  const router = useRouter();

  const { company } = useCompany();
  const primaryLightColor = company?.color.primaryLight;
  const currency = company?.currency.symbol;

  const getInvestmentInfo = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/invest/${investmentId}`);
      if (data.error) throw new Error(data.error);
      setInvestmentInfo(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }, [investmentId]);

  useEffect(() => {
    if (investmentId) getInvestmentInfo();
  }, [getInvestmentInfo, investmentId]);

  if (!investmentInfo) {
    return (
      <div className="flex w-full justify-center">
        <Loader color={primaryLightColor} />
      </div>
    );
  }

  const { investment } = investmentInfo;
  const { returns } = investmentInfo;

  return (
    <>
      <PlanCard
        planName={investment.planName}
        minAmount={investment.amountInvested}
        maxAmount={investment.amountInvested}
        ROIDaily={investment.ROIDaily}
        totalROI={investment.totalROI}
        duration={investment.duration}
        referralBonus={investment.referralBonus}
        createdAt={investment.createdAt}
        id={investment._id}
        selectedPlan={investment.selectedPlan}
      />

      <div className={`flex justify-center pb-7`}>
        {/* Reste du code de votre page... */}
      </div>

      {/* Reste du code de votre page... */}
    </>
  );
};

export default Page;
