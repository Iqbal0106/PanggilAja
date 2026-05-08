import React from 'react';

interface ProgressStepsProps {
  status: string;
}

const ProgressSteps: React.FC<ProgressStepsProps> = ({ status }) => {
  const steps = [
    { label: 'Pesanan Dibuat', key: 'Menunggu Konfirmasi' },
    { label: 'Diproses', key: 'Diproses' },
    { label: 'Menuju Lokasi', key: 'Petugas Menuju Lokasi' },
    { label: 'Selesai', key: 'Selesai' },
  ];

  const getStatusIndex = (currentStatus: string) => {
    return steps.findIndex(step => step.key === currentStatus);
  };

  const currentIndex = getStatusIndex(status);

  return (
    <div className="flex items-center justify-between w-full max-w-md mx-auto">
      {steps.map((step, index) => (
        <div key={step.key} className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
            index <= currentIndex ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-500'
          }`}>
            {index < currentIndex ? '✓' : index === currentIndex ? '●' : '○'}
          </div>
          <span className={`ml-2 text-xs ${index <= currentIndex ? 'text-green-600' : 'text-gray-500'}`}>
            {step.label}
          </span>
          {index < steps.length - 1 && (
            <div className={`w-12 h-1 mx-2 ${index < currentIndex ? 'bg-green-500' : 'bg-gray-300'}`}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressSteps;