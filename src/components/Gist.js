import "./footer.css";
import { ToastContainer, toast} from 'react-toastify';

function Gist(){

    const notify = () => toast("Namaste");
    return (
    <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer/>
    </div>
    );
}

export default Gist;