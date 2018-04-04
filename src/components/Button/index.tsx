import * as React from 'react';

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  readonly className?: string;
}
const Button: React.SFC<IButtonProps> = ({
  className = 'primary',
  ...rest
}) => {
  return <button className={className} {...rest} />;
};

export default Button;
