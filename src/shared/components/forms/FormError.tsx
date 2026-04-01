import React from 'react'



export default function FormError({children}: {children: React.ReactNode}) {
  return (
	  <p className='bg-red-100 font-bold border-l-2 p-2 border-red-600 text-red-600 text-sm'>{children}</p>
  )
}
