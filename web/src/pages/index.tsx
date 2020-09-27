import React, { useEffect, useState } from 'react';
import { apiClient } from '@acme/core';

function HomePage(): JSX.Element {
  const [name, setName] = useState('');

  async function getNewRandomName() {
    const name = await apiClient.randomName.get();
    setName(name);
  }

  useEffect(() => {
    getNewRandomName();
  }, []);

  return (
    <div>
      <main className='w-full h-screen flex flex-col justify-center items-center'>
        <p className='text-black font-bold mb-2'>Random names generator</p>
        <p className='text-black mb-2'>{name}</p>
        <button
          className='bg-blue-600 text-white font-bold rounded-full p-2 w-1/4'
          onClick={getNewRandomName}
        >
          Get new random name
        </button>
      </main>
    </div>
  );
}

export default HomePage;
