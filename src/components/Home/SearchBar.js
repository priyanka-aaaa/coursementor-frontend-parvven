import React, { useState } from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus, faTrash, faPen, faAngleDown, faAngleUp, faBars, faSearch, faClose

} from '@fortawesome/free-solid-svg-icons';
// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';
function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [redirectToReferrer, setredirectToReferrer] = useState("false");
  const [slug, setslug] = useState("");

  const [coursedisplay, setcoursedisplay] = useState("none");
  const [searchdisplay, setsearchdisplay] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  // or
  function handleAdd(value, type, slug) {
    setWordEntered(value)
    if (type === "School") {
      // window.location = '/schools/'+slug;
      setredirectToReferrer("true")
      setslug(slug)
    }

    else {
      setcoursedisplay("block")
      setsearchdisplay("none")
    }

  }
  return (
    <>
      {redirectToReferrer === "true" ?
        <Redirect to={'/schools/' + slug} /> :
        <div className="search">

          {/* start for after search suggestion */}
          <div className="row" style={{ display: coursedisplay }}>
            <div className="col-md-6">
              <div className="searchInputs">

                <input
                  type="text"
                  placeholder={placeholder}
                  value={wordEntered}
                  onChange={handleFilter}
                />
                <div className="searchIcon">
                  {filteredData.length === 0 ? (

                    <input type="text" />
                  ) : (
                    <>
                      <a
                        //  onClick={() => open()}
                        className="frontend-main-search">
                        <FontAwesomeIcon icon={faSearch} /></a>
                    </>

                    // <CloseIcon id="clearBtn" onClick={clearInput} />
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <select className="form-control" name="country" placeholder="Location"
              // value={country}
              // onChange={(e) => handlecountry(e.target.value)}

              >
                  <option value="">Location</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="New Zealand" >New Zealand</option>
                <option value="Germany" >Germany</option>
                <option value="Canada" >Canada</option>
                <option value="Cyprus" >Cyprus</option>


              </select>
            </div>
          </div>
          {/* end for after search suggestion */}
          <div className="searchInputs" style={{ display: searchdisplay }}>

            <input
              type="text"
              placeholder={placeholder}
              value={wordEntered}
              onChange={handleFilter}
            />
            <div className="searchIcon">
              {filteredData.length === 0 ? (

                <input type="text" />
              ) : (
                <>
                  <a
                    //  onClick={() => open()}
                    className="frontend-main-search">
                    <FontAwesomeIcon icon={faSearch} /></a>
                </>

                // <CloseIcon id="clearBtn" onClick={clearInput} />
              )}
            </div>
          </div>
          <div className="search-country">

          </div>
          {filteredData.length != 0 && (
            <div className="dataResult" style={{ display: searchdisplay }}>
              {filteredData.slice(0, 15).map((value, key) => {
                return (

                  <p classname="search-suggestion" key={value} onClick={() => handleAdd(value.name, value.type, value.slug)}> {value.name} <span className="suggession-type">{value.type}</span></p>
                );
              })}
            </div>
          )}
        </div>
      }
    </>
  );
}

export default SearchBar;
