"use client";

import { ReactNode, useCallback, useState } from "react";
import { HistoryMode, UserHistoryContext } from "./context";

export const UserHistoryModeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [mode, setMode] = useState<HistoryMode>("favourite");

  const toggleMode = useCallback((mode: HistoryMode) => {
    setMode(mode);
  }, []);

  return (
    <UserHistoryContext.Provider
      value={{ mode: mode || "favourite", toggleMode }}
    >
      {children}
    </UserHistoryContext.Provider>
  );
};
