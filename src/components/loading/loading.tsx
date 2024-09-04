import { RingLoader } from 'react-spinners';
import { useAppStore } from '../../store/useAppStore';

function Loading() {
   
   const loading = useAppStore((state) => state.loading);
  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-gray-800 bg-opacity-75 z-50">
          <RingLoader color="#36d7b7" size={100} />
          <p className="mt-4 text-white">Loading, please wait...</p>
        </div>
      )}
    </>
  );
}

export default Loading;
