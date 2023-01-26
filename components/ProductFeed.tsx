import { Products } from '@/types';
import Product from './Product';

interface ProductFeedProps {
  products: Products[];
}

function ProductFeed({ products }: ProductFeedProps) {
  const firstProducts = products.slice(0, 4).map((product) => {
    return <Product key={product.id} {...product} />;
  });

  const relevantProducts = products.slice(4, 5).map((product) => {
    return <Product key={product.id} {...product} />;
  });

  const restProducts = products.slice(5, products.length).map((product) => {
    return <Product key={product.id} {...product} />;
  });
  return (
    <section className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
      {firstProducts}
      <img
        className='md:col-span-full'
        src='https://links.papareact.com/dyz'
        alt='advertisment'
      />
      <div className='md:col-span-2'>{relevantProducts}</div>
      {restProducts}
    </section>
  );
}

export default ProductFeed;
