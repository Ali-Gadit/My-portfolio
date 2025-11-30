import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa';
type Props ={
    review: {
        name: string;
        review: string;
        rating: number;
        profession: string;
        image: string;
    }
    
}

const ReviewCard = ({review}:Props) => {
    const {image,name,profession,rating,review:clientReview} = review;
  return (
    <div className='rounded-md overflow-hidden bg-[#140c1c] m-4 h-full flex flex-col'>
        <div className='p-6'>
            <Image src='/q.png' alt="image" width={50} height={50} />
            <p className='text-white text-opacity-70 overflow-hidden text-ellipsis h-[7rem]'>{clientReview}</p>
            <Image src='/q.png' alt="image" width={50} height={50} className='ml-auto' />
        </div>
        <div className='px-6 py-3 mb-3 w-fit mx-auto rounded-full flex items-center space-x-3 bg-indigo-900 text-white font-bold '>
            <span>{rating}/5</span>
            <FaStar className='text-yellow-400' />
        </div>
        <div className='bg-gray-100 '>
            <div className='p-4 flex items-center space-x-6'>
                <div>
                    <Image src={image} alt={name} height={40} width={40} className='rounded-full' />
                </div>
                <div> <h1 className='text-lg font-bold'>{name}</h1>
                <p className='text-base text-gray-700'>{profession}</p></div>
            </div>
        </div>

    </div>
  )
}

export default ReviewCard
