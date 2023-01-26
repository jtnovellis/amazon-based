import { Products } from '@/types';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { Button } from './common/Button';

interface ProductProps extends Products {}

function Product({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: ProductProps) {
  const [amountStars, _stars] = useState(
    Array.from({ length: Math.round(rating.rate) }, (_, i) => i + 1)
  );
  const [hasPrime, _prime] = useState(Math.random() < 0.5);

  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  const stars = amountStars.map((star) => (
    <StarIcon className='h-5 text-yellow-500' key={`start-${star}`} />
  ));

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>
        {category}
      </p>
      <Image
        src={image}
        height={200}
        width={200}
        alt={title}
        objectFit='contain'
        className='self-center'
      />
      <h4 className='my-3'>{title}</h4>
      <div className='flex'>{stars}</div>
      <p className='text-xs my-2 line-clamp-2'>{description}</p>
      <div className='mb-5'>{currency}</div>
      {hasPrime && (
        <div className='flex items-center gap-2 -mt-5'>
          <Image
            src='https://links.papareact.com/fdw'
            alt='prime'
            width={40}
            height={10}
          />
          <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
        </div>
      )}
      <Button className='mt-auto'>Add to Basket</Button>
    </div>
  );
}

export default Product;
