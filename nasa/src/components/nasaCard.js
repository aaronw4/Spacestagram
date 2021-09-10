import React, {useContext} from 'react';
import { nasaContext } from '../context/nasaContext';

const NasaCard = (props) => {
    let photoData = useContext(nasaContext)
    console.log(photoData)
    return (
        <div>
            <img src={photoData[props.date]['url']}/>
        </div>
    )
}

export default NasaCard