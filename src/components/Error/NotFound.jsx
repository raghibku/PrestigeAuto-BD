import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600">The page you are looking for does not exist.</p>
        <Link to='/'>
          <button onClick={()=>{navigate('/')}} className='btn btn-primary'>Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
