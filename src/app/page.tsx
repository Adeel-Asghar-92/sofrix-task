import Image from "next/image";
import AccountCard from "./Components/Cards/accountCard";
import PortFolioCard from "./Components/Cards/portfolioCard";
import AutomateCard from "./Components/Cards/automateCard";
import InvestorReportCard from "./Components/Cards/investorReportCard";

export default function Home() {
  return (
    <main>
      <AccountCard />
      <PortFolioCard />
      <AutomateCard />
      <InvestorReportCard />
    </main>
  );
}
