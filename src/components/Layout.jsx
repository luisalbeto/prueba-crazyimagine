const Layout = (props) => {
    return(
      <>
        <div className="bg-cover bg-center h-screen w-full" >
          {props.children}
        </div>
      </>
    )
  }
  
  export default Layout;