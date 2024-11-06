import Image from 'next/image';

const Container = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-16 px-8 sm:px-6 md:px-8 bg-white min-h-screen">
      {/* Left Side - Text */}
      <div className="w-full md:w-1/2 space-y-3">
        <h1 className="text-sm font-semibold text-gray-800">AI Message Writer</h1>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900">Draft outreach personalized to each lead</h2>
        <p className="text-base text-gray-700">
          Stop wasting time manually copywriting emails. Use Clay’s AI message writer to help draft personalized outreach that resonates with your prospective customers.
        </p>
        <button className="bg-black text-white px-6 py-2 rounded-md mt-4 hover:bg-gray-700 transition">
          Try it for free
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="/rightImage.webp"
          alt="AI Message Writer"
          width={750} 
          height={700}
          objectFit="cover"
          className="rounded-lg w-full md:w-auto"
        />
      </div>
    </div>
  );
};

export default Container;