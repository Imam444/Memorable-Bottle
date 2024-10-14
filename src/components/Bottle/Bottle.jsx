import './Bottle.css';

const Bottle = ({bottle,handleAddToCart}) => {
   const {name, img, price} = bottle;
    return (
        <div className="bottle">
            <h2>Bottle:{name}</h2>
            <img src={img} alt=""/>
            <p>price${price}</p>
            <button onClick={()=>handleAddToCart(bottle)}>purchase</button>
        </div>
    );
};

export default Bottle;