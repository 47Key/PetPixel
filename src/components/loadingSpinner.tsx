import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="relative w-full h-full flex my-auto items-start justify-center mt-10 bg-transparent">
      <div className="w-12 h-12 border-solid border-4 border-e8bluedark rounded-full animate-spin border-t-transparent border-b-transparent"></div>
    </div>
  );
}
