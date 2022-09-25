import { ReactComponent as Award1 } from '../../../../assets/svgs/award1.svg';
import { ReactComponent as Award2 } from '../../../../assets/svgs/award2.svg';
import { ReactComponent as Award3 } from '../../../../assets/svgs/award3.svg';
import { ReactComponent as Award4 } from '../../../../assets/svgs/award4.svg';

import { SvgProps } from '../../../../common/types';

type AwardIconProps = {
  name: string;
};

export const AwardIcon: React.FC<AwardIconProps> = ({ name }): JSX.Element => {
  let award = <></>;
  if (name === 'award1') {
    award = <Award1 />;
  }
  if (name === 'award2') {
    award = <Award2 />;
  }

  if (name === 'award3') {
    award = <Award3 />;
  }
  if (name === 'award4') {
    award = <Award4 />;
  }

  return award;
};
