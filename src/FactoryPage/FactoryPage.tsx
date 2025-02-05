import FactoryPageContent from "./FactoryPageContent";
import { FactoryPageContextProvider } from "./FactoryPageContext";


export default function FactoryPage() {
  return (
    <FactoryPageContextProvider>
      <FactoryPageContent />
    </FactoryPageContextProvider>
  );
}
