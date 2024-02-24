import React from 'react'

const MovieCard = ( { movie } ) => {
    const { title, description, posterURL, rating } = movie;
  return (
    <div className=''>
        <div className='flex flex-wrap-3 justify-center items-center'>
            <img src={posterURL} alt={title} width={100} height={100} className='rounded-md' />
        </div>
        <div className=" grid grid-cols-3 gap-4 cursor-pointer pl-5 ml-5">
            <h2 className='text-blue-600 uppercase text-md'>{title}</h2>
            <p className='text-fuchsia-800 uppercase text-md'>{description}</p>
            <p className='text text-indigo-800 uppercase text-md' >Rating: {rating}</p>
        </div>
    </div>
);
};
export default MovieCard;