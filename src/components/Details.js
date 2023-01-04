import React from 'react'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Details = () => {
  return (
      <footer className="relative z-10 bg-white pt-20 lg:pt-[120px]" id="footer">
        <div className="container">
            <div className="mx-4 flex flex-wrap justify-between">
                <div className="w-full px-4 md:pr-0 sm:w-2/3 lg:w-3/12">
                    <div className="mb-10 w-full">
                        <p className="flex mb-6 py-2 font-medium text-dark hover:text-primary lg:inline-flex text-3xl">INDIAN MASTIFF REGISTRY</p>
                        <p className="mb-4 text-lg font-semibold text-dark">Office</p>
                        <p className="mb-7 text-base text-body-color">
                            Prabuddha Agriculture ltd.<br/>
                            Mangalwar peth, Phaltan<br/>
                            D-Satara 415523 Maharashtra<br/>
                            Contact: 9975517222<br/>

                            <span className="text-primary mt-0"><Link className="text-cyan-600">prabuddha.group@oksbi</Link></span>
                        </p>
                    </div>
                </div>
                <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
                    <div className="mb-10 w-full">
                        <h4 className="mb-4 text-lg font-semibold text-dark">Founder, Chairman</h4>
                        <ul>
                            <li className="mb-2 inline-block text-base leading-loose text-body-color hover:text-primary">
                                Siddhartha Datta Ahiwale
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
                    <div className="mb-10 w-full">
                        <h4 className="mb-4 text-lg font-semibold text-dark">Core Members</h4>
                        <ul>
                                                        <li>
                                <Link to="javascript:void(0)" className="inline-block text-base leading-loose text-body-color hover:text-primary">
                                    Director : Shilraj  Kolhe
                                </Link>
                            </li>
                                                        <li>
                                <Link to="javascript:void(0)" className="inline-block text-base leading-loose text-body-color hover:text-primary">
                                    R&amp;D: Adinath Ghadage
                                </Link>
                            </li>
                                                        <li>
                                <Link to="javascript:void(0)" className="inline-block text-base leading-loose text-body-color hover:text-primary">
                                    IT : Harshdeep Lagad
                                </Link>
                            </li>
                                                        <li>
                                <Link to="javascript:void(0)" className="inline-block text-base leading-loose text-body-color hover:text-primary">
                                    Library: Akshay Salve
                                </Link>
                            </li>
                                                        <li>
                                <Link to="javascript:void(0)" className="inline-block text-base leading-loose text-body-color hover:text-primary">
                                    Relations: Kunal Malke
                                </Link>
                            </li>
                                                        <li>
                                <Link to="javascript:void(0)" className="inline-block text-base leading-loose text-body-color hover:text-primary">
                                    Social Media: Pruthvi Sanjay
                                </Link>
                            </li>
                                                    </ul>
                    </div>
                </div>
                <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
                    <div className="mb-10 w-full">
                        <h4 className="mb-4 text-lg font-semibold text-dark">Honorary Member of Board</h4>
                        <ul>
                                                        <li>
                                <Link to="javascript:void(0)" className="inline-block text-base leading-loose text-body-color hover:text-primary">
                                    Karanvir Singh, Punjab
                                </Link>
                            </li>
                                                        <li>
                                <Link to="javascript:void(0)" className="inline-block text-base leading-loose text-body-color hover:text-primary">
                                    Manu Bishnoi, Haryana
                                </Link>
                            </li>
                                                        <li>
                                <Link to="javascript:void(0)" className="inline-block text-base leading-loose text-body-color hover:text-primary">
                                    Pradeep Dahiya, Haryana
                                </Link>
                            </li>
                                                        <li>
                                <Link to="javascript:void(0)" className="inline-block text-base leading-loose text-body-color hover:text-primary">
                                    Amit Khangwal, Haryana
                                </Link>
                            </li>
                                                        <li>
                                <Link to="javascript:void(0)" className="inline-block text-base leading-loose text-body-color hover:text-primary">
                                    Sonu Latiwal, Haryana
                                </Link>
                            </li>
                                                        <li>
                                <Link to="javascript:void(0)" className="inline-block text-base leading-loose text-body-color hover:text-primary">
                                    Sachin Gulia, Haryana
                                </Link>
                            </li>
                                                        <li>
                                <Link to="javascript:void(0)" className="inline-block text-base leading-loose text-body-color hover:text-primary">
                                    Dr Amardeep Sambherwal
                                </Link>
                            </li>
                                                        <li>
                                <Link to="javascript:void(0)" className="inline-block text-base leading-loose text-body-color hover:text-primary">
                                    Aadesh Kotecha, Jalana
                                </Link>
                            </li>
                                                        <li>
                                <Link to="javascript:void(0)" className="inline-block text-base leading-loose text-body-color hover:text-primary">
                                    Akshay Pawar, Pune
                                </Link>
                            </li>
                                                    </ul>
                    </div>
                </div>
                <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
                    <div className="mb-10 w-full">
                        <h4 className="mb-9 text-lg font-semibold text-dark">Follow Us On</h4>
                        <div className="mb-6 flex items-center">
                        <div className='mx-2'>
                        <FaFacebook size={30}/>
                        </div>
                        <div className='mx-2'>
                        <FaWhatsapp size={30}/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="flex py-6 px-3 bg-gray-200 justify-around">
            <div className='px-3'>
                <span>© 2022-23 Copyright:</span>
                <span className="text-gray-600 font-semibold" >Indianmastiff</span>
            </div>
            <div>
                <span>Designed & Developed By:</span>
                <Link className="text-gray-600 font-semibold" to="/">Stackzeal Pvt ltd</Link>
            </div>
        </div>
    </footer>
  )
}

export default Details