import React, { useState, createContext, useEffect } from 'react';
import { useRouter } from 'next/router';

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
