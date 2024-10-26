import React, { useState } from 'react'
import { GoChevronDown } from "react-icons/go";

const ProductReviews = ({ reviews }) => {
    const [reviewExpand, setReviewExpand] = useState(false);
    return (
        <section className='product-review-section w-full lg:w-[80%] mt-[7vh]'>
            <button onClick={()=> setReviewExpand(!reviewExpand)} className="review-btn w-full flex justify-between items-center px-2 py-4 border-b border-b-zinc-500 text-[1.25rem]">
                <span className='block'>Reviews({reviews.length})</span><GoChevronDown />
            </button>
            <div className={`product-reviews mt-3 w-full ${reviewExpand ? "h-fit" : "h-0"} overflow-hidden transition-all duration-300`}>
                {
                    reviews.map(item => (
                        <div key={`${item.name}'s review`} className="review w-full pb-3 border-b border-b-zinc-400 mb-5">
                            <div className="review-details flex justify-left items-center gap-3 mb-1">
                                <span className='reviewer font-medium text-[0.9rem]'>{item.name}</span>
                                {
                                    item.rating === 5 ?
                                        <span>★★★★★</span>
                                        : item.rating = 4 ?
                                            <span>★★★★☆</span>
                                            : item.rating = 3 ?
                                                <span>★★★☆☆</span>
                                                : item.rating = 2 ?
                                                    <span>★★☆☆☆</span>
                                                    :
                                                    <span>★☆☆☆☆</span>
                                }
                                <span className='text-[0.9rem] text-zinc-600'>{item.date}</span>
                            </div>
                            <p className="review text-[0.9rem]">{item.comment}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default ProductReviews