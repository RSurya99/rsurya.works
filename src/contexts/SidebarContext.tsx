import React, { useState, createContext } from 'react';

type SidebarType = {
  open: boolean, 
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const SidebarContext = createContext<SidebarType>({ open: false, setOpen: () => {} });

export const SidebarProvider = (props: any) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <SidebarContext.Provider
      value={{
        open,
        setOpen,
      }}>
      {props.children}
    </SidebarContext.Provider>
  );
};
