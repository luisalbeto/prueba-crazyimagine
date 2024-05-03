const Navbar = (props) => {
    return (
      <div className="w-full bg-blue-500 hover:bg-blue-700 hover:transition-colors z-10 shadow-sm justify-content-end">
        <div className="py-1 border-b-[2]">
        {props.children}     
        </div>
      </div>
    
        );
    }
    
    export default Navbar;