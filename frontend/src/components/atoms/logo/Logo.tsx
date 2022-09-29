type LogoProps = {
  className: string;
  containerClassName?: string;
};

const Logo: React.FC<LogoProps> = ({ className, containerClassName }) => {
  return (
    <div
      className={
        containerClassName
          ? containerClassName + ' logo-container'
          : 'logo-container'
      }
    >
      <div className={className}></div>
    </div>
  );
};
export default Logo;
