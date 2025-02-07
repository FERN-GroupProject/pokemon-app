import { Card } from 'flowbite-react'
import React from 'react'

export default function Desc({customTheme, speciesData}) {
  return (
    <Card theme={customTheme}>
        <div className='flex items-center'>
            <h4 className='text-lg font-medium min-w-40 text-left'>Generation:</h4>
            <p className='capitalize text-gray-400'>{speciesData.generation.name.split("-").pop()}</p>
        </div>
        <div className='flex items-center'>
            <h4 className='text-lg font-medium min-w-40 text-left'>Habitat:</h4>
            <p className='capitalize text-gray-400'>{speciesData.habitat.name}</p>
        </div>
        <div className='flex items-center'>
            <h4 className='text-lg font-medium min-w-40 text-left'>Capture Rate:</h4>
            <p className='capitalize text-gray-400'>{speciesData.capture_rate}</p>
        </div>
        <div className='flex items-center'>
            <h4 className='text-lg font-medium min-w-40 text-left'>Growth Rate:</h4>
            <p className='capitalize text-gray-400'>{speciesData.growth_rate.name}</p>
        </div>
        <div className='flex items-center'>
            <h4 className='text-lg font-medium min-w-40 text-left'>Base Happiness:</h4>
            <p className='capitalize text-gray-400'>{speciesData.base_happiness}</p>
        </div>
    </Card>
  )
}
