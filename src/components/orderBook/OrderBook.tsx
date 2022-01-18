import { Header } from './header/Header';
import { OrderList } from 'components/orderBook/orderList/OrderList';

export const OrderBook = () => (
  <div className="w-full">
    <Header />
    <div className="grid grid-cols-2 divide-x-2 divide-black">
      <OrderList title="Bid" items={['1', '2', '3']} />
      <OrderList title="Ask" items={['1', '2', '3']} />
    </div>
  </div>
);
