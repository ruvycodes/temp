const Header = () => {

    return(
        <div className="sticky top-0 z-10 flex justify-between items-center bg-[#fffefc] shadow-md">

        <div className="p-3 pl-6">
          <span className="text-4xl font-light">ikai</span>
        </div>
  
        <div className="links-container">
          <ul className="flex">
            <li className="links mx-7 text-lg font-light ">home</li>
            <li className="links mx-7 text-lg font-light ">about us</li>
            <li className="links mx-7 text-lg font-light "> contact us</li>
            <li className="links mx-7 text-lg font-light "> portfolio</li>
            <li className="links mx-7 text-lg font-light "> careers</li>
          </ul>
        </div>
      </div>
    )
}

export default Header