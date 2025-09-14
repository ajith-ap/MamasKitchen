"use client"
import Head from '@/components/Header/Head';
import Image from 'next/image'
import React, { useEffect, useState } from 'react';

// interface Receipes {
//     strMeal: string;
//     strInstructions: string;
//     strArea: string;
//     idMeal: string;
// }

// interface PageProps {
//   params: any;
// }
interface Params {
  name: string;
}


const Page = ({ params }: { params: Promise<Params> }) => {
    // const  strMeal  = params.name;
    const { name: strMeal } = React.use(params);
    const [recipes, setRecipes] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    // const [searchitem, setSearchitem] = useState('');

    // const handleChange = (e: any) => {
    //     setSearchitem(e.target.value);
    // }
    const fetchRecipes = async (query: string) => {
        setLoading(true);
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`);

            const data = await response.json();
            setRecipes(data?.meals[0] || []);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecipes('');
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <>
        <Head/>
        <div className='flex flex-col justify-center mt-20 w-full items-center mb-10'>
            <h1 className='font-bold font text-[32px] text-black'>{recipes?.strMeal}</h1>
            <span className='text-[#A9A9A9] font text-[16px]'>{recipes?.strArea} | {recipes?.strCategory}</span>
            <div className=' text-black m-3 flex flex-wrap justify-center'>

                <div className='w-125 rounded-[.5vw] overflow-hidden'>
                    {recipes?.strMealThumb && 
                    <Image
                        src={recipes?.strMealThumb }
                        alt="Food Item"
                        width={150}
                        height={100}
                        className="object-cover w-full h-full" />
                    }
                </div>
                <div className=' flex flex-col ml-2'>
                    <span className=' font-bold font text-[16px] mb-3'>Main Ingredients</span>
                    <li className='text-[#A9A9A9] mb-1 font text-[14px]'>{recipes?.strIngredient1}</li>
                    <li className='text-[#A9A9A9] mb-1 font text-[14px]'>{recipes?.strIngredient2}</li>
                    <li className='text-[#A9A9A9] mb-1 font text-[14px]'>{recipes?.strIngredient3}</li>
                    <li className='text-[#A9A9A9] mb-1 font text-[14px]'>{recipes?.strIngredient4}</li>

                    <span className='font-bold font text-[16px] mb-3 mt-4'>How To Prepare ?</span>
                    <span className='text-[#A9A9A9] font text-[14px] '>
                        {recipes?.strInstructions}
                    </span>
                    <a
                        href={recipes?.strYoutube}
                        target="_blank"
                        className='text-[#A9A9A9] mt-4 font text-[16px] hover:text-blue-600 hover:underline'> watch Video</a>
                </div>
            </div>
        </div>
         </>
    )
}

export default Page
