import type { MoneyV2 } from '@shopify/hydrogen-react/storefront-api-types';

const Price = ({ amount, currencyCode = 'USD', ...props }: MoneyV2 & React.ComponentProps<'p'>) => (
  <p suppressHydrationWarning={true} {...props}>
    {`${new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: `${currencyCode}`,
      currencyDisplay: 'narrowSymbol'
    }).format(parseFloat(amount))} ${currencyCode}`}
  </p>
);

export default Price;
