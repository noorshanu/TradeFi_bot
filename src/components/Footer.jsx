import React from 'react'
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer class="border-t border-gray-200 mt-4 sm:mt-10 ">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
                        <div>
                            <div class="flex items-center text-gray-900">
                               
                                <div class="ml-4">
                                    <p class="text-base font-semibold">TradeFi Bot</p>
                                    <p class="mt-1 text-sm">Ultimate Perp Trading Bot</p>
                                </div>
                            </div>
                            <nav class="mt-11 flex gap-8">
                                <a class="relative -mx-3 -my-2 rounded-lg px-2 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0" href="/#">
                                    <span class="relative z-10">Docs</span>
                                </a>
                                <a class="relative -mx-3 -my-2 rounded-lg px-2 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0" href="/#">
                                    <span class="relative z-10">Pitchdeck</span>
                                </a>
                                <a class="relative -mx-3 -my-2 rounded-lg px-2 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0" href="/#features">
                                    <span class="relative z-10">Features</span>
                                </a>
                                <a class="relative -mx-3 -my-2 rounded-lg px-2 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0" href="/#token">
                                    <span class="relative z-10">Tokenomics</span>
                                </a>
                                <a class="relative -mx-3 -my-2 rounded-lg px-2 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0" href="/#faqs">
                                    <span class="relative z-10">FAQs</span>
                                </a>
                            </nav>
                        </div>
                        <div class="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
                            <div class="relative flex h-24 w-24 flex-none items-center justify-center">
                                <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" class="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-gray-500">
                                    <path d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8" stroke-width="2" stroke-linecap="round"></path>
                                </svg>
                                <img alt="" loading="lazy" width="80" height="80" decoding="async" data-nimg="1" src="/images/qrcode.svg"/>
                            </div>
                            <div class="ml-8 lg:w-64">
                                <p class="text-base font-semibold text-gray-900">
                                    <a href="#">
                                        <span class="absolute inset-0 sm:rounded-2xl"></span>
                                        Set up the    TradeFi Bot
                                    </a>
                                </p>
                                <p class="mt-1 text-sm text-gray-700">Coming soon..</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
                        <form class="flex w-full justify-center md:w-auto">
                          
                            <div className="flex justify-start items-center gap-6 py-5">
              <a href="/"
               
                className="  font-inter text-base sm:text-xl"
              >
              < FaInstagram />
              </a>
              <a href="/" className="  font-inter text-base sm:text-xl"><BiLogoTelegram/></a>
              <a href="/"  className="  font-inter text-base sm:text-xl"><AiOutlineTwitter/></a>
            </div>
                        </form>
                        <p class="mt-6 text-sm text-gray-500 md:mt-0">© TradeFiBot Copyright 
                         
                        2023
                         
                        . All rights reserved.</p>
                    </div>
                </div>
            </footer>
    </>
  )
}

export default Footer