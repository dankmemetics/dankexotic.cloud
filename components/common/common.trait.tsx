import styled from 'styled-components';
import { Myrcene, Limonene, Linalool } from '../brand/brand.colors';

export const TraitStyles = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin: 0 15px 0 0;

  div.trait-color {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid white;
    margin: 0 10px 0 0;

    &.myrcene {
      background: ${Myrcene};
    }
    &.limonene {
      background: ${Limonene};
    }
    &.linalool {
      background: ${Linalool};
    }
  }
`;

export function Trait({ type, label }) {
  return (
    <TraitStyles>
      <div className={`trait-color ${type}`}></div>
      {label}
    </TraitStyles>
  )
}