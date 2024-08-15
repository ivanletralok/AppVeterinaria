import React from 'react';

export default function Error({ children }: { children: React.ReactNode }) {
	return <p className='text-center bg-red-500 text-white font-bold p-2 uppercase text-sm mt-1'>{children}</p>;
}
