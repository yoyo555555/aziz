declare interface InvestmentProps {
  planName: string;
  amountInvested: number;
  ROIReceived: number;
  ROIDaily: number;
  totalROI: number;
  referralBonus: number;
  duration: number;
  selectedPlan: string;
  userId: string;
  _id: string;
  createdAt: Date;
  status: "active" | "completed";
}
