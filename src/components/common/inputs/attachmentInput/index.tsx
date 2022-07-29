import { useState } from 'react';
import { Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Swal from 'sweetalert2';

import { Text } from '@components/common/text';
import { BlackImageStyled, FileNameBox } from './styles';

type AttachmentInputProps = {
  setFieldValue: any;
  formik_file_name: string;
  defaultValue?: string;
  errors?: any;
  url?: string | undefined;
};

export const AttachmentInput = ({
  setFieldValue,
  formik_file_name,
  defaultValue,
  errors,
  url,
}: AttachmentInputProps) => {
  const [attachmentFileName, setAttachmentFileName] = useState<
    string | undefined
  >(defaultValue ? defaultValue.substring(0, 25) + '...' : undefined);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [urlAttachment, setUrlAttachment] = useState<string | undefined>(url);

  const theme = useTheme();
  const isMobileVersion = useMediaQuery(theme.breakpoints.down('sm'));

  // const handleDownload = (url: string | undefined) => {
  //   if (url) {
  //     window.open(url);
  //   }
  // };

  return (
    <label
      htmlFor={`file-to-upload-${formik_file_name}`}
      style={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      <input
        accept="image/*"
        id={`file-to-upload-${formik_file_name}`}
        multiple
        type="file"
        style={{ display: 'none' }}
        onChange={({ target }) => {
          if (target.files) {
            setAttachmentFileName(
              target?.files[0]?.name.substring(0, 25) + '...'
            );
            Swal.fire({
              icon: 'success',
              title: 'Sucesso',
              text: 'Arquivo anexado com sucesso!',
              showConfirmButton: false,
              timer: 1500,
            });
            setFieldValue(formik_file_name, target.files[0]);
            setUrlAttachment('');
          }
        }}
      />

      <Button
        variant="outlined"
        startIcon={<img src="/img/svg/attach-icon.svg" />}
        fullWidth={isMobileVersion ? true : false}
        sx={{
          color: '#1A1A1A',
          borderColor: '#1A1A1A',
          '&:hover': { borderColor: '#8D8D8D' },
        }}
        component="span"
      >
        ADICIONAR IMAGEM
      </Button>

      <Text type="body2" secondary>
        {attachmentFileName ? (
          <FileNameBox>
            <BlackImageStyled />
            {attachmentFileName}
          </FileNameBox>
        ) : (
          errors || 'Arquivo não selecionado'
        )}
      </Text>
    </label>
  );
};
