import { OrderListProps } from 'components/orderBook/orderList/OrderList.types';
import { Order } from 'components/orderBook/orderList/order/Order';

export const OrderList = ({ title, items, className }: OrderListProps) => {
  return (
    <div className={className}>
      <h4 className="my-2">{title}</h4>
      {items.length > 0 && (
        <div>
          {items.map((item) => (
            <Order
              key={item}
              cryptocurrency="BTC"
              cryptocurrencyCount={100}
              currency="PLN"
              currencyValue={4}
              ordersCount={1234}
              rate={4}
            />
          ))}
        </div>
      )}
    </div>
  );
};
