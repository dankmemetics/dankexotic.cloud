import styled from 'styled-components';
import { FaEthereum } from 'react-icons/fa';
import { Primary, Myrcene } from '../brand/brand.colors';
import { Trait } from '../common/common.trait';
import { Meter } from '../common/common.meter';

export const ProfileTitleStyles = styled.div`
  padding: 30px 15px;

  h3 {
    font-size: 18px;
    font-weight: 300;
    padding: 15px 0;

    span {
      padding: 0 10px;
      font-weight: 600;
    }
  }

  h4 {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 300;
    padding: 15px 0 30px 0;

    img {
      height: 32px;
      margin: 0 15px;
    }
  }

  div.accent {
    width: 320px;
    border-bottom: 2px solid white;

    &.long {
      width: 640px;
    }
  }

  div.stats {
    display: flex;
    padding: 30px 0;

    div.stat-section {
      width: 50%;
    }

    div.trait {
      display: flex;
      align-items: center;
      font-size: 14px;
      padding: 0 0 15px 0;
    }

    div.trait-color {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 2px solid white;
      margin: 0 10px 0 0;

      &.myrcene {
        background: ${Myrcene};
      }
    }

    p {
      font-size: 14px;
      font-weight: bold;
      padding: 15px 0;
    }

    a {
      display: flex;
      align-items: center;
      color: ${Primary};
      font-size: 18px;
      font-weight: 700;
      text-decoration: none;
      cursor: pointer;

      .icon {
        margin: 0 5px;
      }
    }

    div.meter {
      width: 100%;
      height: 25px;
      border-radius: 12.5px;
      border: 3px solid white;
      overflow: hidden;

      div.meter-fill {
        background: ${Primary};
        height: 100%;
      }
    }
  }
`;

export function ProfileTitle() {
  return (
    <ProfileTitleStyles>
      <h3>
        0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B
        <span>
          has 69 dank nuggets
        </span>
      </h3>
      <h4>
        Estimated Profile Value
        <img src="/images/solana.svg"/>
        420,420.00
      </h4>

      <div className="accent"/>

      <div className="stats">
        <div className="stat-section">
          <p>Most Common Terpene</p>
          <Trait type="myrcene" label="Myrcene"/>

          <p>Most Valuable Nugget</p>
          <a>
            Granddaddy Purple Kush at <FaEthereum className="icon" /> 420
          </a>
        </div>

        <div className="stat-section">
          <p>Average THC Potency (69%)</p>
          <Meter width={69} height={25}/>

          <p>Average CBD Potency (6.9%)</p>
          <Meter width={6.9} height={25}/>
        </div>

      </div>

      <div className="accent long"/>
    </ProfileTitleStyles>
  )
}