import React, { ReactElement } from 'react';

import { CardWrapper } from './styles';

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps): ReactElement {
  return <CardWrapper>{children}</CardWrapper>;
}
