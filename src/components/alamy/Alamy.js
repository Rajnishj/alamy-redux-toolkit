import React, { useEffect, useState } from "react";
import MainFooter from "../Footer/MainFooter";
import Header from "../Header/Header";
import "./alamy.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getData } from "../../features/images/ImageSlice";

const Alamy = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const handleSubmit = () => {
    dispatch(getData(text));
  };
  return (
    <div className="container-fluid main">
      <Header />
      <div className="blank-page mt-5">
        <h1>own the blank page</h1>
        <p>Be braver. Go further</p>
        <div className="search-bar">
          <span>
            <i className="bi bi-image"></i>All Images{" "}
            <i className="bi bi-caret-down"></i>
          </span>
          <input
            type="text"
            value={text}
            placeholder="Start here"
            onChange={(e) => setText(e.target.value)}
          />
          <i className="bi bi-camera-fill"></i>
          <Link
            to={{
              pathname: `/image`,
            }}
          >
            <button onClick={() => handleSubmit()}>
              <i className="bi bi-search"></i>
            </button>
          </Link>
        </div>
      </div>

      <MainFooter
        header="Alternative Inspiration"
        para="Don't start with the same content as everyone else.Find over 150,000new, unexcepted content assets daily"
        text="See fresh content"
      />
    </div>
  );
};

export default Alamy;
