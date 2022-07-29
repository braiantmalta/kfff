import { useContext } from 'react';
import { SidebarAndModalContext } from '@context/sidebarAndModal';

export const navbarItems = () => {
  const { handleOpenModal } = useContext(SidebarAndModalContext);

  return [
    {
      title: 'Home',
      path: '/',
      onClick: () => {
        ('');
      },
    },
    {
      title: 'About us',
      path: '/',
      onClick: () => {
        ('');
      },
    },
    {
      title: 'Benefits',
      path: '/',
      onClick: () => {
        ('');
      },
    },
    {
      title: 'Plans',
      path: '/',
      onClick: () => {
        ('');
      },
    },
    {
      title: 'Blog',
      path: '/',
      onClick: () => {
        ('');
      },
    },
    {
      title: 'Contact us',
      onClick: handleOpenModal,
    },
  ];
};
