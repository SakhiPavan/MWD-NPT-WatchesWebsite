import React, { useEffect, useState } from 'react'
import ProductGrid from '../components/Products/ProductGrid'; 
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsByFilters } from '../redux/slices/productSlice';
import { useParams } from 'react-router-dom';


const GraduationPackages = () => {
  const { collection } = useParams();
  const [ searchParams ] = useSearchParams();
  const dispatch = useDispatch();
  const {products, loading, error} = useSelector((state) => state.products);
  const queryParams = Object.fromEntries([...searchParams]);

  useEffect(() => {
    dispatch(fetchProductsByFilters({ collection, ...queryParams }));
  }, [dispatch, collection, searchParams]);
  
  
  return <div className='flex flex-col items-center justify-center text-center font-bold '>
    <h1 className='mb-4 mt-6 font-vold text-3xl'>Men's & Women's Store</h1>
    <p className='mb-4 mt-2 font-semibold'>
    Elevate your style with our men’s and women's watches—crafted for precision, built for strength, and designed to impress. Timeless elegance meets modern functionality in every detail.
    </p>
    <ProductGrid products={products} loading={loading} error={error}/>
  </div>
}

export default GraduationPackages