import React from 'react';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.memo((props: Props) => {
    const {
      ...childs
    } = props
  
    return (
      <button {...childs} />
    );
})

export default Button;