import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import "./tailwind.css";
import Tailwind from "./tailwind";

function App() {

    useEffect(()=>{
      if(process.env.NODE_ENV === "production"){
        //analitik bilgilendir
      }
    })
  
    return (
      <div className="App">
        <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
        <h3>{process.env.NODE_ENV}</h3>
        <p>
          {process.env.REACT_APP_API_URL}
        </p>
        test2
        {process.env.NODE_ENV === "production" && (
          <>
            <img src="/logo192.png" alt="" />
            <img src={logo} alt="" />
          </>
        )}
        <Tailwind/>
      </div>
    );
  }
  
  export default App;