import { apiClient } from '@acme/core';
import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';

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
      <Text style={tailwind('text-base text-black font-bold mb-2')}>Random names generator</Text>
      <Text style={tailwind('text-base text-black mb-2')}>{name}</Text>
      <TouchableOpacity
        style={tailwind('bg-blue-600 rounded-full w-1/4')}
        onPress={getNewRandomName}
      >
        <Text style={tailwind('text-base text-white text-center font-bold p-3')}>
          Get new random name
        </Text>
      </TouchableOpacity>
    </>
  );
}
