import Banner from '@/components/Banner';
import ProductFeed from '@/components/ProductFeed';
import { getProducts } from '@/lib/getProducts';
import { Products } from '@/types';
import { GetServerSideProps } from 'next';

interface HomePageProps {
  products: Products[];
}

export default function Home({ products }: HomePageProps) {
  return (
    <>
      <Banner />
      <ProductFeed products={products} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await getProducts();
  return {
    props: {
      products,
    },
  };
};
