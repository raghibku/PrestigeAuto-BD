import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateProduct = () => {
    const car = useLoaderData();
    const { name, photoURL, price, rating, _id, shortDescription, brandName, category } = car
    const handleUpdateCar = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const category = form.category.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value;
        const rating = form.rating.value;
        const shortDescription = form.shortDescription.value;

        const updatedCar = {
            name, brandName, category, price, photoURL, rating, shortDescription
        }

        fetch(`https://brand-shop-server-dw6nsjbsy-raghibs-projects.vercel.app/car/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Car Information updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl my-8'>Update Car</h1>
            <form className='flex flex-col justify-around items-center' onSubmit={handleUpdateCar}>
                <div className='flex flex-col md:flex-row justify-around items-center gap-4'>
                    <div className='flex flex-col justify-around items-center'>
                        <input className='border py-2 my-2 border-black rounded-md w-60' type="text" name="name" defaultValue={name} placeholder='Name' />
                        <input className='border py-2 my-2 border-black rounded-md w-60' type="text" name="brandName" defaultValue={brandName} placeholder='brandName' />
                        <input className='border py-2 my-2 border-black rounded-md w-60' type="text" name="category" defaultValue={category} placeholder='category' />
                    </div>
                    <div className='flex flex-col justify-around items-center'>
                        <input className='border py-2 my-2 border-black rounded-md w-60' type="number" name="price" defaultValue={price} placeholder='price' />
                        <input className='border py-2 my-2 border-black rounded-md w-60' type="url" name="photoURL" defaultValue={photoURL} placeholder='photoURL' />
                        <input className='border py-2 my-2 border-black rounded-md w-60' type="rating" name="rating" defaultValue={rating} placeholder='rating' />
                    </div>

                </div>
                <div className='flex flex-col justify-around items-center w-full'>
                    <textarea className='border py-2 my-2 border-black rounded-md w-full' type="text" name="shortDescription" defaultValue={shortDescription} rows='4' placeholder='shortDescription' />
                    <button className='px-4 py-2 bg-green-600 text-white rounded-md' type="submit">Update Car</button>
                </div>

            </form>
        </div>
    )
}

export default UpdateProduct