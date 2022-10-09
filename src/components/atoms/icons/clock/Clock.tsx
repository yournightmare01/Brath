import { ReactComponent as ClockIcon } from '../../../../assets/svgs/clock.svg';
import { SvgProps } from '../../../../common/types';

const Clock: React.FC<SvgProps> = ({ className }) => {
  return <ClockIcon className={className} />;
};
export default Clock;
