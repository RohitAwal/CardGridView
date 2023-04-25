import React from "react";
import locationImg from "./image/location.png";

import thumb from "./image/thumb.png";
import CustomSlider from "./components/custom.slider";

const Card = ({ list }) => {
  const { title, location, likes, features, images, price, geheimtipp, tags } =
    list;
  return (
    <div className="grid-item">
      <div className="card">
        <CustomSlider>
          {images.map((image, index) => {
            return <img key={index} src={image} alt={image.imgAlt} />;
          })}
        </CustomSlider>
        <div className="card-content">
          <h2 className="card-header">{title}</h2>
          <div className="location">
            <img className="locationimage" src={locationImg} alt="" />
            <span className="locationname">{location}</span>
          </div>
          <div className="core">
            {tags.map((tag) => (
              <div className="iconname">
                <img className="icon" src={tag.icon} alt="" />
                <span className="icondetails">{tag.name}</span>
              </div>
            ))}

            
            <div className="littleicon">
              {features.map((feature) => (
                <div className="iconLit">
                  <img className="icon" src={feature.icon} alt="" />
                  <span className="icondetails">{feature.name}</span>
                </div>
              ))}

            
            </div>
          </div>

          <div className="bottom">
            <span className="bottomLeft">{price}</span>
            <div className="bottomRight">
              {geheimtipp ? (
                <div style={{ color: "orangered" }}>Gehimptipp</div>
              ) : (
                <>
                  <img className="thumb" src={thumb} alt="" />
                  <span className="percent">{likes}</span>
                  <span>(12)</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
