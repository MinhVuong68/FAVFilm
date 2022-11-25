import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

const Slider = () => {
    return (
        <Swiper
            // install Swiper modules
            grabCursor={true}
            spaceBetween={5}
            slidesPerView={'auto'}
        >
            <SwiperSlide>
                <img src="https://image.tmdb.org/t/p/original/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://image.tmdb.org/t/p/original/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://image.tmdb.org/t/p/original/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://image.tmdb.org/t/p/original/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://image.tmdb.org/t/p/original/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://image.tmdb.org/t/p/original/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://image.tmdb.org/t/p/original/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://image.tmdb.org/t/p/original/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://image.tmdb.org/t/p/original/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://image.tmdb.org/t/p/original/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
