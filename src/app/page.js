import Image from "next/image";
import styles from "./page.module.css";
import "./global.css";
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.css';

export default function Home() {
  return (
    <div class="container swiper">
    <div class="slider-wrapper">
        <div class="card-list swiper-wrapper">
            <div class="card-item swiper-slide">
                <img src="assets/img/img-1.jpg" alt="User Image" class="user-image" />
                <h2 class="user-name">Sophia Hernandez</h2>
                <p class="user-profession">Marketing Manager</p>
                <p class="social-links">
                    <a href="#">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                </p>
                <button class="gradient-border-button">Contact Now</button>
            </div>

            <div class="card-item swiper-slide">
                <img src="assets/img/img-2.jpg" alt="User Image" class="user-image" />
                <h2 class="user-name">James Smith</h2>
                <p class="user-profession">Project Manager</p>
                <p class="social-links">
                    <a href="#">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                </p>
                <button class="gradient-border-button">Contact Now</button>
            </div>

            <div class="card-item swiper-slide">
                <img src="assets/img/img-3.jpg" alt="User Image" class="user-image" />
                <h2 class="user-name">Emma Johnson</h2>
                <p class="user-profession">Software Engineer</p>
                <p class="social-links">
                    <a href="#">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                </p>
                <button class="gradient-border-button">Contact Now</button>
            </div>

            <div class="card-item swiper-slide">
                <img src="assets/img/img-4.jpg" alt="User Image" class="user-image" />
                <h2 class="user-name">Liam Brown </h2>
                <p class="user-profession">Data Scientist</p>
                <p class="social-links">
                    <a href="#">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                </p>
                <button class="gradient-border-button">Contact Now</button>
            </div>

            <div class="card-item swiper-slide">
                <img src="assets/img/img-5.jpg" alt="User Image" class="user-image" />
                <h2 class="user-name">Olivia Lee</h2>
                <p class="user-profession">Financial Analyst</p>
                <p class="social-links">
                    <a href="#">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                </p>
                <button class="gradient-border-button">Contact Now</button>
            </div>

            <div class="card-item swiper-slide">
                <img src="assets/img/img-6.jpg" alt="User Image" class="user-image" />
                <h2 class="user-name">Ava Patel</h2>
                <p class="user-profession">Graphic Designer</p>
                <p class="social-links">
                    <a href="#">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                </p>
                <button class="gradient-border-button">Contact Now</button>
            </div>
        </div>
        <div class="swiper-pagination"></div>
            <div class="swiper-slide-button swiper-button-prev"></div>
            <div class="swiper-slide-button swiper-button-next"></div>
    </div>
    </div>
  );
}
