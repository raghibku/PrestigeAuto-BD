import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BrandDetail = () => {
    const { brandName } = useParams();
    const settings = {
        dots: true,
        infinite: true,

        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };

    const [cars, setCars] = useState(null)

    const [firstRender, setFirstRender] = useState(true);
    const [isFetchComplete, setIsFetchComplete] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {

        fetch(`https://brand-shop-server-dw6nsjbsy-raghibs-projects.vercel.app/cars/${brandName}`)
            .then(res => res.json())
            .then(data => {
                setCars(data);
                setIsFetchComplete(true);
            })


        console.log(brandName);
    }, [])

    return (
        <div>
            <h1 className='text-3xl text-center font-bold py-4'>BrandDetail {brandName} </h1>

            <div className='bg-gradient-to-r from-indigo-500 w-full py-8 my-8'>
                <div className="max-w-md md:max-w-xl mx-auto my-8">
                    <Slider {...settings}>
                        {cars ?
                            cars.map((item, index) => (
                                <div className="w-full h-64 px-4" key={index}>
                                    
                                    <img className="w-full h-full object-cover" src={item.photoURL} alt={item.name} />
                                    <h3 className="text-2xl font-semibold">{item.name}</h3>
                                    

                                </div>
                            )) : ''
                        }
                    </Slider>
                </div>
            </div>

            {
                !isFetchComplete ? (
                    <div className='w-full h-[300px] flex justify-center items-center text-center'>
                        <p className='text-3xl font-semibold'>Loading.....</p>
                    </div>
                ) : cars.length === 0 ? (
                    <div className='w-full h-[300px] flex justify-center items-center text-center'>
                        <p className='text-3xl font-semibold'>No cars found</p>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            cars.map((car) => {
                                return (

                                    <div key={car._id} className='flex justify-center items-center px-4 py-4 bg-base-300'>
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
                                            <div className='flex justify-between items-center gap-4'>
                                                <button onClick={() => navigate(`/product-detail/${car._id}`)} className='btn btn-primary'>Details</button>
                                                <button onClick={() => navigate(`/update-product/${car._id}`)} className='btn btn-secondary'>Update</button>
                                            </div>

                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                )


            }

        </div>
    )
}

export default BrandDetail