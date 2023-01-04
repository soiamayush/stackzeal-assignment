import React from 'react'

const Activity = () => {
  return (
    <div className='activity'>
    <div className="container relative 5">
       <div className="flex flex-wrap">
            <div className="w-full px-4">
                <div className="mx-auto  max-w-[520px] text-center lg:mb-10">
                    <h2 className=" text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                        Activities
                    </h2>
                </div>
            </div>
        </div>
        <div className=" flex flex-wrap">
            <div className="px-4 lg:w-1/2 card">
                <div className="  single-faq mb-8 rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                    <div className="faq-btn flex w-full text-left" >
                        <div className="w-full">
                            <h4 className="text-lg font-semibold text-black card-text">
                                Registration: <br/>
                                Recording and maintaining pedigree database for public access.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 lg:w-1/2 card">
                <div className="  single-faq mb-8 rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                    <div className="faq-btn flex w-full text-left" >
                        <div className="w-full">
                            <h4 className="text-lg font-semibold text-black card-text">
                                R&D: <br/>
                                DNA profiling, Blood sampling, Bone & Muscle evaluation along with psychological factor impacting nature of dog.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 lg:w-1/2 card">
                <div className="  single-faq mb-8 rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                    <div className="faq-btn flex w-full text-left" >
                        <div className="w-full">
                            <h4 className="text-lg font-semibold text-black card-text">
                                Education: <br/>
                                Breed specific education to public.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 lg:w-1/2 card">
                <div className="  single-faq mb-8 rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                    <div className="faq-btn flex w-full text-left" >
                        <div className="w-full">
                            <h4 className="text-lg font-semibold text-black card-text">
                                Breeding: <br/>
                                Supporting breeders with scientific knowledge of Gene pool, Labor process, Mother & puppy care.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 lg:w-1/2 card">
                <div className="  single-faq mb-8 rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                    <div className="faq-btn flex w-full text-left" >
                        <div className="w-full">
                            <h4 className="text-lg font-semibold text-black card-text">
                                Veterinary: <br/>
                                Volunteering emergency veterinary practices with experts.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 lg:w-1/2 card">
                <div className="  single-faq mb-8 rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                    <div className="faq-btn flex w-full text-left">
                        <div className="w-full">
                            <h4 className="text-lg font-semibold text-black card-text">
                                Campaign<br/> against Ear cropping, Tail docking, Puppy mills and Health awareness to enable puppy buyers to identify responsible breeders.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 z-[-1]">
                <svg className='cross-sign' height="886" viewBox="0 0 1440 886" fill="none" >
                    <path opacity="0.5" d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z" fill="url(#paint0_linear)"></path>
                    
                </svg>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Activity