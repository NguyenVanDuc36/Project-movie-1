import React, { useEffect } from 'react'
import '../../assets/styles/layout/Home.scss'

export default function News(props) {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
    return (
        <div style={{ backgroundColor: 'rgb(6, 18, 30)' }} className=""> 

        <div className="" >
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="object-cover" style={{width:'500px',height:'500px'}} src="https://themes.themewild.com/vidstream/assets/images/top-10/01.jpg" />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-200 tracking-widest">SYBERSOFT</h2>
        <h1 className="text-green-500 text-3xl title-font font-medium mb-1">The Batman</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-gray-200 ml-3">4 Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-200">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="text-gray-200">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="text-gray-200">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed text-gray-400">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-green-500">$10</span>
          <button className="btn button ml-2">Watch movie</button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
            <section className="px-5 py-10 bg-coolGray-100 text-coolGray-800">
  <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
    <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
      <div className="flex flex-col space-y-8 md:space-y-12">
        <div className="flex flex-col space-y-2">
          <h3 className="flex items-center space-x-2 text-coolGray-600">
            <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-violet-600" />
            <span className="text-xs text-green-500 font-bold tracking-wider uppercase">Exclusive</span>
          </h3>
          <a href="#" className="font-serif text-gray-200 hover:underline">Donec sed elit quis odio mollis dignissim eget et nulla.</a>
          <p className="text-xs text-green-500">47 minutes ago by
            <p  className=" text-gray-200">Leroy Jenkins</p>
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="flex items-center space-x-2 text-coolGray-600">
            <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-violet-600" />
            <span className="text-xs font-bold text-green-500 tracking-wider uppercase">Exclusive</span>
          </h3>
          <p  className="font-serif text-gray-200">Ut fermentum nunc quis ipsum laoreet condimentum.</p>
          <p className="text-xs text-green-500">2 hours ago by
            <p className=" text-gray-200 text-violet-600">Leroy Jenkins</p>
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="flex items-center space-x-2 text-coolGray-600">
            <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-violet-600" />
            <span className="text-xs text-green-500 font-bold tracking-wider uppercase">Exclusive</span>
          </h3>
          <p className="font-serif text-gray-200">Nunc nec ipsum lobortis, pulvinar neque sed.</p>
          <p className="text-xs text-green-500">4 hours ago by
            <p  className="text-gray-200 text-violet-600">Leroy Jenkins</p>
          </p>
        </div>{/**/}
      </div>
      <div className="flex flex-col w-full space-y-2">
        <div className="flex w-full h-1 bg-opacity-10 bg-violet-600">
          <div className="w-1/2 h-full bg-violet-600" />
        </div>
        <a href="#" className="flex items-center justify-between w-full">
          <span className="text-xs font-bold tracking-wider text-green-600 uppercase">See more exclusives</span>
          <svg viewBox="0 0 24 24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 stroke-current text-red-600">
            <line x1={5} y1={12} x2={19} y2={12} />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>
    <div className="relative flex col-span-12 bg-center bg-no-repeat bg-cover bg-coolGray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96" style={{backgroundImage: 'url("https://themes.themewild.com/vidstream/assets/images/favorite/03.jpg")'}}>
      <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 border-violet-600 text-gray-200">paris, france</span>
      <a className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group via-transparent flex-grow-1 bg-gradient-to-b from-coolGray-900 to-coolGray-900">
        <span className="flex items-center mb-4 space-x-2 text-violet-600">
          <span className="relative flex-shrink-0 w-2 h-2 rounded-full bg-violet-600">
            <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping bg-violet-600" />
          </span>
        </span>
      </a>
    </div>
    <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
      <div className="mb-8 space-x-5 border-b-2 border-opacity-10 border-violet-600">
        <button type="button"  className="pb-5 text-green-500 text-xs font-bold uppercase border-b-2 border-violet-600">Latest</button>
        <button type="button" className="pb-5 text-green-500 text-xs font-bold uppercase border-b-2 border-transparent text-coolGray-600">Popular</button>
      </div>
      <div className="flex flex-col divide-y divide-coolGray-300">
        <div className="flex px-1 py-4">
          <img alt className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-coolGray-500" src="https://themes.themewild.com/vidstream/assets/images/favorite/01.jpg" />
          <div className="flex flex-col flex-grow">
            <p  className="font-serif text-gray-200 hover:underline">Aenean ac tristique lorem, ut mollis dui.</p>
            <p className="mt-auto text-xs text-gray-200">5 minutes ago
              <a href="#" className="block text-green-500 lg:ml-2 lg:inline hover:underline">Politics</a>
            </p>
          </div>
        </div>
        
        <div className="flex px-1 py-4">
          <img alt className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-coolGray-500" src="https://themes.themewild.com/vidstream/assets/images/favorite/02.jpg" />
          <div className="flex flex-col flex-grow">
            <p  className="font-serif text-gray-200 hover:underline">Aenean ac tristique lorem, ut mollis dui.</p>
            <p className="mt-auto text-xs text-gray-200">5 minutes ago
              <a href="#" className="block text-green-500 lg:ml-2 lg:inline hover:underline">Politics</a>
            </p>
          </div>
        </div>

        <div className="flex px-1 py-4">
          <img alt className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-coolGray-500" src="https://themes.themewild.com/vidstream/assets/images/favorite/03.jpg" />
          <div className="flex flex-col flex-grow">
            <p  className="font-serif text-gray-200 hover:underline">Aenean ac tristique lorem, ut mollis dui.</p>
            <p className="mt-auto text-xs text-gray-200">5 minutes ago
              <a href="#" className="block text-green-500 lg:ml-2 lg:inline hover:underline">Politics</a>
            </p>
          </div>
        </div>

        <div className="flex px-1 py-4">
          <img alt className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-coolGray-500" src="https://themes.themewild.com/vidstream/assets/images/favorite/04.jpg" />
          <div className="flex flex-col flex-grow">
            <p  className="font-serif text-gray-200 hover:underline">Aenean ac tristique lorem, ut mollis dui.</p>
            <p className="mt-auto text-xs text-gray-200">5 minutes ago
              <a href="#" className="block text-green-500 lg:ml-2 lg:inline hover:underline">Politics</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="Most-watched container h-auto py-5 w-full " >
                <section className="pt-6 blog-1 sm:pt-12 bg-coolGray-100 text-coolGray-800">
                    <div className="container px-6 mx-auto space-y-8">
                        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-5">
                            <article className="flex flex-col bg-coolGray-50">
                                <div className="text-base" >
                                    <p className="text-danger" >Most watched Tv Show</p>
                                    <h1 className="text-3xl font-medium text-white" >Latest Tv Show</h1>
                                    <p className="text-light" >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <button style={{ backgroundColor: '#e41a1a' }} className="btn px-4 text-light mr-5" >View all</button>
                                </div>
                            </article>
                            <article className="flex flex-col blog-home bg-coolGray-50">
                                <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                    <img style={{ height: '260px' }} className="object-cover  img-fuild " alt="example" src="./img/100.jpg" />
                                    <div className="overlay" >
                                        <div className="ml-2 mt-3" >
                                            <span style={{ width: '65px', color: 'black' }} className="bg-warning text-xs  px-2 py-1  rounded-md">Premium</span>
                                        </div>
                                    </div>
                                    <div className="overlay2 text-light text-center text-2xl" style={{ backgroundColor: '#ff0000' }}>
                                        <i class="fas fa-play i-icon"></i><br />
                                        <i class="fas fa-plus  i-icon"></i><br />
                                        <i class="fas fa-heart  i-icon"></i><br />
                                    </div>
                                </a>
                                <div className="flex flex-row text-white justify-between mt-2 flex-1">
                                    <a className="font-semibold" >Friends</a>
                                    <a>Comady</a>
                                </div>
                            </article>

                            <article className="flex flex-col blog-home bg-coolGray-50">
                                <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                    <img style={{ height: '260px' }} className="object-cover  img-fuild " alt="example" src="./img/banner-2.jpg" />
                                    <div className="overlay" >
                                        <div className="ml-2 mt-3" >
                                            <span style={{ width: '65px', color: 'black' }} className="bg-warning text-xs  px-2 py-1  rounded-md">Premium</span>
                                        </div>
                                    </div>
                                    <div className="overlay2 text-light text-center text-2xl" style={{ backgroundColor: '#ff0000' }}>
                                        <i class="fas fa-play i-icon"></i><br />
                                        <i class="fas fa-plus  i-icon"></i><br />
                                        <i class="fas fa-heart  i-icon"></i><br />
                                    </div>
                                </a>
                                <div className="flex flex-row text-white justify-between mt-2 flex-1">
                                    <a className="font-semibold" >Friends</a>
                                    <a>Comady</a>
                                </div>
                            </article>

                            <article className="flex flex-col blog-home bg-coolGray-50">
                                <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                    <img style={{ height: '260px' }} className="object-cover  img-fuild " alt="example" src="./img/beaty-beast.jpg" />
                                    <div className="overlay" >
                                        <div className="ml-2 mt-3" >
                                            <span style={{ width: '65px', color: 'black' }} className="bg-warning text-xs  px-2 py-1  rounded-md">Premium</span>
                                        </div>
                                    </div>
                                    <div className="overlay2 text-light text-center text-2xl" style={{ backgroundColor: '#ff0000' }}>
                                        <i class="fas fa-play i-icon"></i><br />
                                        <i class="fas fa-plus  i-icon"></i><br />
                                        <i class="fas fa-heart  i-icon"></i><br />
                                    </div>
                                </a>
                                <div className="flex flex-row text-white justify-between mt-2 flex-1">
                                    <a className="font-semibold" >Friends</a>
                                    <a>Comady</a>
                                </div>
                            </article>

                            <article className="flex flex-col blog-home bg-coolGray-50">
                                <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                    <img style={{ height: '260px' }} className="object-cover  img-fuild " alt="example" src="./img/banner-4.jpg" />
                                    <div className="overlay" >
                                        <div className="ml-2 mt-3" >
                                            <span style={{ width: '65px', color: 'black' }} className="bg-warning text-xs  px-2 py-1  rounded-md">Premium</span>
                                        </div>
                                    </div>
                                    <div className="overlay2 text-light text-center text-2xl" style={{ backgroundColor: '#ff0000' }}>
                                        <i class="fas fa-play i-icon"></i><br />
                                        <i class="fas fa-plus  i-icon"></i><br />
                                        <i class="fas fa-heart  i-icon"></i><br />
                                    </div>
                                </a>
                                <div className="flex flex-row text-white justify-between mt-2 flex-1">
                                    <a className="font-semibold" >Friends</a>
                                    <a>Comady</a>
                                </div>
                            </article>




                        </div>
                    </div>
                </section>


                <section className="mt-10 mb-10 blog-2 sm:mt-6 bg-coolGray-100 text-coolGray-800">
                    <div className="container px-6 mx-auto space-y-8">
                        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                            <article className="flex flex-col blog-home bg-coolGray-50">
                                <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                    <img style={{ height: '330px' }} className="object-cover  img-fuild " alt="example" src="./img/banner-5.jpg" />
                                    <div className="overlay" >
                                        <div className="ml-2 mt-3" >
                                            <span style={{ width: '65px', color: 'black' }} className="bg-warning text-xs  px-2 py-1  rounded-md">Premium</span>
                                        </div>
                                    </div>
                                    <div className="overlay2 text-light text-center text-2xl" style={{ backgroundColor: '#ff0000' }}>
                                        <i class="fas fa-play i-icon"></i><br />
                                        <i class="fas fa-plus  i-icon"></i><br />
                                        <i class="fas fa-heart  i-icon"></i><br />
                                    </div>
                                </a>
                                <div className="flex flex-row text-white justify-between mt-2 flex-1">
                                    <a className="font-semibold" >Friends</a>
                                    <a>Comady</a>
                                </div>
                            </article>

                            <article className="flex flex-col blog-home bg-coolGray-50">
                                <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                    <img style={{ height: '330px' }} className="object-cover  img-fuild " alt="example" src="./img/star-war.jpg" />
                                    <div className="overlay" >
                                        <div className="ml-2 mt-3" >
                                            <span style={{ width: '65px', color: 'black' }} className="bg-warning text-xs  px-2 py-1  rounded-md">Premium</span>
                                        </div>
                                    </div>
                                    <div className="overlay2 text-light text-center text-2xl" style={{ backgroundColor: '#ff0000' }}>
                                        <i class="fas fa-play i-icon"></i><br />
                                        <i class="fas fa-plus  i-icon"></i><br />
                                        <i class="fas fa-heart  i-icon"></i><br />
                                    </div>
                                </a>
                                <div className="flex flex-row text-white justify-between mt-2 flex-1">
                                    <a className="font-semibold" >Friends</a>
                                    <a>Comady</a>
                                </div>
                            </article>

                            <article className="flex flex-col blog-home bg-coolGray-50">
                                <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                    <img style={{ height: '330px' }} className="object-cover  img-fuild " alt="example" src="./img/banner-7.jpg" />
                                    <div className="overlay" >
                                        <div className="ml-2 mt-3" >
                                            <span style={{ width: '65px', color: 'black' }} className="bg-warning text-xs  px-2 py-1  rounded-md">Premium</span>
                                        </div>
                                    </div>
                                    <div className="overlay2 text-light text-center text-2xl" style={{ backgroundColor: '#ff0000' }}>
                                        <i class="fas fa-play i-icon"></i><br />
                                        <i class="fas fa-plus  i-icon"></i><br />
                                        <i class="fas fa-heart  i-icon"></i><br />
                                    </div>
                                </a>
                                <div className="flex flex-row text-white justify-between mt-2 flex-1">
                                    <a className="font-semibold" >Friends</a>
                                    <a>Comady</a>
                                </div>
                            </article>

                            <article className="flex flex-col blog-home bg-coolGray-50">
                                <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                    <img style={{ height: '330px' }} className="object-cover  img-fuild " alt="example" src="./img/banner-8.jpg" />
                                    <div className="overlay" >
                                        <div className="ml-2 mt-3" >
                                            <span style={{ width: '65px', color: 'black' }} className="bg-warning text-xs  px-2 py-1  rounded-md">Premium</span>
                                        </div>
                                    </div>
                                    <div className="overlay2 text-light text-center text-2xl" style={{ backgroundColor: '#ff0000' }}>
                                        <i class="fas fa-play i-icon"></i><br />
                                        <i class="fas fa-plus  i-icon"></i><br />
                                        <i class="fas fa-heart  i-icon"></i><br />
                                    </div>
                                </a>
                                <div className="flex flex-row text-white justify-between mt-2 flex-1">
                                    <a className="font-semibold" >Friends</a>
                                    <a>Comady</a>
                                </div>
                            </article>

                            


                        </div>
                    </div>
                </section>



            </div>
        </div>
    )
}





