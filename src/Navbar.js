import { Products } from "./Products"
export default function Navbar(props){
    return(
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
    
     
      <a href="http://localhost:3000/"><img src="https://icms-image.slatic.net/images/ims-web/3ae67ef5-e5f6-42c3-9a40-993ef9a7bfae.png" border="0" alt="Logo"/></a>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" size ="50"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href=""><img src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" border="0" alt="Logo" height="40" width="40"/></a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href=""><img src="  https://icms-image.slatic.net/images/ims-web/7a379e2e-4b65-4617-9188-94e0c768cd9d.png" border="0" alt="Logo" height="50" wid5th="180"/></a>
        
        </div>
      </div>
     
    </nav>
    )

}
