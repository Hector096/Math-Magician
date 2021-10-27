import React from 'react';
import Calculator from './calculator';

export default function Calculate() {
  return (
    <div className="row m-0">
      <div className="col-4 p-5 mt-5"><h2 className="text-center">Lets Do Some Math!</h2></div>
      <div className="col p-2">
        <div className="p-5 m-5">
          <Calculator />
        </div>
      </div>
    </div>
  );
}
