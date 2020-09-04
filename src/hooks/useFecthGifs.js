import {useState, useEffect} from 'react'
import {getGifs} from '../helpers/getGifs'


export const useFetchGifs = (category) => {
    const [state, setState] = useState( {
        data: [],
        loading: true
    });

    //queremos que se dispare la función unicamente cuando cambia
    useEffect( () => {
        getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading:false
                });
            })
    }, [category])

    return state; // el estate es {data: [], loading: true}
}