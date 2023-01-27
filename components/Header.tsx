import Image from 'next/image';
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';
import { signIn, signOut, useSession } from 'next-auth/react';

function Header() {
  const { data } = useSession();

  function handleSign() {
    data ? signOut() : signIn();
  }

  return (
    <header>
      <div className='flex items-center bg-amazon_blue px-6 flex-grow py-2 gap-6'>
        <div className='mt-2 flex flex-grow items-center sm:flex-grow-0'>
          <Image
            src='https://links.papareact.com/f90'
            alt='logo image'
            width={150}
            height={40}
            className='object-contain cursor-pointer'
          />
        </div>
        <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
          <input
            type='text'
            className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4'
          />
          <MagnifyingGlassIcon className='h-12 p-4' />
        </div>
        <div className='text-white flex items-center text-xs space-x-6 whitespace-nowrap'>
          <div onClick={handleSign} className='link'>
            <p className='hover:unerline'>
              {data ? `Hello, ${data.user?.name}` : 'Sign In'}
            </p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>
          <div className='relative link flex items-center'>
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold'>
              0
            </span>
            <ShoppingCartIcon className='h-10' />
            <p className='hidden md:inline font-extrabold md:text-sm mt-2'>
              Basket
            </p>
          </div>
        </div>
      </div>
      <div className='flex items-center bg-amazon_blue-light text-white text-sm gap-3 p-2 pl-6'>
        <p className='link flex items-center'>
          <span>
            <Bars3Icon className='h-6 mr-1' />
          </span>
          All
        </p>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>{"Today's Deals"}</p>
        <p className='link hidden lg:inline-flex'>Electronics</p>
        <p className='link hidden lg:inline-flex'>Food & Grocery</p>
        <p className='link hidden lg:inline-flex'>Prime</p>
        <p className='link hidden lg:inline-flex'>Buy again</p>
        <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
        <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
