import { styled } from '@mui/system';

export const HeaderMobileGroup = styled('div')({
  position: 'fixed',
  top: 0,
  display: 'flex',
  height: '68px',
  width: '100%',
  zIndex: 5,
  backgroundColor: '#FFFFFF',
  justifyContent: 'space-between',
  boxShadow: '0px 4px 4px rgba(0,0,0,0.1)',
});

export const DashboardLayoutContent = styled('div')({
  padding: '4rem 0px 0px',
  height: '60vh',
  // maxHeight: '1024px',
});

export const LogoBox = styled('div')({
  display: 'flex',
  flex: 0.5,
  justifyContent: 'start',
});
