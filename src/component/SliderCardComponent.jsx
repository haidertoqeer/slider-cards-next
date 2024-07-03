'use client'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAnkh, faBook, faSquareFacebook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import 'swiper/swiper-bundle.css';

const SliderCardComponent = ({ item }) => {

    if (!item) {
        return <div>Loading...</div>; // Or any appropriate fallback
    }
    const { userImage, userName, userProfession, facebookUrl, twitterUrl, instagramUrl, linkedinUrl, contactText } = item;

    return (
        <div className="card-item swiper-slide">
            <img src={userImage} alt="User Image" className="user-image" />
            <h2 className="user-name">{userName}</h2>
            <p className="user-profession">{userProfession}</p>
            <p className="social-links">
                <a href={facebookUrl}>
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href={twitterUrl}>
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href={instagramUrl}>
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href={linkedinUrl}>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </p>
            <button className="gradient-border-button">{contactText}</button>
        </div>
    );
};


export default SliderCardComponent