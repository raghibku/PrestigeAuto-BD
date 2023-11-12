import React from 'react'
import Swal from 'sweetalert2' 

const AddProduct = () => {

  const handleAddCar = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const category = form.category.value;
    const price = form.price.value;
    const photoURL = form.photoURL.value;
    const rating = form.rating.value;
    const shortDescription = form.shortDescription.value;

    const newcar = {
      name, brandName, category, price, photoURL, rating, shortDescription
    }
    fetch('https://brand-shop-server-dw6nsjbsy-raghibs-projects.vercel.app/cars', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newcar),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Car added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })

    console.log(car);


  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl my-8'>Add Car</h1>
      <form className='flex flex-col justify-around items-center' onSubmit={handleAddCar}>
        <div className='flex flex-col md:flex-row justify-around items-center gap-4'>
          <div className='flex flex-col justify-around items-center'>
            <input className='border py-2 my-2 border-black rounded-md w-60' type="text" name="name" placeholder='Name' />
            <input className='border py-2 my-2 border-black rounded-md w-60' type="text" name="brandName" placeholder='brandName' />
            <input className='border py-2 my-2 border-black rounded-md w-60' type="text" name="category" placeholder='category' />
          </div>
          <div className='flex flex-col justify-around items-center'>
            <input className='border py-2 my-2 border-black rounded-md w-60' type="number" name="price" placeholder='price' />
            <input className='border py-2 my-2 border-black rounded-md w-60' type="url" name="photoURL" placeholder='photoURL' />
            <input className='border py-2 my-2 border-black rounded-md w-60' type="rating" name="rating" placeholder='rating' />
          </div>

        </div>
        <div className='flex flex-col justify-around items-center w-full'>
          <textarea className='border py-2 my-2 border-black rounded-md w-full' type="text" name="shortDescription" rows='4' placeholder='shortDescription' />
          <button className='px-4 py-2 bg-green-600 text-white rounded-md' type="submit">Add Car</button>
        </div>

      </form>
    </div>
  )
}

export default AddProduct