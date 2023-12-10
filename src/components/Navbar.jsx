import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const [isSidebarOpen, setSidebarVisibility] = useState(false);

  const closeSidebar = () => setSidebarVisibility(false);
  const openSidebar = () => setSidebarVisibility(true);

  return (
    <nav className="h-navbar-height bg-white fixed top-0 left-0 w-full z-[1000]">
      <header className=" bg-white relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="container-wrapper h-[72px] flex items-center justify-between">
          <a href="/" className=" font-semibold">
            {/* <img
              src="/images/logo.png"
              alt=""
              width="150px"
              height="28px"
              className="cursor-pointer"
            /> */}
            TradeFi Bot
          </a>

          <button
            onClick={isSidebarOpen ? closeSidebar : openSidebar}
            className="flex lg:hidden text-black text-3xl"
          >
            {isSidebarOpen ? <MdClose /> : <AiOutlineMenu />}
          </button>

          <aside
            className={twMerge(
              "max-lg:fixed bottom-0 right-0 max-lg:w-[320px] max-lg:h-[calc(100vh-72px)] max-lg:bg-text  flex flex-col lg:flex-row lg:items-center lg:space-x-10 max-lg:text-white lg:[&>*]:text-black/60 [&>*]:tracking-[1px] max-lg:p-5 max-lg:[&>a]:py-2 max-lg:[&>a]:border-b max-lg:[&>a]:px-3 max-lg:[&>a]:mb-2 max-lg:[&>a]:uppercase transition-all duration-200 translate-x-[320px] lg:translate-x-0 z-[1000] max-lg:overflow-y-auto",
              isSidebarOpen ? "translate-x-0" : null
            )}
          >
            
        
            <a
            onClick={closeSidebar}
              class="relative -mx-3 -my-2 rounded-lg px-2 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
              href="/#"
            >
              <span class="relative z-10">Docs</span>
            </a>
            <a
            onClick={closeSidebar}
              class="relative -mx-3 -my-2 rounded-lg px-2 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
              href="/#"
            >
              <span class="relative z-10">Pitchdeck</span>
            </a>
            <a
            onClick={closeSidebar}
              class="relative -mx-3 -my-2 rounded-lg px-2 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
              href="/#features"
            >
              <span class="relative z-10">Features</span>
            </a>
            <a
            onClick={closeSidebar}
              class="relative -mx-3 -my-2 rounded-lg px-2 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
              href="/#token"
            >
              <span class="relative z-10">Tokenomics</span>
            </a>
            <a
            onClick={closeSidebar}
              class="relative -mx-3 -my-2 rounded-lg px-2 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
              href="/#faqs"
            >
              <span class="relative z-10">FAQs</span>
            </a>

            <div className="flex justify-start items-center gap-6 py-5">
              <a href="/"
               
                className="  font-inter text-base sm:text-xl"
              >
              < FaInstagram />
              </a>
              <a href="/" className="  font-inter text-base sm:text-xl"><BiLogoTelegram/></a>
              <a href="/"  className="  font-inter text-base sm:text-xl"><AiOutlineTwitter/></a>
            </div>

            {/* <Button className="rounded-md text-sm h-10 mt-4 mb-6 lg:hidden">
              {t("Buy ETHETF Token")}
            </Button> */}
          </aside>
        </div>
      </header>
    </nav>
  );
}
