import './CategoryHolder.css';
import Category from './Category';
import vegetables from '../../aserts/images/vegetables.png';
import breads from '../../aserts/images/breads.png';
import dailyEssentials from '../../aserts/images/dailyEssentials.png';
import meat from '../../aserts/images/meat.png';

function CategoryHolder(){
    // const [category,setCategory] = useState([]);
    const categories = [
        { id: "vegetables",name:"vegetables",image: vegetables},
        {id: "breads", name:"breads",image:breads},
        {id: "dailyEssentials",name:"dailyEssentials",image: dailyEssentials},
        { id: "meat",name:"meat",image: meat},
    ]
    return(
        <div className='category-holder'>
            <div className='container'>
                <div className='category-holder-wrapper'>
                    {
                        categories.map((item)=>{
                            return <Category key={item.id} name={item.name} image={item.image} price={item.price} offer={item.offer}></Category>
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default CategoryHolder;