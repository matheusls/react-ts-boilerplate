import { ReactNode } from 'react';

import { MainStyled } from './main.styles';

type Props = {
  children: ReactNode;
};

const Main = ({ children }: Props) => <MainStyled>{children}</MainStyled>;

export default Main;
