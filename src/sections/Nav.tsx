import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import  Kobodrop from "../assets/logos/kobodrop_logo.svg"

function Nav() {

    return (
      <Disclosure as="nav">
        {({ open }) => (
            <>
                <div className="flex h-[15vh] items-center max-w-7xl px-8 justify-between">
                    <div className="flex">
                    <a href="#">
                        <img src={Kobodrop} alt="logo pic" />
                    </a>
                    <div className="space-x-4 items-center ml-4 hidden sm:flex">
                        <a className="text-gray-500 hover:text-gray-900 active:text-gray-400" href="#features">Features</a>
                        <a className="text-gray-500 hover:text-gray-900 active:text-gray-400" href="#partners">Partners</a>
                        <a className="text-gray-500 hover:text-gray-900 active:text-gray-400" href="#reviews">Reviews</a>
                    </div>
                    </div>
                    <a href="https://play.google.com" target="_blank" 
                    className="active:bg hidden rounded-xl bg-gray-800 text-white px-5 py-3 hover:bg-gray-900 active:bg-gray-700 sm:flex">Install Kobodrop</a>
                    <Disclosure.Button className="sm:hidden rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white ">
                        { open ? (
                            <XMarkIcon className="block h-6 w-6" />
                        ) : <Bars3Icon className="block h-6 w-6"  />} 
                    </Disclosure.Button> 
                </div>
                <Disclosure.Panel className="space-y-1">
                    <Disclosure.Button>
                        
                    </Disclosure.Button>
                </Disclosure.Panel>
            </>
        )}
      </Disclosure>
    )
  }
  
  export default Nav
  