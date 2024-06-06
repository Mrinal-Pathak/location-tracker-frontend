import React, { useEffect, useRef } from 'react';


const mapKey=process.env.REACT_APP_MAP_KEY
const Map = (props) => {
    const mapElement = useRef(null);
    
    useEffect(() => {
        const tt = window.tt;
        console.log(mapKey)
        const map = tt.map({
            key: mapKey,
            container: mapElement.current, // Element to attach the map to
            center: [props.longitude, props.latitude], // Initial map center in [lng, lat]
            zoom: 10 // Initial zoom level
        });
        var marker = new tt.Marker()
                .setLngLat([props.longitude,props.latitude])
                .addTo(map);
            console.log(marker)

        return () => map.remove(); // Clean up the map when the component unmounts
    }, [mapKey,props.longitude,props.latitude]);

    return <div ref={mapElement} style={{ width: '100%', height: '400px' }}></div>;
};

export default Map;
