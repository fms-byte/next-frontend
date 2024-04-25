import Image from "next/image";

const HomeComponent = () => {
  return (
    <>
      <div className="flex px-48">
        <div className="w-1/3 flex flex-col">
          <div className="py-12">
            <h1 className="text-4xl font-bold">
              Mask & <br />
              Style both <br />
              together
            </h1>
          </div>
          <p className="text-sm text-gray-500">
            Masks should be used as part of a comprehensive strategy of measures
            to suppress transmission and save lives
          </p>

          <div className="border mt-4 flex justify-between">
            <div className="w-3/5">
              <input
                type="text"
                placeholder="Type Product Name"
                className="py-2 px-4 w-full text-sm"
              />
            </div>
            <div className="w-2/5">
              <button className="bg-black w-full text-white py-2 px-4 text-sm flex items-center justify-center">
                Find<p className="text-xl pl-2">↗</p>
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/3 px-16">
          <div className=" flex justify-evenly items-end">
            <div>
              <div className="bg-green-300 translate-y-16 transform skew-x-6 relative">
                <div className="pt-4 pl-4 pb-8 pr-8 transform -skew-x-6">
                  <p className="text-sm">Black Cotton Mask</p>
                  <p className="-translate-x-8 text-sm">____</p>
                  <h1 className="text-2xl font-bold">$45.00</h1>
                </div>

                <Image
                  className="relative transform -skew-x-6"
                  src="/1.png"
                  alt="Black Adidas Mask"
                  width={240}
                  height={300}
                />
              </div>
            </div>

            <div className="bg-pink-300 transform skew-x-6 ml-4 overflow-hidden">
              <div className="pt-4 pl-4 pb-8 pr-8 transform -skew-x-6">
                <p className="text-sm">Pink Pattern Mask</p>
                <p className="-translate-x-8">____</p>
                <h1 className="text-2xl font-bold">$45.00</h1>
              </div>
              <Image
                className="relative transform -skew-x-6 -rotate-12 scale-125"
                src="/2.png"
                alt="White Adidas Mask"
                width={240}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black w-full p-16 transform rotate-120">
      </div>
    </>
  );
};

export default HomeComponent;
