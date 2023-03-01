import * as React from 'react';
import './Header.scss';
import { SearchIcon, CartIcon, InboxIcon } from '../../icons';
export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  return (
    <div className="wrapper">
      <div className="search">
        <SearchIcon variant='muted' className='opacity-50'/>
        <input type="text" placeholder="Search.." />
      </div>
      <div className="relative">
        <CartIcon className="mx-2"/>
        <div className="badge">1</div>
      </div>
      <div className="relative">
        <InboxIcon className="mx-2"/>
        <div className="badge">9+</div>
      </div>
    </div>
  );
}
