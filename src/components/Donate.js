import { ToastContainer, toast} from 'react-toastify';

function Donate() {

    const notify = () => toast("नमस्ते, काम प्रगति में है");

    return (
        <div>
            <section class="message py-5">
                {/* <div class="container h-100"> */}
                <div class="container text-center">
                    <div class="row h-100 align-items-center">
                        <div class="col-md-12 text-center">
                            <button class="btn btn-primary" onClick={notify}>दान करने के लिए क्लिक करें! धन्यवाद</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Donate;