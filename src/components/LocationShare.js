import React, { useEffect, useState } from 'react'


const LocationShare = (props) => {
  const [code, setCode] = useState("");
  const [isSendingLocation,setIsSendingLocation]=useState(false)
  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => resolve(position),
        error => reject(error)
      );
    });
  };


  // for adding the new location
  const handleClick = async () => {
    setIsSendingLocation(true);
    

    try {

      let position = await getCurrentPosition();
      // Data to be sent in the POST request (in JSON format)
      const postData = {
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      };

      // POST request options
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      };

      // Make the POST request
      const response = await fetch(`${props.serverUrl}/api/addlocation`, requestOptions);

      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the JSON response
      const data = await response.json();

      setCode(data.key);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
    
  }


  //for deleting the location

  const stopSharing=async()=>{

    setIsSendingLocation(false)
    try {
      // delete request options
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({key:code})
      };
      // Make the POST request
      const response = await fetch(`${props.serverUrl}/api/deletelocation`, requestOptions);

      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the JSON response
      const data = await response.json();
      console.log(data);
      setCode("");
      
    } catch (error) {
      
    }
  }

  //for updating the location
  
  useEffect(()=>{
    const sendLocation=setInterval(async() => {
      
      if(isSendingLocation){
        try {

          let position = await getCurrentPosition();
          // Data to be sent in the POST request (in JSON format)
          const postData = {
            key:code,
            longitude: position.coords.longitude,
            latitude: position.coords.latitude
          };
    
          // POST request options
          const requestOptions = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
          };
    
          // Make the POST request
          const response = await fetch(`${props.serverUrl}/api/updatelocation`, requestOptions);
    
          // Check if the request was successful
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          // Parse the JSON response
          // const data = await response.json();
    
          // console.log(data)
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
      }else{
        clearInterval(sendLocation)
      }
    }, 1000);
    return () => {
      clearInterval(sendLocation);
    }  },[isSendingLocation,code,props.serverUrl]);


  return (
    <div className='conatainer' style={{
      
    }}>
      {!code && (<><h2>Share your location</h2>
        <button onClick={handleClick}>Share</button></>)}
      {code && (<><h2>Your code is:{code}</h2>
      <button onClick={stopSharing}>Stop Sharing</button>
      </>)}
    </div>
  )
}

export default LocationShare