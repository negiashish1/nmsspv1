import "./navbar.css";
import {BiCheck} from 'react-icons/bi';

function Services(){
    return (
        <div>
            <section class="services" id='services'>
                <div class="container text-center py-5">
                    <h1>हमारी सेवाएँ!</h1>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card">
                                <BiCheck className="service__list-icon"/>
                                    <div class="card-body">
                                        <h5 class="card-title">घरेलू महिलाओं का सशक्तिकरण</h5>
                                        <p>घरेलू महिलाएं, जिन्हें अक्सर घरेलू भूमिकाओं में सीमित किया जाता है, एक महत्वपूर्ण हिस्सा हैं जो अधिकांश समय अप्रतिस्थित और अनसेवित रहते हैं। हमारे संगठन को इन महिलाओं की सहज शक्ति और संभावनाओं की पहचान होती है और हम उनकी क्षमताओं को उन्हें मुक्त करने के लिए समर्पित हैं। मीटिंगों और कार्यशालाओं की एक श्रृंखला के माध्यम से, संगठन महिलाओं के लिए एक मंच प्रदान करता है जहां वे इकट्ठा हो सकती हैं, अपने अनुभव साझा कर सकती हैं, और सहायक नेटवर्क बना सकती हैं। ये घटनाएँ कौशल विकास, वित्तीय साक्षरता, स्वास्थ्य जागरूकता, और आत्मसम्मान वृद्धि पर मुख्य ध्यान देती हैं। साझा ज्ञान और सशक्तिकरण के वातावरण को प्रोत्साहित करके, संगठन घरेलू महिलाओं को उन्हें विभिन्न पहलुओं में अपने आप को साबित करने के लिए आवश्यक उपकरणों से संपन्न करता है, जैसे कि आर्थिक स्वतंत्रता, सुसंगत निर्णय लेना, या अपने अधिकारों की समर्थन करना।</p>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <BiCheck className="service__list-icon"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Empowering Underprivileged Children</h5>
                                        <p>किसी भी समाज का भविष्य उसके बच्चों के हाथ में होता है। नारायणी महिला शक्ति संगठन गरीब बच्चों की संभावनाओं को मानता है और उनके विकास को पोषण देने के लिए समर्पित है। रोचक कार्यशालाओं और सहसंवादिता सत्रों के माध्यम से, संगठन इन बच्चों के लिए उपलब्ध शैक्षिक अवसरों को बढ़ाने का प्रयास करता है। कार्यशालाएँ विभिन्न विषयों की शिक्षा से लेकर जीवन कौशल और रचनात्मक अभिव्यक्ति तक का परिचय प्रदान करती हैं। गरीब बच्चों को ज्ञान और कौशल से सशक्त करके, संगठन गरीबी के चक्र को तोड़ने और उन्हें पूरी जीवनी खोज करने के तरीके प्रदान करने का उद्देश्य रखता है।</p>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <BiCheck className="service__list-icon"/>
                                    <div class="card-body">
                                        <h5 class="card-title">सांस्कृतिक प्रोत्साहन</h5>
                                        <p>उत्तराखंड, जिसकी विविध और मोहक संस्कृति की प्रशंसा होती है, संगठन की पहचान का एक अभिन्न हिस्सा है। इस धरोहर को संरक्षित और प्रोत्साहित करने के महत्व को मानते हुए, नारायणी महिला शक्ति संगठन खुले कार्यक्रम और सांस्कृतिक घटनाओं का आयोजन करता है जो क्षेत्र की अनूठी परंपराओं, संगीत, नृत्य, कला, और वाणिज्यिकता को प्रस्तुत करते हैं। ये घटनाएँ उत्तराखंड की संस्कृति का महत्वपूर्ण हिस्सा मनाने के साथ-साथ समृद्धि और समाज की सभी संस्कृतियों के बीच समझ और प्रशंसा को बढ़ावा देती है। इन घटनाओं में भाग लेने से वैश्विक समुदाय को उत्तराखंड की सांस्कृतिक पहचान की समृद्ध वाणी मिलती है, जिससे विभिन्न संस्कृतियों के बीच एक गहरे एकता और सम्मान की भावना को प्रोत्साहित किया जाता है।</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Services;