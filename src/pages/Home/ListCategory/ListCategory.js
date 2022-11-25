import ListFilm from './ListFilm';
import { useEffect } from 'react';
const ListCategory = ({ data }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return data.map((film) => {
        return <ListFilm film={film} type={film.type} />;
    });
};

export default ListCategory;
