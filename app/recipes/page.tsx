"use client"
import Head from '@/components/Header/Head';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Page = () => {

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [searchitem, setSearchitem] = useState('');
    const [searchquery, setSearchquery] = useState('');
    const [searchempty, setSearchempty] = useState('')

    const handleChange = (e: any) => {
        setSearchitem(e.target.value);
    }
    const fetchRecipes = async (query: string) => {
        setLoading(true);
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
            setSearchquery(query);
            const data = await response.json();
            setRecipes(data?.meals || []);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecipes('');
    }, []);

    const fetchRecipesdet = () => {
        fetchRecipes(searchitem);
    };

    if (loading) return <p>Loading...</p>;

    return (
        <>
       <Head/>
        <div className='flex flex-col justify-center  mt-22 w-full items-center mb-10'>
            
            <div className='flex flex-wrap mt-6 pb-12'>
                <input placeholder='Search Your Favourite Recipes'
                 className='w-120 h-10 border-2 border-[#FF7518] bg-white rounded-2xl text-[14px] px-2 text-gray-400 placeholder:italic placeholder:text-[12px] placeholder:text-gray-400'
                    onChange={handleChange} />
                <button className='w-30 h-10 bg-[#FF7518] text-white rounded-[1.5vw] cursor-pointer ml-3' onClick={fetchRecipesdet}>Search</button>
            </div>
            <span className='font font-medium text-[18px] capitalize'>{searchquery}</span>

            <div className='flex flex-wrap justify-center w-full items-center'>
                {
                    recipes.map((item: any) => {

                        return (
                            <div key={item.idMeal} className='group w-150 h-56 text-black hover:bg-[#FF7518] hover:text-white m-3 flex flex-row justify-center items-center rounded-[.5vw] cursor-pointer'>

                                <div className='w-55 rounded-[.5vw] overflow-hidden'>
                                    { item?.strMealThumb &&
                                    <Image
                                        src={item?.strMealThumb}
                                        alt={item?.strMeal}
                                        width={100}
                                        height={100}
                                        className="object-cover w-full h-full" />
                                    }
                                </div>
                                <Link className='w-105 flex flex-col ml-2'  href={`/recipes-details/${item?.strMeal}`}>
                                    <span className=' font-bold font text-[16px] group-hover:text-white'>{item?.strMeal}</span>
                                    <span className='text-[#A9A9A9] font text-[12px] group-hover:text-white'>
                                        {item?.strInstructions
                                            ?.split(' ')
                                            .slice(0, 100)
                                            .join(' ') + '...'}
                                    </span>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>

        </div>
         </>
    )
}

export default Page