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
                            
                            <p>lorem:500testcalasDefuicbuibciuebcuibceyciubuycvbiuwbvyeivctwuycvbuivyecbyicwbviuwvbw
                                cuiewcbyeibeuwivbweuivbewiucbewc
                                bcyegcuiwevniovev
                                kbvuwibvuiewvbuei
                            </p>
                            <h3>....... Santoshi Madwal</h3>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Foundermessage;