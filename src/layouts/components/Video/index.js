import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';
import styles from './Video.module.scss';

const cx = classNames.bind(styles);

const Video = ({ id }) => {
    const iframeRef = useRef();
    useEffect(() => {
        window.scrollTo(0, 0);
        const height = (iframeRef.current.offsetWidth * 9) / 13 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);
    return (
        <iframe
            src={`https://2embed.org/embed/${id}`}
            title="video"
            width="100%"
            ref={iframeRef}
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
    );
};

export default Video;
