import React from 'react';

function Scrollimages({ images }) {
    console.log(images);

    return (
        <>
            {images.map((image, index) => (
                <div key={index} className="border-r-2 w-[300px] h-[300px] flex-shrink-0 p-3 bg-amber-600 rounded-md">
                    <img className='rounded-lg w-full h-full' style={{ objectFit: 'cover' }} src={image} alt="recipe image" />
                </div>
            ))}
        </>
    );
}

export default Scrollimages;
