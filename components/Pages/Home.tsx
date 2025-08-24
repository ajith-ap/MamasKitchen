"use client"
import React, { useEffect, useState } from 'react'
import { FoodItem } from '@/app/types/FoodItem';
import Image from 'next/image'
import Gallary from './Gallary';
import { MdOutlineExpandMore, MdExpandLess } from "react-icons/md";

interface Category {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
}

// Define the structure of the full API response
interface CategoriesResponse {
    categories: Category[];
}

const HomeScreen: React.FC = () => {

    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isall, setIsall] = useState<boolean>(true);

    const displayedCategories = isall ? categories.slice(0, 9) : categories;

    const handleclick = () => {
        setIsall(!isall)
    }


    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php', {
                    method: 'GET',
                    //   headers: {
                    //     'Content-Type': 'application/json',
                    //     Accept: 'application/json',
                    //   },
                });
                const data = await response.json();
               

                setCategories(data?.categories);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className='flex flex-col justify-center w-full items-center mb-10'>
            <div className='flex bg-amber-500 relative w-screen h-screen'>
                <Image
                    src="/images/homeicon.jpg"
                    alt="HomeIcon"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
                    <span className="font-bold text-[46px] text-white">Healthy Food Recipes</span>
                    <span className="text-[16px] text-white mt-2 italic">
                        " Whether you're a seasoned chef or just learning to boil water, our recipes are crafted
                        to guide you through delicious meals made with love, ease, and real ingredients. "
                    </span>
                </div>
            </div>
            <span className="relative m-8 font-bold font text-[34px] cursor-pointer text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FF7518] after:transition-all after:duration-300 hover:after:w-full">
                Taste Of Food
            </span>
            <div className='flex flex-wrap justify-center w-full items-center'>
                {
                    displayedCategories.map((item: any) => {

                        return (
                            <div key={item.idCategory} className='group w-100 h-30 text-black hover:bg-[#FF7518] hover:text-white m-3 flex flex-row justify-center items-center rounded-[.5vw] cursor-pointer'>

                                <div className='w-25'>
                                    <Image
                                        src={item?.strCategoryThumb || null}
                                        alt="Food Item"
                                        width={100}
                                        height={100}
                                        className="object-cover" />
                                </div>
                                <div className='w-75 flex flex-col ml-1'>
                                    <span className=' font-bold font text-[16px] group-hover:text-white'>{item?.strCategory}</span>
                                    <span className='text-[#A9A9A9] font text-[12px] group-hover:text-white'>
                                        {item?.strCategoryDescription
                                            ?.split(' ')
                                            .slice(0, 20)
                                            .join(' ') + '...'}
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-100 flex justify-center items-center'>
                <button className='w-40 h-12 bg-[#FF7518] mt-6 text-white rounded-[1.5vw] cursor-pointer flex text-center justify-center items-center'
                    onClick={handleclick}>{isall ? (<>More <MdOutlineExpandMore size={20} /></>) : (<>Less <MdExpandLess size={20} /></>)}</button>
            </div>
            <Gallary />
        </div>
    )
}

export default HomeScreen
