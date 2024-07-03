'use client'
import "./global.css";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SliderCardComponent from "@/component/SliderCardComponent";

const data = [
    {
        "userName": "Sophia Hernandez",
        "userProfession": "Marketing Manager",
        "userImage": "assets/img/img-1.jpg",
        "facebookUrl": "#",
        "twitterUrl": "#",
        "instagramUrl": "#",
        "linkedinUrl": "#",
        "contactText": "Contact Me"
    },
    {
        "userName": "James Smith",
        "userProfession": "Project Manager",
        "userImage": "assets/img/img-2.jpg",
        "facebookUrl": "#",
        "twitterUrl": "#",
        "instagramUrl": "#",
        "linkedinUrl": "#",
        "contactText": "Contact Me"
    },
    {
        "userName": "Emma Johnson",
        "userProfession": "Software Engineer",
        "userImage": "assets/img/img-3.jpg",
        "facebookUrl": "#",
        "twitterUrl": "#",
        "instagramUrl": "#",
        "linkedinUrl": "#",
        "contactText": "Contact Me"
    },
    {
        "userName": "Liam Brown",
        "userProfession": "Data Scientist",
        "userImage": "assets/img/img-4.jpg",
        "facebookUrl": "#",
        "twitterUrl": "#",
        "instagramUrl": "#",
        "linkedinUrl": "#",
        "contactText": "Contact Me"
    },
    {
        "userName": "Olivia Lee",
        "userProfession": "Financial Analyst",
        "userImage": "assets/img/img-5.jpg",
        "facebookUrl": "#",
        "twitterUrl": "#",
        "instagramUrl": "#",
        "linkedinUrl": "#",
        "contactText": "Contact Me"
    },
    {
        "userName": "Ava Patel",
        "userProfession": "Graphic Designer",
        "userImage": "assets/img/img-6.jpg",
        "facebookUrl": "#",
        "twitterUrl": "#",
        "instagramUrl": "#",
        "linkedinUrl": "#",
        "contactText": "Contact Me"
    }
]

export default function Home() {
    return (
        <div className="container swiper">
            <div className="container swiper">
                <div className="slider-wrapper">
                    <div className="card-list swiper-wrapper">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={3}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                        >
                            {data && data.length > 0 && data.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <SliderCardComponent item={item} />
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                </div>
            </div>

        </div>
    );
}
