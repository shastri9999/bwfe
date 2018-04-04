import * as React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  readonly className?: string;
}
const Button: React.SFC<ButtonProps> = ({ className = 'primary', ...rest }) => {
  return <button className={className} {...rest} />;
};

export default Button;
