import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import WrapperDetail from '~/layouts/components/WrapperDetail';
import Video from '~/layouts/components/Video';
import InfoFilm from '~/layouts/components/InfoFilm';
import favFilmApi from '~/api/favFilmApi';

const DetailFilm = () => {
    const [data, setData] = useState({});
    const { idname } = useParams();
    useEffect(() => {
        const getDetailMovieById = async () => {
            try {
                const response = await favFilmApi.getMovieById(idname);
                console.log(response);
                setData(response);
            } catch (error) {
                console.log('error');
            }
        };
        getDetailMovieById();
    }, [idname]);
    return (
        <WrapperDetail>
            <Video id={idname} />
        </WrapperDetail>
    );
};

export default DetailFilm;
