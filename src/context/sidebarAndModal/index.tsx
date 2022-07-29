import { createContext, ReactNode, useState } from 'react';

type SidebarAndModalProviderProps = {
  children: ReactNode;
};

type SidebarAndModalContextProps = {
  open: boolean;
  openModal: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
  handleDrawerMobile: () => void;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
};

export const SidebarAndModalContext = createContext<SidebarAndModalContextProps>(
  {} as SidebarAndModalContextProps
);

export const SidebarAndModalProvider = ({
  children,
}: SidebarAndModalProviderProps) => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerMobile = () => {
    setOpen(!open);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <SidebarAndModalContext.Provider
      value={{
        open,
        openModal,
        handleDrawerMobile,
        handleDrawerOpen,
        handleDrawerClose,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {children}
    </SidebarAndModalContext.Provider>
  );
};
