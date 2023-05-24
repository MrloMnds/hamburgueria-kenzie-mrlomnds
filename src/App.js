import logo from "./img/logo.svg";
import { useEffect, useState } from "react";
import { api } from "./services/api.js";
import { StyledButton } from "./components/Buttons/index.jsx";
import { StyledCard } from "./components/Card/index.jsx";
import { StyledHeading } from "./styles/components/Headings/index.jsx";
import { StyledList } from "./components/ProductsList/index.jsx";
import { Container, Header } from "./styles/global.js";
import { Cart } from "./components/ProductsCart/index.jsx";
import { StyledInput } from "./components/Input";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchList, setSearchList] = useState([]);

  const addProductToCart = (productData) => {
    !cart.includes(productData) && setCart([...cart, productData]);
  };
  const removeProductFromCart = (productId) => {
    const newList = cart.filter((product) => product.id !== productId);
    setCart(newList);
  };
  const removeAllProductsFromCart = () => {
    setCart([]);
  };
  const search = (event) => {
    const toast = () => <li>toast</li>; // Fazer funcao de toast
    const input = event.target.offsetParent.firstElementChild;
    const filter = products.filter(
      (element) =>
        element.name.includes(input.value) ||
        element.category.includes(input.value)
    );
    filter.length !== 0 ? setSearchList(filter) : toast();
  };
  const resetProducts = (event) => {
    event.target.value.length === 0 && setSearchList(products);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get("products");
        const productsList = response.data;
        setProducts(productsList);
        setSearchList(productsList);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="App">
      <Header>
        <img src={logo} alt="" />
        <div className="divInput">
          <StyledInput
            placeholder="Digitar Pesquisa"
            onChange={(event) => resetProducts(event)}
          />
          <StyledButton
            buttonSize="medium"
            buttonStyle="green"
            position="absolute"
            onClick={(event) => search(event)}
          >
            Buscar
          </StyledButton>
        </div>
      </Header>

      <Container>
        <StyledList>
          {searchList.map((product) => (
            <StyledCard key={product.id} id={product.id}>
              <div className="imgDiv">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="infoDiv">
                <StyledHeading tag="h3" fontSize="three">
                  {product.name}
                </StyledHeading>
                <p>{product.category}</p>
                <span>R$ {product.price.toFixed(2)}</span>
                <StyledButton
                  onClick={() => addProductToCart(product)}
                  buttonSize="medium"
                  buttonStyle="green"
                >
                  Adicionar
                </StyledButton>
              </div>
            </StyledCard>
          ))}
        </StyledList>
        <Cart
          cart={cart}
          removeProductFromCart={removeProductFromCart}
          removeAllProductsFromCart={removeAllProductsFromCart}
        ></Cart>
      </Container>
    </div>
  );
}

export default App;
