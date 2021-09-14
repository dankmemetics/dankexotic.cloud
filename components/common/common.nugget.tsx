import { CardStyles } from './common.card';
import { Trait } from './common.trait';
import { Meter } from './common.meter';

export function Nugget({ type = 'marketplace' }) {
  return (
    <CardStyles>
      <img src="/exotics/granddaddy-purple.webp" />
      <div className="text">
        <h3>Granddaddy Purple Kush</h3>
        <div className="accent" />
        
        <div className="traits">
          <div className="trait label">
            <Trait type="myrcene" label="Myrcene"/>
          </div>
          
          <div className="trait marker">
            <p>THC 17%</p>
            <div className="meter-wrap">
              <Meter width={17} height={15} />
            </div>
          </div>

          <div className="trait marker">
            <p>CBD 2%</p>
            <div className="meter-wrap">
              <Meter width={2} height={15}/>
            </div>
          </div>

          <div className="trait rarity">
            #1 of 100,000
          </div>

          {
            type === 'marketplace' ?
            <div className="purchase">
                <p className="price">
                  <img src="/images/solana.svg"/>
                  0.01
                </p>
                
                <a className="button">
                  Buy
                </a>
            </div> : ''
          }

          {
            type === 'toke' ?
            <div className="purchase toke">

                <a className="button">
                  Add Slot #1
                </a>
                <a className="button">
                  Add Slot #2
                </a>

            </div> : ''
          }

        </div>

      </div>
    </CardStyles>
  )
}