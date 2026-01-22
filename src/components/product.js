//product component
import img1 from "../assets/images/img1.jpg"
import img2 from "../assets/images/img2.jpg"
import img3 from "../assets/images/img3.jpg"
function Product()
{
  return(
 <div className="products">
           
            <div className="box">
               
                        <img src={img1} alt="villain" />
                        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
            </div>
                
            
            <div className="box">
                <img src={img2} alt="villain" />
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
            </div>
            <div className="box">
                <img src={img3} alt="Designs Club" />
                <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
            </div>

          
            
        </div>
  )}
  export default Product