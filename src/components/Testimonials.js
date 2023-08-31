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
        name: 'Ashish Negi',
        review: 'शानदार काम!! ऐसे ही जारी रखें'
    },
    {
        avatar: AVTR2,
        name: 'Shivani Madwal',
        review: 'एक शानदार माँ होने के नाते, आपका कर्तव्य घर पर समाप्त नहीं होता! अन्य बच्चों की भी आपकी आवश्यकता होती है। आपके बच्चे होने पर गर्व है।'
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

            <SwiperSlide>Slide 2</SwiperSlide> <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
        </>);
        }
export default Testimonials;