import classNames from 'classnames/bind';
import apiConfig from '~/api/apiConfig';
import Slider from '~/components/Slider/Slider';
import { SwiperSlide, Swiper } from 'swiper/react';
import styles from './InfoFilm.module.scss';

const cx = classNames.bind(styles);

const InfoFilm = ({ data }) => {
    return (
        <div className={cx('container')}>
            <div className={cx('poster')}>
                <img src="https://image.tmdb.org/t/p/original/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg" alt="image" />
            </div>
            <div className={cx('content')}>
                <h3 className={cx('movie-name')}>Dragon and boy</h3>
                <div className={cx('info')}>
                    <h4 className={cx('title')}>Overview</h4>
                    <p>
                        A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil
                        enough to join them, with the backup of his followers, the Minions.
                    </p>
                </div>
                <div className={cx('info')}>
                    <h4 className={cx('title')}>Nation</h4>
                    <p>United States of America</p>
                </div>
                <div className={cx('info')}>
                    <h4 className={cx('title')}>Release date</h4>
                    <p>2022-06-29</p>
                </div>
                <div className={cx('info')}>
                    <h4 className={cx('title')}>Casts</h4>
                    <div className={cx('list-cast')}>
                        {/* <img src={`${apiConfig.url_image}/${data.poster_path}`} />
                        <img src={`${apiConfig.url_image}/${data.poster_path}`} />
                        <img src={`${apiConfig.url_image}/${data.poster_path}`} />
                        <img src={`${apiConfig.url_image}/${data.poster_path}`} />
                        <img src={`${apiConfig.url_image}/${data.poster_path}`} />
                        <img src={`${apiConfig.url_image}/${data.poster_path}`} />
                        <img src={`${apiConfig.url_image}/${data.poster_path}`} />
                        <img src={`${apiConfig.url_image}/${data.poster_path}`} />
                        <img src={`${apiConfig.url_image}/${data.poster_path}`} />
                        <img src={`${apiConfig.url_image}/${data.poster_path}`} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default InfoFilm;
