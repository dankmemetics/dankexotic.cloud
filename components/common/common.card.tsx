import styled from 'styled-components';
import { Background, Primary, Primary3, Myrcene } from '../brand/brand.colors';

export const CardStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${Background};
  width: 320px;
  height: 420px;
  overflow: hidden;
  border-radius: 5px;
  padding: 10px;
  margin: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);

  img {
    margin: 5px auto 15px auto;
    width: 150px;
    border-radius: 50%;
  }

  div.text {
    background: ${Background};
    width: 100%;

    h3 {
      font-size: 16px;
      padding: 0 10px 5px 10px;
    }

    div.accent {
      width: 120px;
      height: 2px;
      background: white;
      margin: 0 10px 10px 10px;
    }

    div.traits {
      display: flex;
      flex-wrap: wrap;
    }

    div.trait {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 5px 10px;
      font-size: 14px;

      b {
        padding: 0 10px;
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

      &.marker {
        align-items: center;
        justify-content: flex-start;

        div.meter-wrap {
          width: calc(100% - 90px);
        }

        p {
          font-weight: bold;
          width: 90px;
          padding: 0 10px 0 0;
        }
      }

      &.rarity {
        justify-content: center;
        padding: 10px 0;

        font-size: 16px;
        font-weight: bold;
      }

      &.potency {
        flex-direction: column;
        align-items: flex-start;
        
        p {
          font-weight: bold;
          padding: 0 0 10px 0;
        }

        div.meter-wrap {
          width: 100%;
        }
      }
    }

    div.purchase {
      position: absolute;
      left: 0;
      bottom: 0;

      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 15px;
      width: 100%;

      font-size: 14px;

      &.toke {
        justify-content: center;

        a.button {
          margin: 0 10px;
        }
      }

      img {
        width: auto;
        margin: 0 10px 0 0;
        border-radius: 0px;
        height: 18px;
      }

      p {
        display: flex;
        align-items: center;
        padding: 0 15px;
        font-weight: bold;
      }

      a.button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        padding: 0 15px;
        height: 30px;
        border-radius: 5px;
        background: ${Primary3};
        font-weight: bold;
        opacity: 0.75;
        cursor: pointer;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        &:hover {
          opacity: 1;
        }
      }
    }

  }
`;