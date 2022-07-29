import { ReactNode } from 'react';
import { AuthProvider } from './authentication';
import { CustomerProvider } from './customer';
// import { CustomerStepperProvider } from './customerStepper';
import { FlaskMakerContextProvider } from './flaskMaker';
import { PermissionProvider } from './permission';
// import { SidebarAndModalProvider } from './sidebarAndModal';
import { DarkModeProvider } from './theme';

type globalContextProps = {
  children: ReactNode;
};

export const ContextApiProviders = ({ children }: globalContextProps) => {
  return (
    <AuthProvider>
      <PermissionProvider>
        <CustomerProvider>
          <FlaskMakerContextProvider>
            {/* <CustomerStepperProvider> */}
            <DarkModeProvider>
              {/* <SidebarAndModalProvider> */}
              {children}
              {/* </SidebarAndModalProvider> */}
            </DarkModeProvider>
            {/* </CustomerStepperProvider> */}
          </FlaskMakerContextProvider>
        </CustomerProvider>
      </PermissionProvider>
    </AuthProvider>
  );
};
