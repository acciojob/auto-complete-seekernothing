
import React from "react";
import './../styles/App.css';
import Autocomplete from "./AutoComplete"

const App = () => {
  let fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  return (
    <div>
        {/* Do not remove the main div */}
    <Autocomplete  suggestions={fruits}/>
    </div>
  )
}

export default App
