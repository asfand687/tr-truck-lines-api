"use client"

const Drawer = ({ showDrawer, setShowDrawer }) => {
  return (
    <nav className={` md:hidden fixed z-50 top-20 bg-white p-6 flex flex-col items-center rounded-lg shadow-xl space-y-4 transition-all all ease-out duration-300 ${showDrawer ? 'right-0' : '-right-full'}`}>
      <div 
        onClick={() => setShowDrawer(false)} 
        className="w-full flex flex-row-reverse"
      >
        <img 
          src="/img/close.svg" 
          alt="Close" 
        />
      </div>
      <img 
        className="w-32" 
        src="/img/logo-new.svg" 
        alt="Logo" 
      />
      <li>About Us</li>
      <li>Our Vision</li>
      <li>Pricing</li>
      <button 
        className="rounded font-semibold px-6 py-2 bg-primary text-light"
      >
        Get a Dispatcher
      </button>
    </nav>
  )
}

export default Drawer