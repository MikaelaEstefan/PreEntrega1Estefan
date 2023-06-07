import './CartWidget.css'

const CartWidget = () => {
    const carrito = "CartWidget.png"
  return (
    <div>
        <img className='carrito' src={carrito} alt="Imágen del Carrito" />
        <strong> 10 </strong>
    </div>
  )
}

export default CartWidget