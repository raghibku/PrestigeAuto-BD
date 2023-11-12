import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2' 
const MyCart = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user.email;
    const [cars, setCars] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://brand-shop-server-dw6nsjbsy-raghibs-projects.vercel.app/cart/${userEmail}`)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://brand-shop-server-dw6nsjbsy-raghibs-projects.vercel.app/cart/${userEmail}/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'The car has been deleted from the cart.',
                                'success'
                            )
                            const remaining = cars.filter(item => item._id != _id);
                            setCars(remaining)
                        }
                    })
            }
        })
    }
    return (
        <div>
            <h1 className='text-3xl text-center font-bold py-4'>My Cart</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {cars ?
                    cars.map((item) => {
                        return (
                            <div className='flex justify-center items-center px-4 py-4 bg-base-300'>
                                <div className='flex flex-col justify-center items-start '>
                                    <img src={item.car.photoURL} className='h-[200px] w-[300px]' alt="" />
                                    <h1 className='text-2xl font-bold'>{item.car.name}</h1>

                                    <div className='flex justify-between items-center gap-4'>
                                        <h2 className='text-xl text-primary'>Price:{item.car.price}$</h2>
                                        <h2 className='text-xl text-secondary'>Rating:{item.car.rating}</h2>
                                    </div>
                                    <div className='flex justify-between items-center gap-4'>
                                        <button onClick={() => { handleDelete(item._id) }} className='btn btn-secondary'>Remove</button>
                                    </div>

                                </div>
                            </div>
                        )
                    }) : 'loading..'
                }
            </div>

        </div>
    )
}

export default MyCart