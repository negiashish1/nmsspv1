import "./navbar.css";
import {BiCheck} from 'react-icons/bi';

function Services(){
    return (
        <div>
            <section class="services" id='services'>
                <div class="container text-center py-5">
                    <h1>About our services</h1>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card">
                                <BiCheck className="service__list-icon"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Card Title</h5>
                                        <p>This is the text for the card. You can consider this the card body.</p>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <BiCheck className="service__list-icon"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Card Title</h5>
                                        <p>This is the text for the card. You can consider this the card body.</p>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <BiCheck className="service__list-icon"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Card Title</h5>
                                        <p>This is the text for the card. You can consider this the card body.</p>
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