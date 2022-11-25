import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import A from '../../../../src/assets/logo.png';

const cx = classNames.bind(styles);

const footer = [];

const Footer = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('w-left')}></div>
            <div className={cx('w-center')}>
                <div className={cx('info')}>
                    <span>Họ và tên: </span>
                    <span>Nguyễn Minh Vương</span>
                </div>
                <div className={cx('info')}>
                    <span>Email: </span>
                    <span>minhvuong06082001@gmail.com</span>
                </div>
                <div className={cx('info')}>
                    <span>Số điện thoại: </span>
                    <span>0899306681</span>
                </div>
            </div>
            <div className={cx('w-right')}>1</div>
        </div>
    );
};

export default Footer;
