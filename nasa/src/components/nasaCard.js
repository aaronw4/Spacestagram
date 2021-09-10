import React, {useContext} from 'react';
import { nasaContext } from '../context/nasaContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solid} from '@fortawesome/free-solid-svg-icons';
import { faHeart as regular} from '@fortawesome/free-regular-svg-icons';

const NasaCard = (props) => {
    let photoData = useContext(nasaContext)
    return (
        <div>
            {!(props.date in photoData) ? 
                <div>Loading</div>
                :
                <div>
                    <header>
                        <h1 className='title'>{photoData[props.date]['title']}</h1>
                        <p className='date'>{props.date}</p>
                        <a href='https://www.nasa.gov/'>
                            <img className='symbol' src='https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg'/>
                        </a>
                    </header>
                    <a href={photoData[props.date]['hdurl']} target="_blank">
                        <img className='image' src={photoData[props.date]['url']}/>
                    </a>
                    <FontAwesomeIcon icon={regular} size="2x" className='font'/>
                    <p className='explanation'>{photoData[props.date]['explanation']}</p>
                </div>
            }
        </div>
    )
}

export default NasaCard