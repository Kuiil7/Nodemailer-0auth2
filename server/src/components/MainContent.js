import React from "react";
import "../styles/MainContent.css";


function MainContent() {
  return (
    

    <div id="main_content" className="bg-dark" >

   <center>
   <h1 id="name">J A M</h1>
   <h2 id="position">full stack developer</h2>
   <h3 id="location">San Diego, CA </h3>
    <div id="socialContacts" className="row">
   
     
<li className="list-inline-item">

          <a className="btn btn-outline-light btn-social text-center rounded-circle" href="https://github.com/Kuiil7"> 
          <i className="fa fa-fw fa-github "></i></a>
          </li> 
     <li className="list-inline-item">

          <a className="btn btn-outline-light btn-social text-center rounded-circle" href="https://www.linkedin.com/in/jose-aguilera-merino-8298b6193/">
              <i className="fa fa-linkedin"></i> </a>
          
   </li> 
 
</div>

     </center>
  </div>


  );
}

export default MainContent;