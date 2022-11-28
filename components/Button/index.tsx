import { HTMLAttributes } from "react";

export type ButtonType  = {
  label: string;
  type?: 'primary' | 'secondary' |'transparent';
} & HTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonType> = ({type='primary', label}) => {
  const className = `btn-${type}`

  return <button className={className}>{label}</button>
}