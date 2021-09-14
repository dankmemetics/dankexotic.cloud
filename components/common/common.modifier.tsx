import { CardStyles } from './common.card';
import { Meter } from './common.meter';

export function Modifier({ type = 'marketplace' }) {
  return (
    <CardStyles>
      <img src="/papers/raw.webp" />
      <div className="text">
        <h3>Raw Papers</h3>
        <div className="accent" />
        
        <div className="traits">                  
          <div className="trait potency">
            <p>THC Potency Increase 2%</p>
            <div className="meter-wrap">
              <Meter width={2} height={15} />
            </div>
          </div>

          <div className="trait potency">
            <p>CBD Potency Increase 1%</p>
            <div className="meter-wrap">
              <Meter width={1} height={15}/>
            </div>
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