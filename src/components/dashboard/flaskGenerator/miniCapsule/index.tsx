import { MiniCapsuleBackground } from './background';
import { MiniCapsuleColorLayer } from './colorLayer';

type MiniCapsuleProps = {
  primaryColor: string;
  secondaryColor: string;
  isMobileVersion?: boolean;
};

export const MiniCapsule = ({
  primaryColor,
  secondaryColor,
  isMobileVersion,
}: MiniCapsuleProps) => {
  return (
    <>
      <MiniCapsuleBackground
        style={{
          position: 'relative',
          right: isMobileVersion ? '1132px' : '932px',
          top: isMobileVersion ? '274px' : '209px',
          width: 'fit-content',
        }}
      />

      <MiniCapsuleColorLayer
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        style={{
          position: 'relative',
          right: isMobileVersion ? '1318px' : '1118px',
          top: isMobileVersion ? '275px' : '209px',
          width: 'fit-content',
        }}
      />
    </>
  );
};
