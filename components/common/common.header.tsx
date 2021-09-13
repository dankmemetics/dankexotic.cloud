import Link from 'next/link';
import styled from 'styled-components';
import { FaRegAddressCard, FaJoint } from 'react-icons/fa';
import { BiStoreAlt } from 'react-icons/bi';
import { GiDiceFire } from 'react-icons/gi';
import { Gradient2 } from '../brand/brand.gradients';

export const HeaderStyles = styled.div`
  background: ${Gradient2};
  width: 100%;
  height: 70px;

  div.wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 1200px;
    margin: auto;
    height: 100%;
    padding: 0 15px;

    a.brand {
      display: flex;
      align-items: center;
      color: white;

      text-decoration: none;
      font-size: 32px;
      letter-spacing: 1px;

      h2 {
        font-size: 32px;
        font-weight: 400;
        padding: 2.5px 15px 0 15px;
      }
    }


    div.hitems {
      display: flex;
      height: 100%;

      a.item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 15px;
        height: 100%;
        color: white;
        font-size: 18px;
        cursor: pointer;
        text-decoration: none;

        .icon {
          margin: 0 10px 0 0;
        }

        border-bottom: 5px solid transparent;

        &:hover {
          border-bottom: 5px solid rgba(255, 255, 255, 0.5);
        }

        &.active {
          border-bottom: 5px solid white;
        }
      }
    }
  }
`;

export function Header({ tab }) {
  return (
    <HeaderStyles>
      <div className="wrap">
        <Link href="/">
          <a className="brand">
            <FaJoint/>
            <h2>Dank Exotics</h2>
          </a>
        </Link>
        
        <div className="hitems">
          <Link href="/profile">
            <a className={`item ${tab === 'profile' ? 'active' : ''}`}>
              <FaRegAddressCard className="icon"/>
              Profile
            </a>
          </Link>
          <Link href="/toke">
            <a className={`item ${tab === 'toke' ? 'active' : ''}`}>
              <GiDiceFire className="icon"/>
              Toke
            </a>
          </Link>
          <Link href="/trade">
            <a className={`item ${tab === 'trade' ? 'active' : ''}`}>
              <BiStoreAlt className="icon" />
              Trade
            </a>
          </Link>
        </div>        
      </div>
    </HeaderStyles>
  )
}