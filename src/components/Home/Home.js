import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/UserContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>
        Welcome to home Component dear
        <span className="text-blue-300"> {user?.uid}</span>
      </h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
