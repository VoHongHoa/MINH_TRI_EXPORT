import React, { createContext, PropsWithChildren, useState } from "react";

interface IDepartmentPageContextProps {}

const DepartmentPageContext = createContext<IDepartmentPageContextProps>(
  {} as IDepartmentPageContextProps
);

const DepartmentPageContextProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
    
  const contextValue: IDepartmentPageContextProps = {};
  return (
    <DepartmentPageContext.Provider value={contextValue}>
      {children}
    </DepartmentPageContext.Provider>
  );
};
export { DepartmentPageContext, DepartmentPageContextProvider };
