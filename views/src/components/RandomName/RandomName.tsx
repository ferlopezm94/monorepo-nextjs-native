import { apiClient } from '@acme/core';
import React, { useState, useEffect } from 'react';

export function RandomName(): JSX.Element {
  const [name, setName] = useState('');

  async function getNewRandomName() {
    const name = await apiClient.randomName.get();
    setName(name);
  }

  useEffect(() => {
    getNewRandomName();
  }, []);

  return (
    <>
      <p className='text-black font-bold mb-2'>Random names generator</p>
      <p className='text-black mb-2'>{name}</p>
      <button
        className='bg-blue-600 text-white font-bold rounded-full p-2 w-1/4'
        onClick={getNewRandomName}
      >
        Get new random name
      </button>
    </>
  );
}
