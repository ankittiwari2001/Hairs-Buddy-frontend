import React from "react";

import { images } from "../../../constants";

const CTA = () => {
  return (
    <>
      <svg
        className="w-full h-auto max-h-40 translate-y-[1px]"
        preserveAspectRatio="none"
        viewBox="0 0 2160 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Wave"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
          fill="#3ACEDC"
        />
      </svg>

      <section className="relative bg-[#3ACEDC] px-5">
        <div className="container grid grid-cols-12 mx-auto py-10 md:pb-20 lg:place-items-center">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="text-black font-roboto font-bold text-2xl md:text-4xl md:text-center md:leading-normal lg:text-left">
             Get Hair Tips & Stories Delivered to Your Inbox Weekly!
            </h2>
            <div className="w-full max-w-[494px] mt-12 space-y-3 mx-auto md:space-y-0 md:flex md:items-center md:space-x-2 lg:mx-0">
              <input
                type="text"
                className="px-4 py-3 rounded-lg w-full placeholder:text-dark-light"
                placeholder="Your Email"
              />
              <button className="px-4 py-3 rounded-lg w-full bg-primary text-white font-bold md:w-fit md:whitespace-nowrap">
                Get started
              </button>
            </div>
            <p className="text-dark-light text-sm leading-7 mt-6 md:text-center md:text-base lg:text-left">
            <span className='font-bold italic'>Stay Ahead in Haircare! </span>  Unlock the Secrets to Gorgeous Hair! <span className='font-bold italic'>Join Our Weekly Newsletter.</span>
            </p>
          </div>
          <div className="col-span-12 hidden mb-[70px] md:block md:order-first lg:col-span-6 lg:order-last">
            <div className="w-3/4 mx-auto relative">
              <div className="w-1/2 h-1/2 bg-[#FC5A5A] rounded-lg absolute top-[10%] -right-[8%]" />
              <div className="w-1/2 h-1/2 bg-white rounded-lg opacity-[.06] absolute -bottom-[10%] -left-[8%]" />
              <div className="w-full rounded-xl bg-white p-3 z-[1] relative shadow-md md:shadow-lg">
                <img
                  src={images.BrandName}
                  alt="title"
                  className="w-full object-cover object-center h-auto md:h-40 lg:h-48 xl:h-60"
                />
                <div className="p-5">
                  <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
                    Future of Work
                  </h2>
                  <p className="text-dark-light mt-3 text-sm md:text-lg">
                   Transforming Haircare for a Better Future. Discover cutting-edge solutions to achieve stunning, healthier hair for a brighter and more beautiful tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;