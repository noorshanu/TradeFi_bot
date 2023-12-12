import React from "react";
import { Tab } from "@headlessui/react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

function About() {
  return (
    <>
      <section
        id="features"
        aria-label="Features for investing all your money"
        class="bg-[#280f5b] py-20 sm:py-32"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl">
            <h1 className=" text-white text-base">About Us</h1>
            <div className="bg-[#5e17eb] h-1 w-16"></div>
            <h2 class="text-3xl font-medium tracking-tight text-white pt-3">
              TradeFi Bot, a state-of-the-art perpetual trading tool, is
              designed to revolutionize the way you trade in the crypto market.
            </h2>
            <p class="mt-2 text-lg text-gray-400">
              With our unique blend of features, including token staking and
              farming, we offer a comprehensive trading solution.
            </p>
          </div>
        </div>
        <div class="mt-16 md:hidden">
          <Swiper
           
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation, Pagination, EffectFade]}
            pagination={{
              dynamicBullets: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className=" text-center m-10 rounded-lg">
                <img alt="Market Image" src="  /images/market.png" />
                <div className=" bg-gray-800/95 rounded-lg p-6 backdrop-blur sm:p-10">
                  <h3 class="mt-6 text-sm font-semibold text-center text-white sm:text-lg">
                  Comprehensive Market Access
                  </h3>
                  <p class="mt-2 text-sm text-gray-400 text-center">
                  Trade across a diverse range of markets, tailored to
                          both beginners and seasoned traders.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" text-center m-10 rounded-lg">
                <img alt="Market Image" src="  /images/3.png" />
                <div className=" bg-gray-800/95 rounded-lg p-6 backdrop-blur sm:p-10">
                  <h3 class="mt-6 text-sm font-semibold text-center text-white sm:text-lg">
                  User-Friendly Interface
                  </h3>
                  <p class="mt-2 text-sm text-gray-400 text-center">
                  Navigate easily with our intuitive and sleek platform
                          design." Real-Time Alerts: "Stay ahead with instant
                          notifications and updates on your trades.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" text-center m-10 rounded-lg">
                <img alt="Market Image" src="  /images/4.png" />
                <div className=" bg-gray-800/95 rounded-lg p-6 backdrop-blur sm:p-10">
                  <h3 class="mt-6 text-sm font-semibold text-center text-white sm:text-lg">
                  Notifications on Positions
                  </h3>
                  <p class="mt-2 text-sm text-gray-400 text-center">
                  Get a push notification when the order gets executed,
                          be it opening a position or taking profit or for stop
                          limit
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 hidden md:mt-20 md:block">
          <button type="button" aria-hidden="true"></button>
          <div class="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24">
            <Tab.Group>
              <div
                class="relative z-10 order-last col-span-6 space-y-6"
                role="tablist"
                aria-orientation="vertical"
              >
                <Tab.List>
                  <Tab className="ui-selected:bg-gray-800 ui-selected:inset-0 ui-selected:border-none ui-selected:outline-none ui-selected:rounded-md ">
                    <div class="relative rounded-2xl transition-colors hover:bg-gray-800/30">
                      <div class="absolute inset-0 "></div>
                      <div class="relative z-10 p-8">
                        <img
                          src="/images/mark.png"
                          alt=""
                          className="mx-auto h-[65px]"
                        />
                        <h3 class="mt-6 text-lg font-semibold text-white">
                          <button
                            class="text-left ui-not-focus-visible:outline-none"
                            id="headlessui-tabs-tab-:Rabdaqlla:"
                            role="tab"
                            type="button"
                            aria-selected="true"
                            tabindex="0"
                            data-headlessui-state="selected"
                          >
                            <span class="absolute inset-0 rounded-2xl"></span>
                            Comprehensive Market Access
                          </button>
                        </h3>
                        <p class="mt-2 text-sm text-gray-400">
                          Trade across a diverse range of markets, tailored to
                          both beginners and seasoned traders.
                        </p>
                      </div>
                    </div>
                  </Tab>

                  <Tab className="ui-selected:bg-gray-800 ui-selected:inset-0 ui-selected:border-none ui-selected:outline-none ui-selected:rounded-md ">
                    <div class="relative rounded-2xl transition-colors hover:bg-gray-800/30">
                      <div class="relative z-10 p-8">
                        <img
                          src="/images/uiux.png"
                          alt=""
                          className=" mx-auto"
                        />
                        <h3 class="mt-6 text-lg font-semibold text-white">
                          <button
                            class="text-left ui-not-focus-visible:outline-none"
                            id="headlessui-tabs-tab-:Rajdaqlla:"
                            role="tab"
                            type="button"
                            aria-selected="false"
                            tabindex="-1"
                            data-headlessui-state=""
                          >
                            <span class="absolute inset-0 rounded-2xl"></span>
                            User-Friendly Interface
                          </button>
                        </h3>
                        <p class="mt-2 text-sm text-gray-400">
                          Navigate easily with our intuitive and sleek platform
                          design." Real-Time Alerts: "Stay ahead with instant
                          notifications and updates on your trades.
                        </p>
                      </div>
                    </div>
                  </Tab>
                  <Tab className="ui-selected:bg-gray-800 ui-selected:inset-0 ui-selected:border-none ui-selected:outline-none ui-selected:rounded-md ">
                    <div class="relative rounded-2xl transition-colors hover:bg-gray-800/30">
                      <div class="relative z-10 p-8">
                        <img
                          src="/images/note.png"
                          alt=""
                          className=" mx-auto h-[55px]"
                        />
                        <h3 class="mt-6 text-lg font-semibold text-white">
                          <button class="text-left ">
                            <span class="absolute inset-0 rounded-2xl"></span>
                            Notifications on Positions
                          </button>
                        </h3>
                        <p class="mt-2 text-sm text-gray-400">
                          Get a push notification when the order gets executed,
                          be it opening a position or taking profit or for stop
                          limit
                        </p>
                      </div>
                    </div>
                  </Tab>
                </Tab.List>
              </div>

              <div class="relative col-span-6">
                <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <svg
                    viewBox="0 0 558 558"
                    width="558"
                    height="558"
                    fill="none"
                    aria-hidden="true"
                    class="animate-spin-slower"
                  >
                    <defs>
                      <linearGradient
                        id=":Rddaqlla:"
                        x1="79"
                        y1="16"
                        x2="105"
                        y2="237"
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
                    <path
                      opacity=".2"
                      d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
                      stroke="#ffffff"
                    ></path>
                    <path
                      d="M1 279C1 125.465 125.465 1 279 1"
                      stroke="url(#:Rddaqlla:)"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </div>
                <div class="relative aspect-[1] z-10 mx-auto w-full max-w-[428px]">
                  <div class="absolute left-[calc(23/366*100%)] top-[calc(23/729*100%)] grid  w-[calc(318/366*100%)] transform grid-cols-1 overflow-hidden pt-[calc(23/318*100%)]">
                    <div class="col-start-1 row-start-1 flex focus:outline-offset-[32px] ui-not-focus-visible:outline-none">
                      <div class="flex flex-col w-full">
                        <div class="mt-6 px-4 text-white"></div>
                        <div class=" flex-auto rounded-t-2xl ">
                          <Tab.Panels>
                            <Tab.Panel>
                              {" "}
                              <img
                                alt="Market Image"
                                loading="lazy"
                                className=""
                                src="  /images/market.png"
                              />{" "}
                            </Tab.Panel>

                            <Tab.Panel>
                              {" "}
                              <img
                                alt="Market Image"
                                loading="lazy"
                                className=""
                                src="  /images/3.png"
                              />{" "}
                            </Tab.Panel>
                            <Tab.Panel>
                              {" "}
                              <img
                                alt="Market Image"
                                loading="lazy"
                                className=""
                                src="  /images/4.png"
                              />{" "}
                            </Tab.Panel>
                          </Tab.Panels>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Group>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
