import CheckoutProduct from '@/components/CheckoutProduct';
import { Button } from '@/components/common/Button';
import { useAppSelector } from '@/hooks/redux';
import { selectItems } from '@/slices/cartSlice';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

function Checkout() {
  const items = useAppSelector(selectItems);
  const { data } = useSession();

  const totalPrice = items.map((item) => item.price).reduce((a, b) => a + b, 0);

  const products = items.map((item) => (
    <CheckoutProduct key={item.id} {...item} />
  ));

  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(totalPrice);

  return (
    <section className='lg:flex max-w-screen-2xl mx-auto'>
      <div className='flex-grow m-5 shadow-sm'>
        <Image
          src='https://links.papareact.com/ikj'
          width={1020}
          height={250}
          alt='ad'
          className='object-contain'
        />
        <div className='flex flex-col p-5 gap-y-10'>
          <h1 className='text-3xl border-b pb-4'>
            {items.length > 0
              ? 'Shopping Basket'
              : 'Your Amazon Basket is Empty'}
          </h1>
          {products}
        </div>
      </div>
      <div className='flex flex-col bg-white p-10 shadow-md sticky'>
        {items.length > 0 && (
          <>
            <h2 className='whitespace-nowrap'>
              Subtotal ({items.length}) items:
              <span className='font-bold'>{currency}</span>
            </h2>

            <Button className='mt-3' disabled={!data}>
              {!data ? 'Sign In to Checkout' : 'Checkout'}
            </Button>
          </>
        )}
      </div>
    </section>
  );
}

export default Checkout;
