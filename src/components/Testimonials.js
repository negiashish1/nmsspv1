import './testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import AVTR1 from './girl.png'
import AVTR2 from './girl.png'
import AVTR3 from './girl.png'
import AVTR4 from './girl.png'

// import Swiper core and required modules
const data = [
    {
        avatar: AVTR1,
        name: 'Goofi Frank',
        review: 'Shivani is such a lovely and passionate partner. I can\'t thank my destiny enough for finding me such a'
    },
    {
        avatar: AVTR2,
        name: 'Sean Jones',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit inventore alias a perspiciatis eum molliti'
    },
    {
        avatar: AVTR3,
        name: 'Ashish Negi',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit inventore alias a perspiciatis eum molliti'
    },
    {
        avatar: AVTR4,
        name: 'Reviewer',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit inventore alias a perspiciatis eu'
    }
];
const Testimonials = () => {
    return (
        <>
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >

                { data.map( user => {
                    <SwiperSlide key={user.name} className="slide">
                        <div className="slide-content">
                            <h5>{user.name}</h5>
                        </div>
                    </SwiperSlide>
                })};

            {/* <SwiperSlide>Slide 2</Swiperslide> <SwiperSlide>Slide 3</SwiperSlide>*/}
        ...
        </Swiper>
        </>);
        }
export default Testimonials;