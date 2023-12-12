import React from 'react'

function Token() {
  return (
   <>

                <div class="bg-[#280f5b] py-24 sm:py-32" id="token">
                    <div class="mx-auto max-w-7xl px-6 lg:px-8">
                        <div class="mx-auto max-w-2xl lg:text-center">
                            <h2 class="text-base font-semibold leading-7 text-indigo-400">Tokenomics</h2>
                            <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">$MOMENTUM</p>
                            <p class="mt-6 text-lg leading-8 text-gray-300">Token breakdown, value proposition for both token holders and liquidity providers</p>
                        </div>
                        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                                <div class="flex flex-col">
                                    <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">Token breakdown</dt>
                                    <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                        <p class="flex-auto">
                                            <img alt="token" loading="lazy" width="732" height="570" decoding="async" data-nimg="1"   src="/images/token.png" className=' rounded-lg'/>
                                        </p>
                                    </dd>
                                </div>
                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                                    <div class="rounded-2xl transition-colors inset-0 bg-gray-800 p-6 h-fit">
                                        <dt class="items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-8 w-12 flex-none text-indigo-400">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"></path>
                                            </svg>
                                            <br/>
                                            <p class="text-lg">4% tax on each buy/sell.</p>
                                        </dt>
                                        <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                            <p class="">40% to Token holders</p>
                                            <p class="">40% for Marketing</p>
                                            <p class="">20% for Liquidity providers</p>
                                        </dd>
                                    </div>
                                    <div class="rounded-2xl transition-colors inset-0 bg-gray-800 p-6 h-fit">
                                        <dt class="items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-8 w-12 flex-none text-indigo-400">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"></path>
                                            </svg>
                                            <br/>
                                            <p class="text-lg">1% fee on trading volume</p>
                                        </dt>
                                        <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                            <p class="">50% to Token holders</p>
                                            <p class="">30% for Operational expenses</p>
                                            <p class="">20% for Marketing</p>
                                        </dd>
                                    </div>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
   </>
  )
}

export default Token