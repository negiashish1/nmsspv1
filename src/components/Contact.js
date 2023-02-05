import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BiCheck } from 'react-icons/bi'
import { AiFillFacebook } from 'react-icons/ai';

// import { solid, regular, brands, icon} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to

function Contact() {
    return (
        <div>
            <section class="message py-5" id="getintouch">
                <FontAwesomeIcon icon="fa-solid fa-check-square" />
                <div class="container text-center">
                    <FontAwesomeIcon icon="fa-solid fa-check-square" />
                    <h1>Lets get in touch</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora incidunt at error vero ducimus eos adipisc</p>
                    {/* <Font Awesome Icon icon="fa-solid fa-check-square" /> */}
                    {/* <FontAwesome Icon icon="fa-solid fa-tricycle" /> */}
                    <BiCheck className='service list-icon' />
                    <div class="container text-center">
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                        <p>+91 996808XXXX</p>
                        <p>www.text.com</p>
                        <AiFillFacebook />
                        <FontAwesomeIcon icon="fa-solid fa-check-square" />
                        <FontAwesomeIcon icon="fa-brands" />
                        <FontAwesomeIcon icon="fa-solid fa-check-square" />
                        <button class="btn btn-primary">Download</button>
                        {/* <FontAwesome Icon icon={solid('user-secret')} />
                        <FontAwesome Icon icon="fa-solid fa-check-square" />
                        <FontAwesome Icon icon={regular('coffee')} />
                        <FontAwesome Icon icon={icon({name: 'coffee', style: 'solid'})} />
                        <FontAwesome Icon icon={brands('twitter')} /> */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;