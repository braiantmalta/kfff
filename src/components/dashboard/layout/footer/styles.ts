import { styled } from '@mui/system';
import { Instagram, FacebookRounded, LinkedIn } from '@mui/icons-material';

export const FooterBox = styled('div')({
  borderTop: '1px solid rgba(0, 0, 0, 0.12)',
});

export const FooterContent = styled('div')(({ theme }) => ({
  height: '225px',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  marginTop: '2rem',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    height: '100%',
    gap: '1rem',
  },
}));

export const ImageLogoBox = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginTop: '2rem',
  },
}));

export const TitleBox = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginBottom: '1rem',
  },
}));

export const SiteMapBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '176px',
  gap: '0.5rem',
  margin: '0px 32px 0px 49px',
  [theme.breakpoints.down('sm')]: {
    margin: '0rem',
  },
}));

export const ContactBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '176px',
  gap: '0.5rem',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '3rem',
  },
}));

export const SubFooterBox = styled('div')(({ theme }) => ({
  height: '80px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  [theme.breakpoints.down('sm')]: {
    height: 'fit-content',
  },
}));

export const SubFooterContent = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '1.5rem 0rem 1.5rem',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

export const LogosBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    marginTop: '1.5rem',
  },
}));

export const InstagramStyled = styled(Instagram)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '32px',
    height: '32px',
  },
}));

export const FacebookStyled = styled(FacebookRounded)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '32px',
    height: '32px',
  },
}));

export const LinkedInStyled = styled(LinkedIn)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '32px',
    height: '32px',
  },
}));
