import { StyledHeading } from "../../styles/components/Headings";
import { StyledCart } from "../../styles/components/ProductsCart";
import { StyledButton } from "../Buttons";

export const Cart = ({
  cart,
  removeProductFromCart,
  removeAllProductsFromCart,
}) => {
  return (
    <StyledCart>
      <div className="divTitle">
        <StyledHeading tag="h3" fontSize="three" color="--white">
          Carrinho de compras
        </StyledHeading>
      </div>
      <ul>
        {cart.length !== 0 ? (
          cart.map(({ name, img, id, category }) => (
            <li key={id}>
              <div className="divImgCart">
                <img src={img} alt={name} />
              </div>
              <div className="divInfoCart">
                <StyledHeading fontWeight={700} tag="h3" fontSize="three">
                  {name}
                </StyledHeading>
                <p>{category}</p>
              </div>
              <span onClick={() => removeProductFromCart(id)}>Remover</span>
            </li>
          ))
        ) : (
          <StyledHeading paddingTop={30} tag="h3" fontSize="three">
            Sua sacola está vazia
          </StyledHeading>
        )}
      </ul>
      <div className="divTotalButton">
        <div className="divTotal">
          <StyledHeading fontWeight={600} tag="h4" fontSize="four">
            Total
          </StyledHeading>
          <p>
            R${" "}
            {cart.reduce((acc, current) => acc + current.price, 0).toFixed(2)}
          </p>
        </div>
        <StyledButton
          onClick={() => removeAllProductsFromCart()}
          buttonSize="default"
          buttonStyle="gray"
        >
          Remover todos
        </StyledButton>
      </div>
    </StyledCart>
  );
};
