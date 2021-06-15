import React from 'react';
import '../App.css'

const WelcomePage = () => {
  return(
    <>
      <h1 className="welcome"> Please Type "Hello World" to enter. </h1>
      <form action="<HomePage />">
        <input
          className="welcomeText"
          type="text"
          placeholder="Hello World"
          />
        <input
          className="welcomeSubmit"
          type="submit"
          value="Enter"
          />
      </form>
    </>
  );
};

export default WelcomePage;
