import { ReactComponent as TwitterIcon } from '../../../assets/svgs/twitter.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/svgs/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/svgs/instagram.svg';
import { ReactComponent as YoutubeIcon } from '../../../assets/svgs/youtube.svg';

type SocialMediaIconProps = {
  name: 'twitter' | 'instagram' | 'facebook' | 'youtube';
  className: string;
};

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
  name,
  className,
}) => {
  let icon = <></>;

  if (name === 'twitter') {
    icon = <TwitterIcon className={className} />;
  }
  if (name === 'facebook') {
    icon = <FacebookIcon className={className} />;
  }
  if (name === 'instagram') {
    icon = <InstagramIcon className={className} />;
  }
  if (name === 'youtube') {
    icon = <YoutubeIcon className={className} />;
  }

  return icon;
};
export default SocialMediaIcon;
