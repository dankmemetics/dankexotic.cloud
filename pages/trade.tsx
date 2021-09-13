import { PageContainer } from "../components/brand/brand.app";
import { Header } from '../components/common/common.header';
import { TradeSearch } from '../components/trade/trade.search';
import { TradeTabs } from '../components/trade/trade.tabs';
import { TradeList } from '../components/trade/trade.list';

export function Trade() {
  return (
    <>
      <Header tab="trade"/>
      <PageContainer>
        <TradeSearch/>
        <TradeTabs/>
        <TradeList/>
      </PageContainer>
    </>
  )
}

export default Trade;