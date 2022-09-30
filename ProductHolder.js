import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import './ProductHolder.css';

function ProductHolder(){
    let params = useParams();
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        fetch('https://6315ba3c33e540a6d382dcca.mockapi.io/' + params.category).then((response)=>{
            if(response.ok){
                return response.json();
            }return false
        }).then((data)=>{
            setProduct(data)
        })
    },[])
    return (
        <div className="productHolder">
            <div className="container">
                <div className="productHolderWrapper">
                   {
                    product.map((item)=>{
                       return  <Product key={item.id} image={item.image} name={item.name} price={item.price} offer={item.offer} ></Product>
                    })
                   } 
                </div>
            </div>
        </div>
    )
}
export default ProductHolder;