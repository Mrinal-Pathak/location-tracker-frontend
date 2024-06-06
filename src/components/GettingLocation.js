import React, { useEffect, useState } from 'react'
import Map from './Map';



const GettingLocation = (props) => {
    const [key,setKey]=useState();
    const [longitude, setLongitude] = useState();
    const [latitude, setLatitude] = useState();
    const [isGetting, setIsGetting] = useState(false);
    const [loadMap, setLoadMap] = useState(false);
    const [notFoundMsg, setNotFoundMsg] = useState(false);

    useEffect(() => {
        let data=null;
        const startTaking = setInterval(async() => {
            if (isGetting) {
                try {
                    
                    // POST request options
                    const requestOptions = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        
                    };
                    // console.log(props.serverUrl)
                    // Make the POST request
                    const response = await fetch(`${props.serverUrl}/api/getlocation/${key}`, requestOptions);

                    // Check if the request was successful
                    if (!response.ok) {
                        setNotFoundMsg(true);
                        setTimeout(() => {
                            setNotFoundMsg(false)
                        }, 5000);
                        throw new Error('Network response was not ok');
                    }

                    // Parse the JSON response
                    data = await response.json();
                    setLongitude(data.longitude);
                    setLatitude(data.latitude);
                    setLoadMap(true);
                    // console.log(data)
                } catch (error) {
                    setNotFoundMsg(true);
                    setTimeout(() => {
                        setNotFoundMsg(false)
                    }, 5000);
                    console.error('There was a problem with the fetch operation:', error);
                    setIsGetting(false);
                    
                }
            } else {
                clearInterval(startTaking);
                
            }
        }, 1000);
        return () => {
            clearInterval(startTaking);
            
        }
    }, [isGetting,key,props.serverUrl]);

    const getLocation=()=>{
      
            setIsGetting(true);
  
    }
    const handleChange=(event)=>{
        setKey(event.target.value)
    }
    const stoplocating=()=>{
        setLoadMap(false)
        setIsGetting(false);
        setLongitude();
        setLatitude();
    }
    return (
        <div className='conatainer' style={{
            
        }}>
            
            {!isGetting&&(<><h2>Enter your code here</h2>
            <input type="number" id="keyInput" value={key} onChange={handleChange}/>
            <button onClick={getLocation}>Find</button></>)}
            {notFoundMsg&&(<h4 id='notfound' style={{color:"red"}}>Invaild Code!</h4>)}
            {/* {isGetting&&(<><p>{longitude}</p>
            <p>{latitude}</p></>)} */}
            {isGetting&&loadMap&&(<><h2>Key is: {key}</h2><Map longitude={longitude} latitude={latitude}/>
            <button onClick={stoplocating}>Stop</button>
            </>)}
        </div>
    )
}

export default GettingLocation