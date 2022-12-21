import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [tableData, setTableData] = useState([]);
  return (
    <AppContext.Provider value={{ items: [tableData, setTableData] }}>
      {props.children}
    </AppContext.Provider>
  );
};
