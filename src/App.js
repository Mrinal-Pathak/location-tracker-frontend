import './App.css';
import Footer from './components/Footer';
import GettingLocation from './components/GettingLocation';
import LocationShare from './components/LocationShare';
import { useState, useEffect } from 'react';

const serverUrl = "https://3d90-2409-40e4-65-7725-1485-b557-52dd-9438.ngrok-free.app";

function App() {
  const [ipAddress, setIPAddress] = useState('');
  const [serverStatus, setServerStatus] = useState(false);

  useEffect(() => {
    const fetchIPAddress = async () => {
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        setIPAddress(ipData.ip);
      } catch (error) {
        console.error('Failed to fetch IP address:', error);
      }
    };

    fetchIPAddress();
  }, []);

  useEffect(() => {
    if (ipAddress) {
      const postIPAddress = async () => {
        try {
          const postData = { ip: ipAddress };

          const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
          };

          const response = await fetch(`${serverUrl}/api/servertest`, requestOptions);

          if (!response.ok) {
            setServerStatus(true);
            throw new Error('Network response was not ok');
          }

          const resdata = await response.json();
          console.log(resdata);
          setServerStatus(false);
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
          setServerStatus(true);
        }
      };

      postIPAddress();
    }
  }, [ipAddress]);

  return (
    <div>
      <h1 style={{
        textAlign: "center",
        border: "2px solid black",
        padding: "10px",
        background: "black",
        color: "white"
      }}>Location Tracker</h1>
      {serverStatus&& (
        <h3 style={{
          margin:"10px",
          textAlign:"center",
          color:"red"
        }}>Warning: Server is Down!</h3>
      )}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}>
        <LocationShare serverUrl={serverUrl} />
        <GettingLocation serverUrl={serverUrl} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
