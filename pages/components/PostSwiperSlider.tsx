import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import PostSwiperSliderCard from "./postSwiperSliderCard";
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {BsBookmarks} from "react-icons/bs";

// @ts-ignore
const PostSwiperSlider = ({posts, title, slidesPerView = 5,className=''}) => {
    return (
        <div className={`mb-4 ${className}`}>
            <div className={`row mb-3`}>
                <h3 className={`font-18 font-bold`}>
                    <BsBookmarks className={`inline-block text-green-800`}/>
                    {title}
                </h3>
            </div>
            <Swiper spaceBetween={20}
                    slidesPerView={slidesPerView}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        },
                        // when window width is >= 980
                        980: {
                            slidesPerView: 5,
                            spaceBetween: 10
                        }
                    }}
                    pagination={{clickable: true}}
            >
                {/* eslint-disable-next-line react/jsx-key */}
                {posts.map((post: any) => <SwiperSlide><PostSwiperSliderCard post={post}/></SwiperSlide>)}
            </Swiper>

        </div>
    );
};

export default PostSwiperSlider;