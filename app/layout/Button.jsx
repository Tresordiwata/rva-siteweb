import React from 'react'
import { Button } from '@nextui-org/react';

export const ButtonDanger = ({text,href}) => {
  return (
    <Button color='danger' className='rounded-full py-2'>{text}</Button>
  )
}
