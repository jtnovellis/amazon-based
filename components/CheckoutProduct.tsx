import { CartProduct, removeFromCart } from '@/slices/cartSlice';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Button } from './common/Button';
import { useAppDispatch } from '@/hooks/redux';

interface CheckoutProductProps extends CartProduct {}

function CheckoutProduct({
  id,
  title,
  price,
  description,
  image,
  rating,
  hasPrime,
}: CheckoutProductProps) {
  const dispatch = useAppDispatch();
  const [amountStars, _stars] = useState(
    Array.from({ length: Math.round(rating.rate) }, (_, i) => i + 1)
  );

  const stars = amountStars.map((star) => (
    <StarIcon className='h-5 text-yellow-500' key={`start-${star}`} />
  ));

  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  function removeFromBasket() {
    dispatch(removeFromCart(id));
  }

  return (
    <div className='grid grid-cols-5 bg-white p-4'>
      <Image src={image} width={200} height={200} alt={title} />
      <div className='col-span-3 mx-5'>
        <p>{title}</p>
        <div className='flex'>{stars}</div>
        <p className='text-xs my-2 line-clamp-3'>{description}</p>
        <p>{currency}</p>
        {hasPrime && (
          <div className='flex items-center gap-2 mt-5'>
            <Image
              src='https://links.papareact.com/fdw'
              alt='prime'
              width={40}
              height={10}
            />
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className='flex flex-col gap-y-2 my-auto justify-self-end'>
        <Button onClick={removeFromBasket} className='mt-auto'>
          Remove From Basket
        </Button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
