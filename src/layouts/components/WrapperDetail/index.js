import classNames from 'classnames/bind';
import styles from './WrapperDetail.module.scss';

const cx = classNames.bind(styles);

const WrapperDetail = ({ children }) => {
    return <div className={cx('wrapper')}>{children}</div>;
};

export default WrapperDetail;
