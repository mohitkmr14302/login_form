import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { createContext } from 'react';
// import './App.css';


const SearchbarDropdown = (props) => {
  const { options, onInputChange } = props;
  const ulRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.addEventListener('click', (event) => {
      event.stopPropagation();
      ulRef.current.style.display = 'flex';
      onInputChange(event);
    });
    document.addEventListener('click', (event) => {
      ulRef.current.style.display = 'none';
    });
  }, []);
  return (
    <div className="search-bar-dropdown">
      <input
        id="search-bar"
        type="text"
        className="form-control"
        placeholder="Search state..."
        ref={inputRef}
        onChange={onInputChange}
      />
      <ul id="results" className="list-group"  style={{position: "absolute"}} ref={ulRef}>
        {options.map((option, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={(e) => {
                inputRef.current.value = option;
              }}
              className="list-group-item list-group-item-action"
            >
              {option}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

const defaultOptions = [];

  defaultOptions.push(`Andhra Pradesh`);
  defaultOptions.push(`Arunachal Pradesh`);
  defaultOptions.push(`Assam`);
  defaultOptions.push(`Bihar`);
  defaultOptions.push(`Chhattisgarh`);
  defaultOptions.push(`Goa`);
  defaultOptions.push(`Gujrat`);
  defaultOptions.push(`Haryana`);
  defaultOptions.push(`Himachal pradesh`);
  defaultOptions.push(`Jharkhand`);
  defaultOptions.push(`karnataka`);
  defaultOptions.push(`Kerla`);
  defaultOptions.push(`Madhya pradesh`);
  defaultOptions.push(`Maharastra`);
  defaultOptions.push(`Manipur`);
  defaultOptions.push(`Meghlaya`);
  defaultOptions.push(`Maharatsra`);
  defaultOptions.push(`Delhi`);
  defaultOptions.push(`Jammu`);
  defaultOptions.push(`Kashmir`);
  defaultOptions.push(`Mizorom`);
  defaultOptions.push(`Nagaland`);
  defaultOptions.push(`Odisha`);
  defaultOptions.push(`Punjab`);
  defaultOptions.push(`Rajesthan`);
  defaultOptions.push(`Sikkim`);
  defaultOptions.push(`Tamil Nadu`);
  defaultOptions.push(`Telangana`);
  defaultOptions.push(`Tripura`);
  defaultOptions.push(`Uttar pradesh`);
  defaultOptions.push(`Uttarakhand`);
  defaultOptions.push(`West bengal`);


function State() {
  const [options, setOptions] = useState([]);
  const onInputChange = (event) => {
      setOptions(
          defaultOptions.filter((option) => option.includes(event.target.value))
          );
          return (event.target.value)
  };

  return (
    <div className="input">
      <SearchbarDropdown options={options} onInputChange={onInputChange} />
     
    </div>
  );
}

export default State;