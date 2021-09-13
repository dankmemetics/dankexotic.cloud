import styled from 'styled-components';
import { Primary2 } from '../brand/brand.colors';

export const TradeTabsStyles = styled.div`
  padding: 15px 15px 30px 15px;
  display: flex;
  justify-content: center;

  a.tab {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${Primary2};
    width: 180px;
    height: 50px;
    font-size: 18px;
    font-weight: 600;
    margin: 0 30px 0 0;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.25);
    opacity: 0.5;

    &.active {
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
      opacity: 1;
    }
  }
`;

export function TradeTabs() {
  return (
    <TradeTabsStyles>
      <a className="tab">
        Community
      </a>
      <a className="tab active">
        Dank Supply
      </a>
      <a className="tab">
        Dank Dailys
      </a>
    </TradeTabsStyles>
  )
}