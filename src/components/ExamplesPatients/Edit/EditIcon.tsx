import { memo, SVGProps } from 'react';

const EditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2 16H3.425L13.2 6.225L11.775 4.8L2 14.575V16ZM-2.38419e-07 18V13.75L13.2 0.575C13.4 0.391666 13.6208 0.25 13.8625 0.15C14.1042 0.0499998 14.3583 -2.38419e-07 14.625 -2.38419e-07C14.8917 -2.38419e-07 15.15 0.0499998 15.4 0.15C15.65 0.25 15.8667 0.4 16.05 0.6L17.425 2C17.625 2.18333 17.7708 2.4 17.8625 2.65C17.9542 2.9 18 3.15 18 3.4C18 3.66667 17.9542 3.92083 17.8625 4.1625C17.7708 4.40417 17.625 4.625 17.425 4.825L4.25 18H-2.38419e-07ZM12.475 5.525L11.775 4.8L13.2 6.225L12.475 5.525Z'
      fill='#1D1B20'
    />
  </svg>
);

const Memo = memo(EditIcon);
export { Memo as EditIcon };
