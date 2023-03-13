import './App.css'
import {useEffect, useRef, useState} from "react";
import * as tt from '@tomtom-international/web-sdk-maps'

const App = () => {
    const mapElement = useRef()
    const [map, setMap] = useState({})
    const [longitude, setLongitude] = useState(-2.983333)
    const [latitude, setLatitude] = useState(53.400002)

    useEffect(() => {
        let map = tt.map({
            key: process.env.REACT_APP_TON_TON_API_KEY,
            container: mapElement.current,
            stylesVisibility: {
                trafficIncidents: true,
                trafficFlow: true
            },
            center: [longitude, latitude],
            zoom: 10
        });
        setMap(map)
        return () => map.remove()
    }, [longitude, latitude])
    return (
        <div className="app">
            <div ref={mapElement} className='map'>
                <div className="search=-bar">
                    <h1>Where to?</h1>
                    <input id="longitude" className="longitude" placeholder="Put in Longitude"
                           onChange={event => setLongitude(event.target.value)}/>
                    <input id="latitude" className="latitude" placeholder="Put in Latitude"
                           onChange={event => setLatitude(event.target.value)}/>
                </div>
            </div>
        </div>
    );
}

export default App
