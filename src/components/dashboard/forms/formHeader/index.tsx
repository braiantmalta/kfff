import { MouseEventHandler } from 'react';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

import { Wrapper } from '@components/common/htmlTags';
import { Text } from '@components/common/text';
import { TopBar } from './styles';

type FormHeaderProps = {
  headerText?: string;
  onCloseClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

export const FormHeader = ({ headerText, onCloseClick }: FormHeaderProps) => {
  return (
    <Wrapper>
      <TopBar>
        <Text type="h6">{headerText}</Text>
        <IconButton onClick={onCloseClick}>
          <Close sx={{ color: '#1C1B1F' }} />
        </IconButton>
      </TopBar>
    </Wrapper>
  );
};
