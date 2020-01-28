import React from 'react';
import qs from 'qs';
import { getHash } from '../utils/utils';
export default function Pager({ count, setParams }) {
  const generatePaging = () => {
    if (count) {
      const output = [];
      for (let i = 0; i < Math.floor(count / 50); i++) {
        const queryParams = qs.stringify({ view: 'users', idx: i });
        output.push(
          <a
            href={`#${queryParams}`}
            key={i}
            onClick={() => {
              console.log('called setparams with,', qs.parse(getHash()));
              setParams(qs.parse(getHash()));
            }}
          >
            {i + 1}
          </a>
        );
      }
      return output;
    }
    return <p>Paging data missing</p>;
  };
  return <div className='nav-box'>{generatePaging()}</div>;
}
