import '../styles/Cart.css'

const prixMonstera = 8;
const prixLierre = 10;
const prixBouquet = 15;

function Cart(){
    return(
        <div className="lmj-cart">
            <h2>Panier</h2>
            <ul>
                <li>Monstera {prixMonstera}$</li>
                <li>Lierre {prixLierre}$</li>
                <li>Bouquet {prixBouquet}$</li>
            </ul>
            <p>Total : {prixMonstera + prixLierre + prixBouquet}$</p>
        </div>
    )
}

export default Cart