import * as React from 'react';
import { Header } from '../components/Header/Header';

export interface IHomeProps {
}

export function Home (props: IHomeProps) {
  return (
    <div>
      <Header />
    </div>
  );
}
