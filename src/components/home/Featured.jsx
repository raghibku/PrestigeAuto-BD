import React, { useEffect, useState } from 'react'

const Featured = () => {
    const [cars, setCars] = useState(null)
    useEffect(() => {
        fetch('/data/featured.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div className='my-8'>
            <h1 className='text-3xl text-center font-bold py-4'>Our Featured Cars</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-10'>

                {cars ?
                    cars.map((car) => {
                        return (

                            <div key={car.id} className='flex justify-center items-center px-4 py-4 bg-base-300'>
                                <div className='flex flex-col justify-center items-start '>
                                    <img src={car.photoURL} className='h-[200px] w-[300px]' alt="" />
                                    <h1 className='text-2xl  font-bold'>{car.name}</h1>
                                    <div className='flex justify-between items-center gap-4'>
                                        <h2 className='text-xl font-semibold'>Brand:{car.brandName}</h2>
                                        <h2 className='text-xl font-semibold'>Category:{car.category}</h2>
                                    </div>
                                    <div className='flex justify-between items-center gap-4'>
                                        <h2 className='text-xl text-primary'>Price:{car.price}$</h2>
                                        <h2 className='text-xl text-secondary'>Rating:{car.rating}</h2>
                                    </div>


                                </div>
                            </div>

                        )
                    }) : 'loading'
                }
            </div>
        </div>
    )
}

export default Featured