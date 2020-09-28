import React from 'react';

interface Props {
  children: React.ReactNode;
}

export function Container({ children }: Props): JSX.Element {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>{children}</div>
  );
}
