import * as React from 'react';

export const GoArrow = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    viewBox='0 0 32 32'
    {...props}
  >
    <g
      fill='none'
      stroke='#222344'
      strokeLinejoin='round'
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <path d='M0 16h27M21 10l6 6-6 6' />
      <path d='M11.458 19c1.274 4.057 5.065 7 9.542 7 5.523 0 10-4.477 10-10S26.523 6 21 6c-4.478 0-8.268 2.943-9.542 7' />
    </g>
  </svg>
);

export const PrevIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    style={{
      enableBackground: 'new 0 0 32 32',
    }}
    viewBox='0 0 32 32'
    {...props}
  >
    <path
      fill='currentColor'
      d='M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm2.7 17.5c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3s-.5-.1-.7-.3l-4.2-4.2c-.4-.4-.4-1 0-1.4l4.2-4.2c.4-.4 1-.4 1.4 0s.4 1 0 1.4L15.2 16l3.5 3.5z'
    />
  </svg>
);

export const NextIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    style={{
      enableBackground: 'new 0 0 32 32',
    }}
    viewBox='0 0 32 32'
    {...props}
  >
    <path
      fill='currentColor'
      d='M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm2.9 14.7-4.2 4.2c-.2.2-.5.3-.7.3s-.5-.1-.7-.3c-.4-.4-.4-1 0-1.4l3.5-3.5-3.5-3.5c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l4.2 4.2c.4.4.4 1 0 1.4z'
    />
  </svg>
);

export const Mobile = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    id='Icons'
    style={{
      enableBackground: 'new 0 0 32 32',
    }}
    viewBox='0 0 32 32'
    {...props}
  >
    <style>
      {
        '.st0{fill:none;stroke:#373737;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}'
      }
    </style>
    <path
      d='M19 23v4c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v2M5 7h14M5 23h14M11 26h2'
      className='st0'
    />
    <path d='m14 12-3 3 3 3M24 12l3 3-3 3M21 11l-4 8' className='st0' />
  </svg>
);

export const Web = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    id='Icons'
    style={{
      enableBackground: 'new 0 0 32 32',
    }}
    viewBox='0 0 32 32'
    {...props}
  >
    <style>
      {
        '.st0{fill:none;stroke:#373737;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}'
      }
    </style>
    <path d='M27 19V6H5v13M30 26H2l2-4h24z' className='st0' />
    <path d='m11 11-3 3 3 3M21 11l3 3-3 3M18 10l-4 8' className='st0' />
  </svg>
);

export const Growth = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    id='Icons'
    style={{
      enableBackground: 'new 0 0 32 32',
    }}
    viewBox='0 0 32 32'
    {...props}
  >
    <style>
      {
        '.st0{fill:none;stroke:#373737;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}'
      }
    </style>
    <path d='M3 11h26' className='st0' />
    <path d='M7 9c-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7l.1-.1c.1 0 .1-.1.2-.1.1-.1.1-.1.2-.1h.4c.1 0 .1 0 .2.1.1 0 .1.1.2.1l.1.1c.1.1.2.2.2.3.1.1.1.3.1.4 0 .1 0 .3-.1.4 0 .1-.1.2-.2.3-.2.2-.4.3-.7.3zM10 9c-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.1 0-.3.1-.4.1-.1.1-.2.2-.3.1-.1.2-.2.3-.2.4-.2.8-.1 1.1.2.1.1.2.2.2.3.1.1.1.3.1.4 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3zM13 9c-.1 0-.3 0-.4-.1-.1-.1-.2-.1-.3-.2-.1-.1-.2-.2-.2-.3-.1-.1-.1-.3-.1-.4 0-.1 0-.3.1-.4.1-.1.1-.2.2-.3.4-.4 1-.4 1.4 0 .1.1.2.2.2.3.1.1.1.3.1.4 0 .1 0 .3-.1.4-.1.1-.1.2-.2.3-.2.2-.4.3-.7.3z' />
    <path
      d='M14 27H5c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h22c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2h-9'
      className='st0'
    />
    <path
      d='M23 17c-1.4-1.4-3.6-1.4-4.9 0L16 19.1 13.9 17c-1.4-1.4-3.6-1.4-4.9 0s-1.4 3.6 0 5l2.1 2.1 4.9 5 4.9-5L23 22c1.3-1.4 1.3-3.6 0-5z'
      className='st0'
    />
  </svg>
);
