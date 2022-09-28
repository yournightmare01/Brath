type ButtonProps = {
  className: string;
  label: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  className,
  label,
  type,
  disabled,
}) => {
  return (
    <button
      type={type ? type : 'button'}
      className={className}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
export default Button;
