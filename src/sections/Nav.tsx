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
                    <div className="flex space-x-4 items-center ml-4">
                        <a className="text-gray-500 hover:text-gray-900 active:text-gray-400" href="#features">Features</a>
                        <a className="text-gray-500 hover:text-gray-900 active:text-gray-400" href="#partners">Partners</a>
                        <a className="text-gray-500 hover:text-gray-900 active:text-gray-400" href="#reviews">Reviews</a>
                    </div>
                    <a href="https://play.google.com" target="_blank" 
                    className="bg-gray-800 text-white rounded-xl px-5 py-3 hover:bg-gray-900 active:bg-gray-700">Install Kobodrop</a>
                    <Disclosure.Button></Disclosure.Button>
                    </div>
                </div>
            </>
        )}
      </Disclosure>
    )
  }
  
  export default Nav
  