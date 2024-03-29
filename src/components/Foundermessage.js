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
                            {/* <p>{post.founderMessage}
                            </p>
                            <h3>-                                                                         {post.founderName}</h3> */}
                            <p>नारायणी महिला शक्ति संगठन उत्तराखंड, भारत, और उससे परे में आशा और परिवर्तन की प्रकाशक के रूप में खड़ा है। उनके प्रयासों के माध्यम से, मीटिंगों, कार्यशालाओं, और खुले कार्यक्रमों की आयोजन में, संगठन घरेलू महिलाओं के समृद्धि की ओर प्रामुखता से काम कर रहा है, गरीब बच्चों के सशक्तिकरण की दिशा में अपने प्रयास कर रहा है, और उत्तराखंड की सांस्कृतिक धरोहर को बढ़ावा देने में सहायक हो रहा है। समावेशी और समग्र दृष्टिकोण को अपनाकर, वे एक भविष्य की प्रेरणा देते हैं जहां महिलाएँ सफलता प्राप्त करती हैं, बच्चे विकसित होते हैं, और सांस्कृतिक विविधता का समर्थन किया जाता है, जिससे समृद्धि और समानता से भरपूर समाज की नींव रखी जा सके। हम अन्य लोगों को हमारे संस्थान में शामिल होने की स्वागत करते हैं।
                            </p>
                            <h3>-                                                                         संतोषी मडवाल</h3>
                        </div>
                    </div>

                </div>
            </section>
        </div>
        ))
    );
}

export default Foundermessage;