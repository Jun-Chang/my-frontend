"use client";

import React from "react";

const Error = ({reset}: { reset: () => void }) => {
  return (
    <div className='bg-red-100 border-l-4 borer-red-400 text-red-700 mt-4 rounded shadow-md max-auto p-2'>
      <h3 className="font-bold mb-2">エラーが発生しました</h3>
      <button onClick={reset} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">もう一度試す</button>
    </div>
  );
};

export default Error;