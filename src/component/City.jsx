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
        placeholder="Search city..."
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

const defaultOptions = ["Dhuburi",
"Dibrugarh",
"Dispur",
"Guwahati",
"Jorhat",
"Nagaon",
"Sibsagar",
"Silchar",
"Tezpur",
"Baruni",
"Begusarai",
"Bettiah",
"Bhagalpur",
"BiharSharif",
"BodhGaya",
"Buxar",
"Chapra",
"Darbhanga",
"Dehri",
"Dinapur Nizamat",
"Gaya",
"Hajipur",
"Jamalpur",
"Katihar",
"Madhubani",
"Motihari",
"Munger",
"Muzaffarpur",
"Patna",
"Purnia",
"Pusa",
"Saharsa",
"Samastipur",
"Sasaram",
"Sitamarhi",
"Siwan",
// Chandigarh (union territory)
"Chandigarh",
"Chhattisgarh",
"Ambikapur",
"Bhilai",
"Bilaspur",
"Dhamtari",
"Durg",
"Jagdalpur",
"Raipur",
// Dadra and Nagar Haveli (union territory)
"Silvassa",
// "Daman" and Diu (union territory)
"Daman",
"Diu",
// "Delhi" (national capital territory)
"Delhi",
"New Delhi",
"Goa",
" Madgaon",

"Kheda",
"Mahesana",
'Morvi',
"Nadiad",
"Navsari",
"Okha",
"Palanpur",
"Patan",
"Porbandar",
"Rajkot",
"Surat",
"Surendranagar",
"Valsad",
"Veraval",
"Haryana",
"Chennai"
];

function City() {
  const [options, setOptions] = useState([]);
  const onInputChange = (event) => {
    //   console.log(event.target.value)
    setOptions(
      defaultOptions.filter((option) => option.includes(event.target.value))
    );
  };

  return (
    <div className="input">
      <SearchbarDropdown options={options} onInputChange={onInputChange} />
     
    </div>
  );
}

export default City;