import * as React from 'react';
import styled from 'styled-components';
import { HomeIcon, SettingsIcon, VoucherIcon, WalletIcon } from '../../icons';

const Wrapper = styled.nav`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  height: 70px;

  > span {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    div.icon {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
export interface IMainNavProps {}

export function MainNav(props: IMainNavProps) {
  return (
    <Wrapper>
      <span>
        <HomeIcon /> <span>Home</span>
      </span>
      <span>
        <VoucherIcon /> <span>Voucher</span>
      </span>
      <span>
        <WalletIcon /> <span>Wallet</span>
      </span>
      <span>
        <SettingsIcon /> <span>Settings</span>
      </span>
    </Wrapper>
  );
}
