"use client";

type DButtonProps = {
  type?: "submit" | "reset" | "button";
  fullwidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
};

const DButton = ({
  type,
  children,
  onClick,
  disabled,
  className,
}: DButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={className}>
      {children}
    </button>
  );
};

export default DButton;
