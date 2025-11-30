"use client";
import { useEffect } from 'react';
import { useGlobalState } from '@app/client/data/globalState';

export const DataProvider = ({ products, categories }) => {
  const setProducts = useGlobalState((state) => state.setProducts);
  const setCatagories = useGlobalState((state) => state.setCatagories);
  
  useEffect(() => {
    setProducts(products);
    setCatagories(categories);
  }, [products, categories, setProducts, setCatagories]);

  return null;
};


