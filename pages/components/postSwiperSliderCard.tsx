import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import Image from 'next/image';
import {TiChevronRight} from "react-icons/ti";

// @ts-ignore
const PostSwiperSliderCard = ({post}) => {
    // @ts-ignore
    return (

        <div className={`card border p-2 rounded shadow transition`}>
            <div>
                <div className={`p-2`}>
                    <Link href={`post/${post.id}`}>
                        <Image
                            src={'https://www.mehrdadshirvan.ir/public/images/mehrdad-shirvan-1.jpg'}
                            alt="Picture of the author"
                            width={500}
                            height={500}
                            quality={50}
                        />
                    </Link>
                </div>
            </div>
            <div className={`p-2`}>
                <p style={{minHeight: '51px'}} className={`mb-4`}>
                    <Link href={`/post/${post.id}`}
                          className={`text-decoration-none text-secondary font-15 text-justify`}>
                        {post.title.substring(0, 40)}...
                    </Link>
                </p>
                <p className={`mb-0 text-start `}>
                    <Link href={`/post/${post.id}`}
                          className={`bg-green-300 hover:bg-green-700 text-white font-xs font-bold py-2 px-2 rounded transition ease-in-out `}>
                        <span>
                        Show more
                            <TiChevronRight className={`inline-block`}/>
                        </span>
                    </Link>
                </p>
            </div>
        </div>

    );
};

export default PostSwiperSliderCard;