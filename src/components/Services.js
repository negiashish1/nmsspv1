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
                                        <h5 class="card-title">Uplifting Household Women</h5>
                                        <p>Household women, often relegated to domestic roles, constitute a significant part of the population that remains underrepresented and underserved. Our organization recognizes the inherent strength and potential of these women and is dedicated to unlocking their capabilities. Through a series of meetings and workshops, the organization provides a platform for women to gather, share experiences, and build supportive networks. These events focus on skill development, financial literacy, health awareness, and self-esteem enhancement. By fostering an environment of shared learning and empowerment, the organization equips household women with the tools needed to assert themselves in various aspects of life such as economic independence, making informed decisions, or advocating for their rights.</p>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <BiCheck className="service__list-icon"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Empowering Underprivileged Children</h5>
                                        <p>The future of any society lies in the hands of its children. Narayani Mahila Shakti Sangathan acknowledges the potential of underprivileged children and is committed to nurturing their growth. Through engaging workshops and interactive sessions, the organization strives to enhance the educational opportunities available to these children. The workshops cover a range of subjects including academic skills, life skills, and creative expression. By empowering underprivileged children with knowledge and skills, the organization aims to break the cycle of poverty and provide them with the means to lead fulfilling lives.</p>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <BiCheck className="service__list-icon"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Cultural Promotion</h5>
                                        <p>Uttarakhand, renowned for its diverse and enchanting culture, is an integral part of the organization's identity. Recognizing the importance of preserving and promoting this heritage, Narayani Mahila Shakti Sangathan organizes open functions and cultural events that showcase the unique traditions, music, dance, art, and cuisine of the region. These events serve not only to celebrate the culture of Uttarakhand but also to foster cross-cultural understanding and appreciation. By participating in these events, the global community gains insights into the rich tapestry of Uttarakhand's cultural identity, thus promoting a deeper sense of unity and respect among different cultures.</p>
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