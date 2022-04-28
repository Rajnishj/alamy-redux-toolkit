import React, { Fragment } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useSelector } from "react-redux";

import SingleImage from "../singleImage/SingleImage";

import "./imagecollection.scss";

const ImageCollection = () => {
  const images = useSelector((state) => state.image.images);
  return (
    <Fragment>
      <div className="bg-change">
        <Header />
      </div>
      {Object.keys(images).length === 0 ? (
        <div>Loading....</div>
      ) : (
        <div className="image-section">
          {images.map((image) => (
            <SingleImage key={image.id} image={image} />
          ))}
        </div>
      )}

      {/* <Footer /> */}
    </Fragment>
  );
};

export default ImageCollection;
