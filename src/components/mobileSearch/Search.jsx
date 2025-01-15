import React, { useEffect, useState } from 'react'
import { TfiSearch } from "react-icons/tfi";
import men from "../../../assets/images/men.jpg";
import women from "../../../assets/images/women.jpg";
import sneaker from "../../../assets/images/sneaker.jpg";
import brand from "../../../assets/images/brand.jpg";
import sport from "../../../assets/images/sports.jpg";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Search = () => {
    const [search, setSearch] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    const product = useSelector(state => state.products.data);
    useEffect(() => {
        if (product) {
            if (searchTxt !== "") {
                const filteredProducts = product.filter(p => p.title.toLowerCase().startsWith(searchTxt.toLowerCase()) || p.brand.toLowerCase().startsWith(searchTxt.toLowerCase()) || p.gender.includes(searchTxt.toLowerCase()) || p.sport?.includes(searchTxt.toLowerCase()));
                setSearch(filteredProducts);
            }
            else if("sneakers".includes(searchTxt.toLowerCase)){
                const filteredProducts = product.filter(p => p.sneaker);
                setSearch(filteredProducts);
            }
            else if("shoes".includes(searchTxt.toLowerCase)){
                setSearch([...product])
            }
            else {
                setSearch([]);
            }
        }
    }, [searchTxt, product])
    return (
        <div className='w-full xl:hidden h-screen px-5 py-3'>
            <div className="mob-searchbar relative w-full">
                <input onInput={(e) => setSearchTxt(e.target.value)} className='w-full px-5 pr-10 py-3 text-gray-700 bg-gray-100 rounded-md border-none outline-none' type='text' placeholder='Find your next step here...' autoFocus />
                <TfiSearch className='absolute top-[50%] right-0 translate-y-[-50%] mr-3 text-[1.2rem] text-gray-700' />
                <div className="result absolute top-[50px] left-0 bg-white z-[2] p-2 rounded-md overflow-y-auto max-h-[300px] w-full flex flex-col gap-2">
                    {
                        search.map(product => (
                            <NavLink key={product.id} to={`/product/${product.id}`} className="search-item flex items-center gap-2">
                                <img className='h-[50px] w-[50px] object-cover rounded' src={product.images[0]} alt={product.title} />
                                <h2 className='text-sm font-medium text-gray-800'>{product.title}</h2>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
            <section className='recommendation-container w-full mt-10'>
                <h1 className='txt-medium text-zinc-800 text-[1.7rem] mb-3'>Choose</h1>
                <div className="recommendations grid grid-cols-5 grid-rows-6 gap-1 h-[450px]">
                    <NavLink to="/shop/men" className='h-full flex justify-center items-center col-span-2 row-span-2 rounded-md overflow-hidden relative'>
                        <span className='text-white txt-medium'>
                            Men
                        </span>
                        <img className='absolute w-full h-full top-0 left-0 object-cover z-[-1]' src={men} alt="" />
                        <span className='absolute top-0 left-0 w-full h-full z-[0] bg-cyan-600 mix-blend-screen opacity-80'></span>
                    </NavLink>
                    <NavLink to="/shop/women" className='h-full flex justify-center items-center col-span-3 row-span-2 rounded-md overflow-hidden relative'>
                        <span className='text-white txt-medium'>
                            Women
                        </span>
                        <img className='absolute w-full h-full top-0 left-0 object-cover z-[-1]' src={women} alt="" />
                        <span className='absolute top-0 left-0 w-full h-full z-[0] bg-rose-600 mix-blend-screen opacity-80'></span>
                    </NavLink>
                    <NavLink to="/shop/brands" className='h-full flex justify-center items-center col-span-5 row-span-2 rounded-md overflow-hidden relative'>
                        <span className='text-white txt-medium'>
                            Brands
                        </span>
                        <img className='absolute w-full h-full top-0 left-0 object-cover z-[-1]' src={brand} alt="" />
                        <span className='absolute top-0 left-0 w-full h-full z-[0] bg-amber-600 mix-blend-screen opacity-80'></span>
                    </NavLink>
                    <NavLink to="/shop/sneaker" className='h-full flex justify-center items-center col-span-3 row-span-2 rounded-md overflow-hidden relative'>
                        <span className='text-white txt-medium'>
                            Sneakers
                        </span>
                        <img className='absolute w-full h-full top-0 left-0 object-cover z-[-1]' src={sneaker} alt="" />
                        <span className='absolute top-0 left-0 w-full h-full z-[0] bg-teal-600 mix-blend-screen opacity-80'></span>
                    </NavLink>
                    <NavLink to="/shop/sports" className='h-full flex justify-center items-center col-span-2 row-span-2 rounded-md overflow-hidden relative'>
                        <span className='text-white txt-medium'>
                            Sports
                        </span>
                        <img className='absolute w-full h-full top-0 left-0 object-cover z-[-1]' src={sport} alt="" />
                        <span className='absolute top-0 left-0 w-full h-full z-[0] bg-indigo-700 mix-blend-screen opacity-80'></span>
                    </NavLink>
                </div>
            </section>
        </div>
    )
}

export default Search