import React from "react";
import dogimg  from "../assests/IMDR.png"
import { Link } from "react-router-dom"


const Herosection = () => {
  return (
    <div className="relative bg-white pb-50 lg:pt-[50px]">
    <div className="container">
        <div className="-mx-4 flex flex-wrap justify-between">
            <div className="order-2 md:order-1 w-full px-4 lg:w-5/12 mt-5 md:mt-1">
                <div className=" hero-content">
                    <h1 className="mb-3 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                        Single dog<br/>
                        Litter / puppy<br/>
                        Change Owner<br/>
                        Breeder Kennel <br/>
                    </h1>
                    <p className="mb-8 max-w-[480px] text-body-color text-3xl text-left md:text-left lg:text-left text-slate-500 ">
                            Reviving the legacy <br/> of Indian Mastiff Dog
                        </p>
                    <span className="order-first md:order-last">
                        <p className="mb-8 max-w-[480px] text-base text-body-color text-light text-slate-500">
                            We are nonprofit organization devoted to health, welfare and training of Indian Mastiff dog;
                            Registered with<br/> UDYAM-MH-30-0022485 Government of India.
                        </p>
                        <ul className="flex flex-wrap items-center justify-around md:justify-start my-8">
                            <li>
                                <Link to="/" className=" bg-blue-500 hover:bg-blue-700 inline-flex items-center justify-center rounded-lg bg-primary py-4 px-6 text-center text-base font-normal text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10">
                                    Register
                                </Link>
                            </li>
                            <li className="ml-2">
                                <Link to="/" className="bg-green-400 hover:bg-green-400 inline-flex items-center justify-center rounded-lg bg-secondary py-4 px-6 text-center text-base font-normal text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10">
                                    Verify
                                </Link>
                            </li>
                        </ul>
                    </span>

                </div>
            </div>
            <div className="order-1 md:order-2 mb-10 md:mb-1 sm:m-auto w-full px-6 lg:w-6/12">
                <div className="lg:ml-auto lg:text-right">
                    <div className="relative z-10 inline-block pt-11 lg:pt-0">
                        <img src={dogimg} alt="hero" className="max-w-full lg:ml-auto rounded-3xl" />
                        <span className="absolute -left-8 -bottom-8 z-[-1]">
                            <svg width="93" height="93" viewBox="0 0 93 93" fill="none" >
                                <circle cx="5.5" cy="2.5" r="2.5" fill="#3056D3" />
                                <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                                <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                                <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                                <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                                <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                                <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                                <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                                <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                                <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                                <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                                <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                                <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                                <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                                <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                                <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                                <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                                <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                                <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                                <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                                <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                                <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                                <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                                <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                                <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                            </svg>
                        </span>
                    </div>                 
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Herosection;
