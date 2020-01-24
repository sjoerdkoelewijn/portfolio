import React from 'react';
import styles from "../styles/modules/hirebtn.module.scss";
import { Link } from "gatsby"


const Hire = () => {

  return (
    <Link className={styles.hire__btn} role="button" to="/contact/" aria-label="hire-me" tabIndex="0">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FE5862"/>
            <circle cx="12" cy="12" r="12" fill="url(#paint0_linear)"/>
            <path d="M22.1836 23.5912L15.4749 22.0817C14.6382 21.8935 14.4112 20.8083 15.1022 20.3003L19.8941 16.7783C20.4266 16.3869 21.1856 16.6105 21.4209 17.2281L23.3376 22.2596C23.6215 23.0048 22.9616 23.7662 22.1836 23.5912Z" fill="#FE5862"/>
            <path d="M22.1836 23.5912L15.4749 22.0817C14.6382 21.8935 14.4112 20.8083 15.1022 20.3003L19.8941 16.7783C20.4266 16.3869 21.1856 16.6105 21.4209 17.2281L23.3376 22.2596C23.6215 23.0048 22.9616 23.7662 22.1836 23.5912Z" fill="url(#paint1_linear)"/>
            <rect x="17.4541" y="7.45459" width="1.81818" height="10.9091" rx="0.909091" transform="rotate(90 17.4541 7.45459)" fill="white"/>
            <rect x="17.4541" y="11.0908" width="1.81818" height="10.9091" rx="0.909091" transform="rotate(90 17.4541 11.0908)" fill="white"/>
            <rect x="12.9092" y="14.7271" width="1.81818" height="6.36364" rx="0.909091" transform="rotate(90 12.9092 14.7271)" fill="white"/>
            <defs>
                <linearGradient id="paint0_linear" x1="-2.01246" y1="5.96491" x2="12.3315" y2="25.5563" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF5C97"/>
                    <stop offset="1" stop-color="#FE5862" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="12.4396" y1="17.9883" x2="16.6717" y2="25.6955" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF5C97"/>
                    <stop offset="1" stop-color="#FE5862" stop-opacity="0"/>
                </linearGradient>
            </defs>
        </svg>
        Hire Me
    </Link>
  )
  
};

export default Hire 