import { Dispatch, SetStateAction, useState } from 'react';
import { IconButton } from '@mui/material';

import {
  DeleteOutlinedStyled,
  IconButtonStyled,
  ImageContent,
  ImagePreview,
  ImageStyled,
  Input,
} from './styles';

type PanelImageInputProps = {
  name?: string;
  // image_url?: string | undefined;
  setFlaskCoverPicture?: Dispatch<SetStateAction<string>>;
  flaskCoverPicture?: string;
  setFlaskLogoPicture?: Dispatch<SetStateAction<string>>;
  flaskLogoPicture?: string;
};

export const PanelImageInput = ({
  name,
  // image_url,
  setFlaskCoverPicture,
  // flaskCoverPicture,
  setFlaskLogoPicture,
}: // flaskLogoPicture,
PanelImageInputProps) => {
  const [coverPicture, setCoverPicture] = useState<{
    file?: File;
    url?: string;
  }>();

  const imageType = ['image/png', 'image/jpeg', 'image/jpg'];

  return (
    <ImageContent>
      {coverPicture?.url ? (
        <>
          <ImagePreview
            key={name}
            alt={coverPicture?.file?.name}
            src={`${coverPicture?.url || undefined}`}
          />
          <div style={{ position: 'absolute' }}>
            <label htmlFor={`cover-${name}`}>
              <Input
                accept=".png, .jpeg, .jpg"
                id={`cover-${name}`}
                multiple
                type="file"
                onChange={({ target }) => {
                  if (
                    target.files &&
                    target.files?.length &&
                    imageType.includes(target.files[0]?.type)
                  ) {
                    setCoverPicture({
                      file: target?.files[0],
                      url: URL.createObjectURL(target?.files[0]),
                    });
                    if (name === 'logo-image') {
                      setFlaskLogoPicture &&
                        setFlaskLogoPicture(
                          URL.createObjectURL(target?.files[0])
                        );
                    }
                    if (name === 'background-image') {
                      setFlaskCoverPicture &&
                        setFlaskCoverPicture(
                          URL.createObjectURL(target?.files[0])
                        );
                    }
                  }
                }}
              />
            </label>
            <IconButtonStyled
              aria-label="delete picture"
              type="button"
              onClick={() => {
                setCoverPicture({ file: undefined, url: '' });
                if (name === 'logo-image') {
                  setFlaskLogoPicture && setFlaskLogoPicture('');
                  return;
                }
                if (name === 'background-image') {
                  setFlaskCoverPicture && setFlaskCoverPicture('');
                  return;
                }
              }}
            >
              <DeleteOutlinedStyled />
            </IconButtonStyled>
          </div>
        </>
      ) : (
        <>
          <label htmlFor={`cover-image-${name}`}>
            <Input
              accept=".png, .jpeg, .jpg"
              id={`cover-image-${name}`}
              multiple
              type="file"
              onChange={({ target }) => {
                if (
                  target.files &&
                  target.files?.length &&
                  imageType.includes(target.files[0]?.type)
                ) {
                  setCoverPicture({
                    file: target?.files[0],
                    url: URL.createObjectURL(target?.files[0]),
                  });
                  if (name === 'logo-image') {
                    setFlaskLogoPicture &&
                      setFlaskLogoPicture(
                        URL.createObjectURL(target?.files[0])
                      );
                  }
                  if (name === 'background-image') {
                    setFlaskCoverPicture &&
                      setFlaskCoverPicture(
                        URL.createObjectURL(target?.files[0])
                      );
                  }
                }
              }}
            />
            <IconButton
              component="span"
              sx={{
                margin: '1.5rem 0rem',
                width: '202px',
                height: '127px',
                borderRadius: 0,
              }}
            >
              <ImageStyled />
            </IconButton>
          </label>
        </>
      )}
    </ImageContent>
  );
};
