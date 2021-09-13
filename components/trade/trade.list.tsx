import styled from 'styled-components';
import { Nugget } from '../common/common.nugget';
import { Modifier } from '../common/common.modifier';

export const TradeListStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px 15px 120px 15px;
`;

export function TradeList() {
  return (
    <TradeListStyles>
      <Nugget />
      <Modifier />
    </TradeListStyles>
  )
}