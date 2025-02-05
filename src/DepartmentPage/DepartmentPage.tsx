import DepartmentPageContent from "./DepartmentPageContent";
import { DepartmentPageContextProvider } from "./DepartmentPageContext";


export default function DepartmentPage() {
  return (
    <DepartmentPageContextProvider>
      <DepartmentPageContent />
    </DepartmentPageContextProvider>
  );
}
