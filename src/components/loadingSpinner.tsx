import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center my-10 bg-transparent">
      <div className="w-12 h-12 border-solid border-4 border-white rounded-full animate-spin border-t-transparent"></div>
    </div>
  );
}
