/* eslint-disable react/display-name */
import { DetailedHTMLProps, forwardRef, ButtonHTMLAttributes } from 'react';

export const Button = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>(({ className, children, ...rest }, ref) => {
  return (
    <button
      className={`p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500 ${className}`}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
});
