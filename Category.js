import './Category.css'; 
import {useNavigate} from "react-router-dom";

function Category (props){
    const navigate = useNavigate()
    function productHandler (){
        navigate(`${props.name}`);
    }
    return(
        <div className='category' onClick={productHandler}>
            <div className='image-area'>
                <img src={props.image}/>
            </div>
            <div className='detail-area'>
                <div className='detail'>{props.name}</div>
                <div className='detail'>{props.price}</div>
                <div className='detail'>{props.offer}</div>
            </div>

        </div>
    )
}
export default Category;