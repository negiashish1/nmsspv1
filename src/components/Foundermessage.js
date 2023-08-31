import "./foundermessage.css";
import ME from '../assets/me--1.png';
function Foundermessage() {
    return (
        <div>
            <section class="footer py-5 bg-dark text-white">
                <div class="container text-center">
                    <div class="row"> 
                    <h1> Message From Founder</h1>
                        <div class="col-md-4">
                            <div class="me"> 
                                <img src={ME} alt="me" width= "200" height= "200"/>
                            </div>
                        </div>
                        <div class="col-md-8">
                            
                            <p>नारायणी सेवा शक्ति संगठन के संस्थापक के रूप में, हम महिलाओं को उनके अधिकारों में मदद करते हैं और हमारी उत्तराखंड राज्य की संस्कृति को बढ़ावा देते के लिए, महिला स्वयंसेविकाओं की मदद से कार्यक्रमों का आयोजन और प्रबंधन करते हैं। हम गरीब बच्चों के लिए मुफ्त ट्यूशन क्लास आयोजित करते हैं ताकि हम उन्हें हर संभाव तरीके से उच्चतम स्तर तक उत्थान करने में मदद कर सकें। हम अन्य लोगों को हमारे संस्थान में शामिल होने की स्वागत करते हैं।
                            </p>
                            <h3>                                                                         संतोषी मडवाल</h3>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Foundermessage;