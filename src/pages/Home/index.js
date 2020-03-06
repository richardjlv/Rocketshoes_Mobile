import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
import {
  Container,
  ProductList,
  ProductImage,
  Title,
  Price,
  ButtonAddProduct,
  ProductAmount,
  ProductItem,
  AddProduct,
  ProductAmountItems,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, [])
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handlerAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function renderProducts() {
    return (
      <ProductList
        horizontal
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <ProductItem key={item.id}>
            <ProductImage source={{ uri: item.image }} />
            <Title>{item.title}</Title>
            <Price>{item.priceFormatted}</Price>

            <ButtonAddProduct
              onPress={() => {
                handlerAddProduct(item.id);
              }}>
              <ProductAmount>
                <Icon name="add-shopping-cart" color="#FFF" size={20} />
                <ProductAmountItems>{amount[item.id] || 0}</ProductAmountItems>
              </ProductAmount>

              <AddProduct>ADICIONAR</AddProduct>
            </ButtonAddProduct>
          </ProductItem>
        )}
      />
    );
  }

  return <Container>{renderProducts()}</Container>;
}
