import React from "react";
import '../styles/Portfolio.css'


function Portfolio () {
  return (
    <div id="profile_main" className="row row-cols-1 row-cols-md-3 bg-light">
 <div className="col mb-4">
    <div className="card h-100  container shadow-lg p-3 mb-5 bg-white rounded ">
      <img src="https://i.imgrz.com/6DHL.png" className="card-img-top" alt="movie magic signup" />
      <div className="card-body">
        <h5 className="card-title">Movie Magic!</h5>
        <p className="card-text">This application allows the user to find movies and fellow movie buffs (called "buddies") based on information they provide in a form which is accessed upon signing up or logging in.</p>
      </div>
      <a href="https://infinite-inlet-20359.herokuapp.com/" className="btn btn-dark bg-dark">DEMO</a>

    </div>
    
  </div>
  <div className="col mb-4">
    <div className="card h-100  container shadow-lg p-3 mb-5 bg-white rounded ">
      <img src="https://i.imgrz.com/6mBE.png" className="card-img-top" alt="four sports icon" />
      <div className="card-body">
        <h5 className="card-title">Sports Tracker</h5>
        <p className="card-text">Sports Tracker, a website dedicated to the professional sports leagues of the United States (MLS pending). Features: stats, news, single league, individual teams, and a favorites function.</p>
      </div>
      <a href="https://sportswarriorsgwu.github.io/Sports-Tracker/" className="btn btn-dark">DEMO</a>

    </div>
  </div>
  <div className="col mb-4">
    <div className="card h-100  container shadow-lg p-3 mb-5 bg-white rounded ">
      <img src="https://i.imgrz.com/6Zpu.png" className="card-img-top" alt="visual studio code with code" />
      <div className="card-body">
        <h5 className="card-title">Employee Tracker</h5>
        <p className="card-text">A command line, content management system app that allows you to view and interact with information stored in a database. The app allows you to add, vew, and update departments, roles, employees ideal for employee tracking.</p>
      </div>
      <a href="https://github.com/Kuiil7/Employee-Tracker" className="btn btn-dark">DEMO</a>

    </div>
  </div>
  <div className="col mb-4">
    <div className="card h-100  container shadow-lg p-3 mb-5 bg-white rounded ">
      <img src="https://i.imgrz.com/6FV2.gif" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Note Taker</h5>
        <p className="card-text">This application was created to write, save, and delete text notes. This is for any type of user that wants to track any amount of information. Backend data is stored and retrieved in JSON format via Express.</p>
      </div>
      <a href="https://kuiil7.github.io/Note-Taker/" className="btn btn-dark">DEMO</a>

    </div>
  </div>
  <div className="col mb-4">
    <div className="card h-100 container shadow-lg p-3 mb-5 bg-white rounded ">
      <img src="https://i.imgrz.com/6GZN.gif" className="card-img-top" alt="movie magic signup" />
      <div className="card-body">
        <h5 className="card-title">Eat-da-Burger </h5>
        <p className="card-text">This app, Eat-Da-Burger!, allows you to create a burger and log a list of items in a database. Node and MySQL does the queries and routes while handlebars generates HTML content.</p>
      </div>
      <a href="https://ancient-thicket-66505.herokuapp.com/index" className="btn btn-dark bg-dark">DEMO</a>

    </div>
  
  </div>
  <div className="col mb-4">
    <div className="card  h-100 container shadow-lg p-3 mb-5 bg-white rounded ">
      <img src="https://i.imgrz.com/6nKh.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">LingoLabs</h5>
        <p className="card-text"> A website where users can browse and shop for stock websites templates. </p>
      </div>
      <a href="https://shawnyulingolabsmaster.herokuapp.com/" className="btn btn-dark">DEMO</a>

    </div>
  </div>
</div>

  );

  
}

export default Portfolio;