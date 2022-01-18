import { OrderProps } from 'components/orderBook/orderList/order/Order.tyes';

export const Order = ({
  rate,
  cryptocurrency,
  cryptocurrencyCount,
  currencyValue,
  currency,
  ordersCount,
}: OrderProps) => {
  return (
    <div className="flex justify-around">
      <span>{rate}</span>
      <span>{cryptocurrency}</span>
      <span>{cryptocurrencyCount}</span>
      <span>{currencyValue}</span>
      <span>{currency}</span>
      <span>{ordersCount}</span>
    </div>
  );
};
