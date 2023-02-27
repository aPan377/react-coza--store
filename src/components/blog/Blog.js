import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

import blogImage1 from "../../images/blog-01.jpg";
import blogImage2 from "../../images/blog-02.jpg";
import blogImage3 from "../../images/blog-03.jpg";

import featuredImage1 from "../../images/product-min-01.jpg";
import featuredImage2 from "../../images/product-min-02.jpg";
import featuredImage3 from "../../images/product-min-03.jpg";

import { HiArrowNarrowRight } from "react-icons/hi";

const Blog = () => {
  return (
    <>
      <Navbar />
      <section className="blog">
        <div className="blog--header--image"></div>
        <div className="blog--container">
          <div className="blog--blocks">
            <div className="blog-block">
              <div className="blog--block--image">
                <img src={blogImage1} />
              </div>
              <a>
                <h3>8 Inspiring Ways to Wear Dresses in the Winter</h3>
              </a>
              <p>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec
                dictum vitae sapien eu varius
              </p>
              <div className="blog--block--info">
                <div className="blog--block--author">
                  <p>
                    <span>By</span> Admin
                  </p>
                  <p>StreetStyle, Fashion, Couple</p>
                  <p>8 Comments</p>
                </div>
                <div className="blog--block--continue">
                  Continue reading
                  <HiArrowNarrowRight />
                </div>
              </div>
            </div>
            <div className="blog-block">
              <div className="blog--block--image">
                <img src={blogImage2} />
              </div>
              <a>
                <h3>The Great Big List of Men’s Gifts for the Holidays</h3>
              </a>
              <p>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec
                dictum vitae sapien eu varius
              </p>
              <div className="blog--block--info">
                <div className="blog--block--author">
                  <p>
                    <span>By</span> Admin
                  </p>
                  <p>StreetStyle, Fashion, Couple</p>
                  <p>8 Comments</p>
                </div>
                <div className="blog--block--continue">
                  Continue reading
                  <HiArrowNarrowRight />
                </div>
              </div>
            </div>
            <div className="blog-block">
              <div className="blog--block--image">
                <img src={blogImage3} />
              </div>
              <a>
                <h3>5 Winter-to-Spring Fashion Trends to Try Now</h3>
              </a>
              <p>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec
                dictum vitae sapien eu varius
              </p>
              <div className="blog--block--info">
                <div className="blog--block--author">
                  <p>
                    <span>By</span> Admin
                  </p>
                  <p>StreetStyle, Fashion, Couple</p>
                  <p>8 Comments</p>
                </div>
                <div className="blog--block--continue">
                  Continue reading
                  <HiArrowNarrowRight />
                </div>
              </div>
            </div>
          </div>
          <div className="blog--secondaries">
            <div className="blog--categories">
              <h3>Categories</h3>
              <ul>
                <li>
                  <a>Fashion</a>
                </li>
                <li>
                  <a>Beauty</a>
                </li>
                <li>
                  <a>Street Style</a>
                </li>
                <li>
                  <a>Life Style</a>
                </li>
                <li>
                  <a>DIY & Crafts</a>
                </li>
              </ul>
            </div>
            <div className="featured-products">
              <h3>Featured Products</h3>
              <div className="featured--product">
                <img src={featuredImage1} />
                <div>
                  <p>White Shirt With Pleat Detail Back</p>
                  <p>$19.00</p>
                </div>
              </div>
              <div className="featured--product">
                <img src={featuredImage2} />
                <div>
                  <p>Converse All Star Hi Black Canvas</p>
                  <p>$39.00</p>
                </div>
              </div>
              <div className="featured--product">
                <img src={featuredImage3} />
                <div>
                  <p>Nixon Porter Leather Watch In Tan</p>
                  <p>$17.00</p>
                </div>
              </div>
            </div>
            <div className="blog--archive">
              <h3>Archive</h3>
              <ul>
                <li>
                  <p>July 2023</p>
                  <span>(9)</span>
                </li>
                <li>
                  <p>June 2023</p>
                  <span>(39)</span>
                </li>
                <li>
                  <p>May 2023</p>
                  <span>(29)</span>
                </li>
                <li>
                  <p>April 2023</p>
                  <span>(35)</span>
                </li>
                <li>
                  <p>March 2023</p>
                  <span>(22)</span>
                </li>
                <li>
                  <p>February 2023</p>
                  <span>(32)</span>
                </li>
                <li>
                  <p>January 2023</p>
                  <span>(21)</span>
                </li>
                <li>
                  <p>December 2022</p>
                  <span>(26)</span>
                </li>
              </ul>
            </div>
            <div className="blog--tags">
              <h3>Tags</h3>
              <ul>
                <li>Fashion</li>
                <li>Lifestyle</li>
                <li>Denim</li>
                <li>Streetstyle</li>
                <li>Crafts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
