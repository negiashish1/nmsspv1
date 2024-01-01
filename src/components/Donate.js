import { ToastContainer, toast} from 'react-toastify';
import ME from '../assets/donation_scanner.jpg';

function Donate() {

    const notify = () => toast("नमस्ते, काम प्रगति में है");

    return (
        <div>
            <section class="message py-5">
                <div class="container text-center">
                {/* <div class="row h-100 align-items-center">
                        <div class="col-md-12 text-center">
                            <button class="btn btn-primary" onClick={notify}>दान करने के लिए क्लिक करें! धन्यवाद</button>
                        </div>
                    </div> */}
                    <div class="row"> 
                    <h1>दान करने के लिए क्यूआर कोड स्कैन करें! धन्यवाद</h1>
                        <div class="col-md-4">
                            <div class="me"> 
                                <img src={ME} alt="me" width= "200" height= "200"/>
                            </div>
                        </div>
                        <div class="col-md-8">
                            {/*<p>नारायणी महिला शक्ति संगठन उत्तराखंड, भारत, और उससे परे में आशा और परिवर्तन की प्रकाशक के रूप में खड़ा है। उनके प्रयासों के माध्यम से, मीटिंगों, कार्यशालाओं, और खुले कार्यक्रमों की आयोजन में, संगठन घरेलू महिलाओं के समृद्धि की ओर प्रामुखता से काम कर रहा है, गरीब बच्चों के सशक्तिकरण की दिशा में अपने प्रयास कर रहा है, और उत्तराखंड की सांस्कृतिक धरोहर को बढ़ावा देने में सहायक हो रहा है। समावेशी और समग्र दृष्टिकोण को अपनाकर, वे एक भविष्य की प्रेरणा देते हैं जहां महिलाएँ सफलता प्राप्त करती हैं, बच्चे विकसित होते हैं, और सांस्कृतिक विविधता का समर्थन किया जाता है, जिससे समृद्धि और समानता से भरपूर समाज की नींव रखी जा सके। हम अन्य लोगों को हमारे संस्थान में शामिल होने की स्वागत करते हैं।
                            </p>*/}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Donate;