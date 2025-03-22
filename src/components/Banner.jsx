import React from "react";
const Banner = ({ BannerWrap }) => {
  return (
    <div>
      <div className="banner">
        <img src={BannerWrap.bannerBg} alt="" />
        <div className="container"> 
          <div className="banner__nav-wrap">
            <div className="banner__wrap-h1">{BannerWrap.title}</div>
            <a href={BannerWrap.phone_number}>
              <button className="banner__btn">
                <div className="banner__btn-wrap">{BannerWrap.btn_name}</div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
