import audio from '@/config/products.json';
const { products } = audio;

export const filterProducts = (id) => {
  return products.filter((item) => item.category === id);
};
export const filterPopularProducts = () => {
  return products.filter((item) => item.popular === true);
};
