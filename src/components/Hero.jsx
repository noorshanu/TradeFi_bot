import React from "react";

function Hero() {
  return (
    <div class="overflow-hidden py-20 sm:pb-32 sm:pt-56 lg:pb-32 xl:pb-36">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div class="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
           
            <h1 class="text-4xl font-medium tracking-tight text-gray-900">
            TradeFi Bot: Unleash the Power of Perpetual Trading
            </h1>
            <p class="mt-6 text-lg text-gray-600">
            Experience the next level of crypto trading with advanced features like token staking, farming, and exclusive launchpad access.
            </p>
            <div class="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <a
                class="inline-flex items-center justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300  hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80 text-white bg-[#5e17eb] hover:bg-[#8c52ff]"
                href="#"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  class="h-6 w-6 flex-none"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    stroke="#A3A3A3"
                  ></path>
                </svg>
                <span class="ml-2.5">Start trading</span>
              </a>
            </div>
          </div>
          <div class="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <div class="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0">
              <svg
                viewBox="0 0 1026 1026"
                fill="none"
                aria-hidden="true"
                class="absolute inset-0 h-full w-full animate-spin-slow"
              >
                <path
                  d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                  stroke="#D4D4D4"
                  stroke-opacity="0.7"
                ></path>
                <path
                  d="M513 1025C230.23 1025 1 795.77 1 513"
                  stroke="url(#:S2:-gradient-1)"
                  stroke-linecap="round"
                ></path>
                <defs>
                  <linearGradient
                    id=":S2:-gradient-1"
                    x1="1"
                    y1="513"
                    x2="1"
                    y2="1025"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#5e17eb"></stop>
                    <stop
                      offset="1"
                      stop-color="#5e17eb"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
              <svg
                viewBox="0 0 1026 1026"
                fill="none"
                aria-hidden="true"
                class="absolute inset-0 h-full w-full animate-spin-reverse-slower"
              >
                <path
                  d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
                  stroke="#D4D4D4"
                  stroke-opacity="0.7"
                ></path>
                <path
                  d="M913 513c0 220.914-179.086 400-400 400"
                  stroke="url(#:S2:-gradient-2)"
                  stroke-linecap="round"
                ></path>
                <defs>
                  <linearGradient
                    id=":S2:-gradient-2"
                    x1="913"
                    y1="513"
                    x2="913"
                    y2="913"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#5e17eb"></stop>
                    <stop
                      offset="1"
                      stop-color="#5e17eb"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <div class="relative aspect-[366/729] mx-auto max-w-[566px]">
                <div class="absolute inset-y-[calc(1/729*100%)] left-[calc(7/729*100%)] right-[calc(5/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] "></div>
                <div class="absolute left-[calc(23/366*100%)] top-[calc(23/729*100%)] grid h-[calc(686/729*100%)] w-[calc(318/366*100%)] transform grid-cols-1 overflow-hidden  pt-[calc(8/318*100%)]">
                  <img
                    alt="Starting the bot"
                    className=" relative z-50 w-full"
                    src="/images/1.png"
                  />
                </div>
                {/* <svg
                  viewBox="0 0 366 729"
                  aria-hidden="true"
                  class="pointer-events-none absolute inset-0 h-full w-full fill-gray-100"
                >
                  <path
                    fill="#F2F2F2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M300.092 1c41.22 0 63.223 21.99 63.223 63.213V184.94c-.173.184-.329.476-.458.851.188-.282.404-.547.647-.791.844-.073 2.496.257 2.496 2.157V268.719c-.406 2.023-2.605 2.023-2.605 2.023a7.119 7.119 0 0 1-.08-.102v394.462c0 41.213-22.001 63.212-63.223 63.212h-95.074c-.881-.468-2.474-.795-4.323-.838l-33.704-.005-.049.001h-.231l-.141-.001c-2.028 0-3.798.339-4.745.843H66.751c-41.223 0-63.223-21.995-63.223-63.208V287.739c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 284.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-16.289c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 214.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-26.041a2.26 2.26 0 0 0 .093-.236l-.064-.01a3.337 3.337 0 0 1-.72-.12l-.166-.028A2 2 0 0 1 1 135.62v-24.611a2 2 0 0 1 1.671-1.973l.857-.143v-44.68C3.528 22.99 25.53 1 66.75 1h233.341ZM3.952 234.516a5.481 5.481 0 0 0-.229-.278c.082.071.159.163.228.278Zm89.99-206.304A4.213 4.213 0 0 0 89.727 24H56.864C38.714 24 24 38.708 24 56.852v618.296C24 693.292 38.714 708 56.864 708h250.272c18.15 0 32.864-14.708 32.864-32.852V56.852C340 38.708 325.286 24 307.136 24h-32.864a4.212 4.212 0 0 0-4.213 4.212v2.527c0 10.235-8.3 18.532-18.539 18.532H112.48c-10.239 0-18.539-8.297-18.539-18.532v-2.527Z"
                  ></path>
                  <rect
                    x="154"
                    y="29"
                    width="56"
                    height="5"
                    rx="2.5"
                    fill="#D4D4D4"
                  ></rect>
                </svg> */}
                <img
                  alt=""
            
              
                  className=" relative z-30"
                 
                  class="pointer-events-none absolute  w-full floating"
                  src="/images/2.png"
                />
              </div>
            </div>
          </div>
          <div class="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <p class="text-center text-sm font-semibold text-gray-900 lg:text-left">
              Powered by
            </p>
            <ul
              role="list"
              class="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start"
            >
              <li class="flex">
                <img
                  alt="Kwenta"
                  loading="lazy"
                 
                  class="h-8 w-44"
                  src=" /images/kwenta.svg"
                />
              </li>
              <li class="flex">
                <img
                  alt="Synthetix"
                  loading="lazy"
                 
                  class="h-8 w-44"
                  src=" /images/synthetix.72d7ed58.svg"
                />
              </li>
              <li class="flex">
                <img
                  alt="Optimism"
                  loading="lazy"
                 
                  class="h-8 w-44"
                  src=" /images/optimism.9bc3f707.svg"
                />
              </li>
              <li class="flex">
                <img
                  alt="Arbitrum"
                  loading="lazy"
                  width="2500"
                  height="637"
                  decoding="async"
                  data-nimg="1"
                  class="h-8 w-44"
                  src=" /images/arb.svg"
                />
              </li>
              <li class="flex">
                <img
                  alt="GMX"
                  loading="lazy"
                  width="83"
                  height="21"
                  decoding="async"
                  data-nimg="1"
                  class="h-8 w-44"
                  src=" /images/gmx.5181dc09.svg"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
