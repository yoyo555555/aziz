// Importez les modules nécessaires
import Button from "@/components/Button";
import useCompany from "@/components/hooks/useCompany";
import useTheme from "@/components/hooks/useTheme";
import { Loader } from "@mantine/core";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import PlanCard from "@/components/admin/settings/plan/PlanCard"; // Importer le composant PlanCard
import { useRouter } from "next/router";
// Interface pour les propriétés d'investissement
interface InvestmentProps {
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

// Interface pour les propriétés de rendement
interface ReturnProps {
  // Définissez les propriétés spécifiques à ReturnProps ici
}

// Fonction principale de la page
const Page = () => {
  const { mode } = useTheme();
  const [loading, setLoading] = useState(false);
  const investmentId = useParams().investmentId;
  const router = useRouter();
  const [deleteModal, setDeleteModal] = useState(false);
  const [addBonusModal, setAddBonusModal] = useState(false);

  const [investmentInfo, setInvestmentInfo] = useState<{
    investment: InvestmentProps;
    returns: ReturnProps[];
  }>();
  

  const { company } = useCompany();
  const primaryLightColor = company?.color.primaryLight;
  const currency = company?.currency.symbol;

  // Fonction pour obtenir les informations sur l'investissement
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

  // Effet pour obtenir les informations lors du montage du composant
  useEffect(() => {
    if (investmentId) getInvestmentInfo();
  }, [getInvestmentInfo, investmentId]);

  // Si les informations sur l'investissement ne sont pas disponibles, affichez le chargeur
  if (!investmentInfo) {
    return (
      <div className="flex w-full justify-center">
        <Loader color={primaryLightColor} />
      </div>
    );
  }

  // Obtenez les informations sur l'investissement et les rendements
  const { investment } = investmentInfo;
  const { returns } = investmentInfo;

  // Rendu de la page
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

// Exportez la fonction principale de la page
export default Page;
