import React from "react";
import { Icons } from "../../../assets";
import classNames from "classnames";
import styles from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className={classNames(styles.customContainer)}>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="footer-logo flex flex-col">
            <Icons.powerSportsLogo className="mb-4 hidden md:block" />{" "}
            <a href="#" className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full ">
                <FontAwesomeIcon icon={faFacebook} className="text-white" />
              </div>

              <span>Facebook</span>
            </a>
          </div>
          <div className="ml-4">
            <p className={classNames(styles.footer_heading)}>ABOUT</p>
            <ul className={classNames("footer_list", styles.footer_list)}>
              <li>
                <a href="#">About the Company</a>
              </li>
              <li>
                <a href="#">Why In Search Of Powersports Parts</a>
              </li>
              <li>
                <a href="#">How it Works</a>
              </li>
              <li>
                <a href="#">Getting Paid</a>
              </li>
              <li>
                <a href="#">Shipping & Local Pickup</a>
              </li>
              <li>
                <a href="#">Fee Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className={classNames(styles.footer_heading)}>
              FOR SALE LISTINGS
            </h5>
            <ul className={classNames("footer_list", styles.footer_list)}>
              <li>
                <a href="#">All Listings</a>
              </li>
              <li>
                <a href="#">ATV</a>
              </li>
              <li>
                <a href="#">UTV</a>
              </li>
              <li>
                <a href="#">Watercraft</a>
              </li>
              <li>
                <a href="#">Snowmobile</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className={classNames(styles.footer_heading)}>
              IN SEARCH OF LISTINGS
            </h5>
            <ul className={classNames("footer_list", styles.footer_list)}>
              <li>
                <a href="#">All Listings</a>
              </li>
              <li>
                <a href="#">ATV</a>
              </li>
              <li>
                <a href="#">UTV</a>
              </li>
              <li>
                <a href="#">Watercraft</a>
              </li>
              <li>
                <a href="#">Snowmobile</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className={classNames(styles.footer_heading)}>LEGAL</h5>
            <ul className={classNames("footer_list", styles.footer_list)}>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
              <li>
                <a href="#">Buyer & Seller Obligations</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className={classNames(styles.footer_heading)}>RESOURCES</h5>
            <ul className={classNames("footer_list", styles.footer_list)}>
              <li>
                <a href="#">Help Center (FAQs)</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <div>
              <h5 className={classNames(styles.footer_heading)}>BUSINESSES</h5>
              <ul className={classNames("footer_list", styles.footer_list)}>
                <li>
                  <a href="#">Power Buyers</a>
                </li>
                <li>
                  <a href="#">Power Sellers</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-t-2 border-gray-600" />
        <div className="footer-bottom mt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <span className="mb-2 md:mb-0">
            {" "}
            © Copyright 2024 ISO Powersports Parts. All rights reserved.
          </span>
          <div className="flex space-x-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Refund Policy</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
