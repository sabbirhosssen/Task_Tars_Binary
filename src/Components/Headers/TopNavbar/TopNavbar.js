import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import logo from './../../../Images/5.png'
import small_icon from './../../../Images/icon-1.png'
import search from './../../../Images/SEARCH.png'
import shop from './../../../Images/shopping-bag.png'

const navigation = [
  { name: 'Defense Projects', href: '#', current: true },
  { name: 'Engineering School', href: '#', current: false },
  
  { name: 'Director Notes', href: '#', current: false },
  { name: 'Administration', href: '#', current: false },
  { name: 'Gallery', href: '#', current: false },
  { name: 'Document', href: '#', current: false },
  { name: 'About', href: '#', current: false },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TopNavbar() {
  const stule = {
    background: "rgb(51 51 51)",
    fontFamily: 'Sf Pro',
  
  }
  return (
    <Disclosure as="nav" className="" style={stule} >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex justify-items-start  rounded-md p-2
                 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none
                  focus:ring-2 focus:ring-inset focus:ring-white
                 ">

                  <span className="sr-only">Open main menu</span>
                  
                  {open ? (
                  <img src={small_icon} alt="" className='block h-6 w-6' />
                  
                    // <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                      <img src={small_icon} alt="" className='block h-6 w-6' />
                    // <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch 
                   sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                  />
                                  
                   
                </div>

                <div className="hidden sm:ml-6 lg:ml-20 sm:block sm:text-start ">
                  
                  <div className="flex space-x-4 justify-center justify-items-center ">
                    {/* <input className=' sm:ml-6 lg:ml-20 sm:block md:hidden lg:hidden xxl:hidden' type="search" name="" id="" /> */}
                    
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-start text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 
                          'px-1 py-2 rounded-md text-[10px] text-start '
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                  <img className="h-5 hidden lg:inline xl:inline  2xl:inline w-5 rounded-full" src={search} alt="" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={shop}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-start pl-7">
                      <Menu.Item>
                        <h1 className='text-xs py-3  bg-gray-200'> Your Bag is empty</h1>
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#fh"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Bag
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#fh"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Saved Items
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#fh"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                             Orders
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#f"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Account
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#fd"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign in
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                   </Transition> 
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
