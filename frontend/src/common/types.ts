import { MouseEventHandler } from 'react';

export type SvgProps = {
  className: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

export type InputType = 'text' | 'password' | 'email';

export type LoginUserResponse = {
  id: number;
  accessToken: string;
  username: string;
};
