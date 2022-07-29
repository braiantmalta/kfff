import { DefaultColor } from '@utils/constants/capsuleColors';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

type FlaskMakerProviderProps = {
  children: ReactNode;
};

type FlaskMakerContextProps = {
  isPrimary: boolean;

  setPrimaryColor: Dispatch<SetStateAction<string>>;
  primaryColor: string;
  setSecondaryColor: Dispatch<SetStateAction<string>>;
  secondaryColor: string;
  setCapsuleColors: Dispatch<SetStateAction<TwoColorsType | undefined>>;
  capsuleColors: TwoColorsType | undefined;
  setCoverColor: Dispatch<SetStateAction<PrimaryColorType | undefined>>;
  coverColor: PrimaryColorType | undefined;
  setFlaskColor: Dispatch<SetStateAction<PrimaryColorType | undefined>>;
  flaskColor: PrimaryColorType | undefined;
  setFlaskLabelColor: Dispatch<SetStateAction<TwoColorsType | undefined>>;
  flaskLabelColor: TwoColorsType | undefined;
  setFlaskLogoPicture: Dispatch<SetStateAction<string>>;
  flaskLogoPicture: string;
  setFlaskCoverPicture: Dispatch<SetStateAction<string>>;
  flaskCoverPicture: string;
  setImagePreview: Dispatch<
    SetStateAction<string | ArrayBuffer | null | undefined>
  >;
  imagePreview: string | ArrayBuffer | null | undefined;

  setActiveStep: Dispatch<SetStateAction<number>>;
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  setFlaskTitle: Dispatch<SetStateAction<string>>;
  flaskTitle: string;
  setFlaskTitleColor: Dispatch<SetStateAction<string>>;
  flaskTitleColor: string;
  openModal: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  openSpecificationsModal: boolean;
  handleOpenSpecificationsModal: () => void;
  handleCloseSpecificationsModal: () => void;
  handleResetData: () => void;
};

export type TwoColorsType = {
  primary: string;
  secondary?: string;
};

export type PrimaryColorType = {
  primary: string;
};

export const FlaskMakerContext = createContext<FlaskMakerContextProps>(
  {} as FlaskMakerContextProps
);

export const FlaskMakerContextProvider = ({
  children,
}: FlaskMakerProviderProps) => {
  const [isPrimary] = useState<boolean>(true);

  const [primaryColor, setPrimaryColor] = useState<string>(DefaultColor);
  const [secondaryColor, setSecondaryColor] = useState<string>(DefaultColor);

  const [capsuleColors, setCapsuleColors] = useState<TwoColorsType>();
  const [coverColor, setCoverColor] = useState<PrimaryColorType>();
  const [flaskColor, setFlaskColor] = useState<PrimaryColorType>();
  const [flaskLabelColor, setFlaskLabelColor] = useState<TwoColorsType>();

  const [flaskLogoPicture, setFlaskLogoPicture] = useState<string>('');
  const [flaskCoverPicture, setFlaskCoverPicture] = useState<string>('');

  const [flaskTitle, setFlaskTitle] = useState<string>('');
  const [flaskTitleColor, setFlaskTitleColor] = useState<string>('');

  const [imagePreview, setImagePreview] = useState<
    string | ArrayBuffer | null
  >();

  const [activeStep, setActiveStep] = useState(0);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [
    openSpecificationsModal,
    setOpenSpecificationsModal,
  ] = useState<boolean>(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleOpenSpecificationsModal = () => setOpenSpecificationsModal(true);
  const handleCloseSpecificationsModal = () =>
    setOpenSpecificationsModal(false);

  const handleNext = () => {
    if (activeStep === 3) {
      setOpenModal(true);
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleResetData = () => {
    handleCloseModal();
    setCapsuleColors({ primary: '', secondary: '' });
    setCoverColor({ primary: '' });
    setFlaskColor({ primary: '' });
    setFlaskLabelColor({ primary: '', secondary: '' });
    setFlaskLogoPicture('');
    setFlaskCoverPicture('');
    setFlaskTitle('');
    setFlaskTitleColor('');
    setImagePreview('');
    setPrimaryColor(DefaultColor);
    setSecondaryColor(DefaultColor);
    setActiveStep(0);
  };

  return (
    <FlaskMakerContext.Provider
      value={{
        isPrimary,
        setPrimaryColor,
        primaryColor,
        setSecondaryColor,
        secondaryColor,
        setCapsuleColors,
        capsuleColors,
        setCoverColor,
        coverColor,
        setFlaskColor,
        flaskColor,
        setFlaskLabelColor,
        flaskLabelColor,
        setFlaskLogoPicture,
        flaskLogoPicture,
        setFlaskCoverPicture,
        flaskCoverPicture,
        setImagePreview,
        imagePreview,
        setActiveStep,
        activeStep,
        handleNext,
        handleBack,
        setFlaskTitle,
        flaskTitle,
        setFlaskTitleColor,
        flaskTitleColor,
        openModal,
        handleOpenModal,
        handleCloseModal,
        openSpecificationsModal,
        handleOpenSpecificationsModal,
        handleCloseSpecificationsModal,
        handleResetData,
      }}
    >
      {children}
    </FlaskMakerContext.Provider>
  );
};
