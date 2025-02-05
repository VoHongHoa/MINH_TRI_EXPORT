import React, { createContext, PropsWithChildren, useState } from "react";

interface IFactoryPageContextProps {}

const FactoryPageContext = createContext<IFactoryPageContextProps>(
  {} as IFactoryPageContextProps
);

const FactoryPageContextProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
    
  const contextValue: IFactoryPageContextProps = {};
  return (
    <FactoryPageContext.Provider value={contextValue}>
      {children}
    </FactoryPageContext.Provider>
  );
};
export { FactoryPageContext, FactoryPageContextProvider };
