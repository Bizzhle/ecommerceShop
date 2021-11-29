import React from "react";
import ImageSlider from "../components/ImageSlider";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <div className="">
      <div className="homepage">
        <section className="homepage_imageSlider">
          <ImageSlider />
        </section>
        <section className="homepage_banner">
          <div className="homepage_banner_images">
            <div>{/* <img src="../images/femmodel.jpeg" alt="" /> */}</div>
          </div>
          <div className="homepage_banner_images1">
            <div>
              <span>Trendy clothes for your kids</span>

              <p>
                We are an online store with more than 12 years experience on the
                Market! Our Shop Is Aimed To Fulfill All Parents’ Need And Give
                Your Babies A Perfect Childhood!
              </p>

              <button>shop now</button>
            </div>
          </div>
          <div className="homepage_banner_images2">
            <div>something</div>
          </div>
          <div className="homepage_banner_images3">
            <div>
              <span>Trendy clothes for your kids</span>

              <p>
                We are an online store with more than 12 years experience on the
                Market! Our Shop Is Aimed To Fulfill All Parents’ Need And Give
                Your Babies A Perfect Childhood!
              </p>

              <button>shop now</button>
            </div>
          </div>
        </section>
        <section className="homepage_category">
          <h3>Categories</h3>
          <div className="homepage_category_cardContainer">
            <div className="homepage_category_cardContainer_card">
              <img src="./images/camera.jpeg" alt="" />

              <div className="homepage_category_cardContainer_card_button">
                <button>Camera</button>
              </div>
            </div>
            <div className="homepage_category_cardContainer_card">
              <img src="./images/camera.jpeg" alt="" />

              <div className="homepage_category_cardContainer_card_button">
                <p>Camera</p>
              </div>
            </div>
            <div className="homepage_category_cardContainer_card">
              <img src="./images/camera.jpeg" alt="" />

              <div className="homepage_category_cardContainer_card_button">
                <button>Camera</button>
              </div>
            </div>
            <div className="homepage_category_cardContainer_card">
              <img src="./images/camera.jpeg" alt="" />

              <div className="homepage_category_cardContainer_card_button">
                <button>Camera</button>
              </div>
            </div>
            <div className="homepage_category_cardContainer_card">
              <img src="./images/camera.jpeg" alt="" />

              <div className="homepage_category_cardContainer_card_button">
                <button>Camera</button>
              </div>
            </div>
          </div>
        </section>
        <section className="homepage_services">
          <h3>Services</h3>
          <div className="homepage_services_servicesContainer">
            <div className="homepage_services_servicesContainer_items">
              <HeadsetMicOutlinedIcon sx={{ fontSize: 50 }} />
              <p>24 X 7 Free Support</p>
              <span>Call us at any time</span>
            </div>
            <div className="homepage_services_servicesContainer_items">
              <HeadsetMicOutlinedIcon sx={{ fontSize: 50 }} />
              <p>24 X 7 Free Support</p>
              <span>Call us at any time</span>
            </div>
            <div className="homepage_services_servicesContainer_items">
              <HeadsetMicOutlinedIcon sx={{ fontSize: 50 }} />
              <p>24 X 7 Free Support</p>
              <span>Call us at any time</span>
            </div>
            <div className="homepage_services_servicesContainer_items">
              <HeadsetMicOutlinedIcon sx={{ fontSize: 50 }} />
              <p>24 X 7 Free Support</p>
              <span>Call us at any time</span>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
