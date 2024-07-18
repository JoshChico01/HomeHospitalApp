import { memo, SVGProps } from 'react';

const UnionIcon7 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.37713 9.00301C6.62241 9.24828 7.06967 9.24828 7.31495 9.00301L9.91197 6.40599C10.1717 6.14629 10.1717 5.72788 9.91197 5.46817C9.65226 5.20847 9.23386 5.20847 8.97415 5.46817L6.85325 7.58908L4.73235 5.46817C4.6025 5.33832 4.42937 5.26618 4.25623 5.26618C4.0831 5.26618 3.90996 5.33832 3.78011 5.46817C3.52041 5.72788 3.52041 6.14629 3.78011 6.40599L6.37713 9.00301Z'
      fill='#8B83BA'
    />
    <path
      d='M6.85325 13.7065C10.6334 13.7065 13.7065 10.6334 13.7065 6.85325C13.7065 3.07314 10.6334 0 6.85325 0C3.07314 0 0 3.07314 0 6.85325C0 10.6334 3.07314 13.7065 6.85325 13.7065ZM6.85325 1.32737C9.89754 1.32737 12.3791 3.80897 12.3791 6.85325C12.3791 9.89754 9.89754 12.3791 6.85325 12.3791C3.80897 12.3791 1.32737 9.89754 1.32737 6.85325C1.32737 3.80897 3.80897 1.32737 6.85325 1.32737Z'
      fill='#8B83BA'
    />
  </svg>
);

const Memo = memo(UnionIcon7);
export { Memo as UnionIcon7 };
