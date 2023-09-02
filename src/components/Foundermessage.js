import "./foundermessage.css";
import ME from '../assets/me--1.png';
import { useEffect, useState } from 'react';

function Foundermessage() {

    const [data, setData] = useState([]);

    useEffect(() => {
    fetch('https://nmss-backend1.onrender.com/foundermessage')
    .then(response => response.json())
    .then(result => {
      // Now 'result' contains the parsed JSON data
      console.log('before result');
      console.log(result);
      // Store the JSON data in the 'data' state variable
      setData(result); 
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, []);

    return (
        data.map((post) => (
        <div>
            <section class="footer py-5 bg-dark text-white">
                <div class="container text-center">
                    <div class="row"> 
                    <h1>संस्थापक का संदेश</h1>
                        <div class="col-md-4">
                            <div class="me"> 
                                <img src={ME} alt="me" width= "200" height= "200"/>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <p>{post.founderMessage}
                            </p>
                            <h3>-                                                                         {post.founderName}</h3>
                        </div>
                    </div>

                </div>
            </section>
        </div>
        ))
    );
}

export default Foundermessage;