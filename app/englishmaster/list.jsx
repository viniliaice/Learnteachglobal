import { Disclosure, Transition } from '@headlessui/react'
import React, { useState } from 'react'


const list = () => {
    const items = [
        'Item 1',
        'Item 2',
        'Itemsss 3',
        'Item 4',
        'Item 5',
        'Item 6',
        'Item 7',
        'Item 8',
        'Item 9',
      ];
  return (
    <div>
    {items.slice(0, 6).map((item, index) => (
      <div key={index}>{item}</div>
    ))}
 
      <Disclosure >
        
        
      <Transition

        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Disclosure.Panel>
          {items.slice(6).map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </Disclosure.Panel>
    
    </Transition>
    <Disclosure.Button aria-placeholder='show more'>
      Show less
    </Disclosure.Button>
      </Disclosure>

  </div>
  )

}

export default list
