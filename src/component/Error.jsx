import { useNavigate } from 'react-router-dom'
import '../style/index.css'
export default function Error(){
    let nav=useNavigate()
 
    return (<>
            <div>
                <img id="errorimg" src="https://hummingweb.com.au/wp-content/uploads/2023/03/404-page-not-found.jpg" alt="" />
                <button onClick={()=>nav("/Home")} id="errorbutton">GO BACK HOME</button>
            </div>
    </>)
}