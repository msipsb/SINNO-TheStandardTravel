import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <div>
            <div className='font-alegreya-sans text-my_orange font-bold mt-56 text-center text-8xl'>The Travel Standard</div>
            <Image src="/Fuji.jpg" alt="Home Illustration" width={1080} height={720} className='mt-12 ml-auto mr-auto' />
            <div className='font-alegreya-sans text-my_dark_green font-extrabold mt-20 px-20 text-6xl text-left'>
                <div className='mt-14 flex flex-col items-center'>
                    <div>
                        Popular Packages
                        <div className='flex flex-row mt-16 justify-between w-full gap-8'>
                            <div>
                                <div className='w-96 h-96 overflow-hidden'><Image src="/Fuji.jpg" alt="Package 1" width={405} height={405} className='h-full' /></div>
                                <h1 className='font-alegreya-sans text-my_dark_green mt-8 text-4xl text-left'>Osaka, JAPAN</h1>
                            </div>
                            <div>
                                <div className='w-96 h-96 overflow-hidden'><Image src="/Fuji.jpg" alt="Package 2" width={405} height={405} className='h-full' /></div>
                                <h1 className='font-alegreya-sans text-my_dark_green mt-8 text-4xl text-left'>Paris, FRANCE</h1>
                            </div>
                            <div>
                                <div className='w-96 h-96 overflow-hidden'><Image src="/Fuji.jpg" alt="Package 3" width={405} height={405} className='h-full' /></div>
                                <h1 className='font-alegreya-sans text-my_dark_green mt-8 text-4xl text-left'>Patagonia, ARGENTINA</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='font-alegreya-sans text-my_dark_green font-extrabold mt-20 px-20 text-6xl text-left'>
                <div className='mt-14 flex flex-col items-center'>
                    <div>
                        Top Attractions
                        <div className='flex flex-col'>
                            <div className='flex flex-row mt-16 justify-between w-full gap-8'>
                                <div>
                                    <div className='w-96 h-96 overflow-hidden'><Image src="/Fuji.jpg" alt="Package 1" width={405} height={405} className='h-full' /></div>
                                    <h1 className='font-alegreya-sans text-my_dark_green mt-8 text-4xl text-left'>Osaka Castle</h1>
                                </div>
                                <div>
                                    <div className='w-96 h-96 overflow-hidden'><Image src="/Fuji.jpg" alt="Package 2" width={405} height={405} className='h-full' /></div>
                                    <h1 className='font-alegreya-sans text-my_dark_green mt-8 text-4xl text-left'>Eiffel Tower</h1>
                                </div>
                                <div>
                                    <div className='w-96 h-96 overflow-hidden'><Image src="/Fuji.jpg" alt="Package 3" width={405} height={405} className='h-full' /></div>
                                    <h1 className='font-alegreya-sans text-my_dark_green mt-8 text-4xl text-left'>Taj Mahal</h1>
                                </div>
                            </div>
                            <div className='flex flex-row mt-16 justify-between w-full gap-8'>
                                <div>
                                    <div className='w-96 h-96 overflow-hidden'><Image src="/Fuji.jpg" alt="Package 1" width={405} height={405} className='h-full' /></div>
                                    <h1 className='font-alegreya-sans text-my_dark_green mt-8 text-4xl text-left'>Algarve</h1>
                                </div>
                                <div>
                                    <div className='w-96 h-96 overflow-hidden'><Image src="/Fuji.jpg" alt="Package 2" width={405} height={405} className='h-full' /></div>
                                    <h1 className='font-alegreya-sans text-my_dark_green mt-8 text-4xl text-left'>The Great Wall</h1>
                                </div>
                                <div>
                                    <div className='w-96 h-96 overflow-hidden'><Image src="/Fuji.jpg" alt="Package 3" width={405} height={405} className='h-full' /></div>
                                    <h1 className='font-alegreya-sans text-my_dark_green mt-8 text-4xl text-left'>Phuket</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='font-alegreya-sans text-my_dark_green font-extrabold mt-20 px-20 text-6xl text-left'>
                <div className='mt-14 flex flex-col items-center'>
                    <div>
                        Traveler Experiences
                        <div className='flex flex-row mt-16 justify-between w-full gap-8'>
                            <div>
                                <div className='w-full h-96 overflow-hidden'><Image src="/Fuji.jpg" alt="Package 1" width={592} height={405} className='h-full' /></div>
                                <h1 className='font-alegreya-sans text-my_dark_green mt-8 text-4xl text-left'>Conquer New Heights</h1>
                                <h1 className='font-alegreya-sans text-my_dark_green/80 mt-2 text-2xl text-left'>Trek stunning peaks, breathe crisp air, and embrace the thrill.</h1>
                            </div>
                            <div>
                                <div className='w-full h-96 overflow-hidden'><Image src="/Fuji.jpg" alt="Package 2" width={592} height={405} className='h-full' /></div>
                                <h1 className='font-alegreya-sans text-my_dark_green mt-8 text-4xl text-left'>Dive into Paradise</h1>
                                <h1 className='font-alegreya-sans text-my_dark_green/80 mt-2 text-2xl text-left'>Sun-kissed breaches, torquoise waters, and pure island bliss.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='font-alegreya-sans text-my_dark_green font-extrabold mt-20 px-20 text-6xl mb-14 text-left'>
                <div className='mt-14 flex flex-col items-center'>
                    <div>
                        What People Love About US!
                        <div className='flex flex-row mt-16 justify-between w-full gap-8'>
                            <div className='rounded-2xl bg-my_light_gray fill-my_light_gray w-96 h-72 justify-between flex flex-col p-6'>
                                <div className='font-alegreya-sans text-my_dark_green font-bold text-2xl text-left'>“Everything was perfectly organized — I didn't have to worry about a thing.”</div>
                                <div className='flex flex-row gap-4 items-center'>
                                    <div className='overflow-hidden w-11 h-11 rounded-4xl'><Image src="/Fuji.jpg" alt="Package 2" width={44} height={44} className='h-full' /></div>
                                    <div className='flex flex-col'>
                                        <h1 className='font-alegreya-sans text-my_dark_green font-bold text-2xl text-left'>Name</h1>
                                        <h1 className='font-alegreya-sans text-my_dark_green/80 font-bold text-2xl text-left'>Description</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='rounded-2xl bg-my_light_gray fill-my_light_gray w-96 h-72 justify-between flex flex-col p-6'>
                                <div className='font-alegreya-sans text-my_dark_green font-bold text-2xl text-left'>“From booking to the last day, the service was seamless and unforgettable.”</div>
                                <div className='flex flex-row gap-4 items-center'>
                                    <div className='overflow-hidden w-11 h-11 rounded-4xl'><Image src="/Fuji.jpg" alt="Package 2" width={44} height={44} className='h-full' /></div>
                                    <div className='flex flex-col'>
                                        <h1 className='font-alegreya-sans text-my_dark_green font-bold text-2xl text-left'>Name</h1>
                                        <h1 className='font-alegreya-sans text-my_dark_green/80 font-bold text-2xl text-left'>Description</h1>
                                    </div>
                                </div>
                            </div><div className='rounded-2xl bg-my_light_gray fill-my_light_gray w-96 h-72 justify-between flex flex-col p-6'>
                                <div className='font-alegreya-sans text-my_dark_green font-bold text-2xl text-left'>“The guides were knowledgeable and friendly, turning every stop into a story.”</div>
                                <div className='flex flex-row gap-4 items-center'>
                                    <div className='overflow-hidden w-11 h-11 rounded-4xl'><Image src="/Fuji.jpg" alt="Package 2" width={44} height={44} className='h-full' /></div>
                                    <div className='flex flex-col'>
                                        <h1 className='font-alegreya-sans text-my_dark_green font-bold text-2xl text-left'>Name</h1>
                                        <h1 className='font-alegreya-sans text-my_dark_green/80 font-bold text-2xl text-left'>Description</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default page
