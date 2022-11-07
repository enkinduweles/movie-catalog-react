import { Icon } from './Icon';

import '../styles/button.scss';
import { ButtonHTMLAttributes, memo } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selected: boolean;
  idBtn: number;
  onClickButton: (id: number) => void
}

 function ButtonMemoized({ iconName, title, selected, onClickButton, idBtn, ...rest }: ButtonProps) {
  
  return (
    <button type="button" {...(selected && { className: 'selected' })} onClick={() => onClickButton(idBtn)} {...rest}>
      <Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} />
      {title}
    </button>
  );
}

export const Button = memo(ButtonMemoized);