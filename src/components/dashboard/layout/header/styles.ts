import { styled } from '@mui/system';

export const HeaderContent = styled('div')({
  position: 'fixed',
  top: 0,
  display: 'flex',
  alignItems: 'center',
  height: '68px',
  width: '100%',
  zIndex: 5,
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 4px 4px rgba(0,0,0,0.1)',
});

export const NavbarContent = styled('div')({
  display: 'flex',
});

export const LogoBox = styled('div')({
  display: 'flex',
  flex: 0.5,
  justifyContent: 'start',
  height: '48px',
});

export const ItemBox = styled('div')({
  display: 'flex',
  flex: 0.5,
  alignItems: 'center',
  justifyContent: 'end',
});

export const ItemList = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

export const Item = styled('span')({
  color: 'white',
  cursor: 'pointer',
  textAlign: 'center',
  margin: '0rem 2.25rem',
  transition: '0.2s all',
});
