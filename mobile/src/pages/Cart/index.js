import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
import {
  Container,
  ProductDetails,
  ProductItem,
  ProductImage,
  ProductTitle,
  ProductPrice,
  Product,
  ProductDelete,
  ProductControl,
  ProductAmount,
  ProductControlButton,
  ProductSubTotal,
  TotalContainer,
  TotalAmount,
  TotalText,
  Order,
  OrderText,
  EmptyContainer,
  EmptyText,
  EmptySubText,
} from './styles';

Icon.loadFont();

export default function Cart() {
  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sumTotal, product) => {
        return sumTotal + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {products.length ? (
        <>
          {products.map(product => (
            <Product key={String(product.id)}>
              <ProductItem>
                <ProductImage source={{ uri: product.image.url }} />
                <ProductDetails>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductPrice>{formatPrice(product.price)}</ProductPrice>
                </ProductDetails>
                <ProductDelete
                  onPress={() =>
                    dispatch(CartActions.removeFromCart(product.id))
                  }>
                  <Icon name="delete-forever" size={24} color="#7159c1" />
                </ProductDelete>
              </ProductItem>
              <ProductControl>
                <ProductControlButton onPress={() => decrement(product)}>
                  <Icon
                    name="remove-circle-outline"
                    size={24}
                    color="#7159c1"
                  />
                </ProductControlButton>
                <ProductAmount>{product.amount}</ProductAmount>
                <ProductControlButton onPress={() => increment(product)}>
                  <Icon name="add-circle-outline" size={24} color="#7159c1" />
                </ProductControlButton>
                <ProductSubTotal>{product.subtotal}</ProductSubTotal>
              </ProductControl>
            </Product>
          ))}
          <TotalContainer>
            <TotalText>Total</TotalText>
            <TotalAmount>{total}</TotalAmount>
            <Order>
              <OrderText>FINALIZAR PEDIDO</OrderText>
            </Order>
          </TotalContainer>
        </>
      ) : (
          <EmptyContainer>
            <Icon name="remove-shopping-cart" size={100} color="#999" />
            <EmptyText>O carrinho está vazio!</EmptyText>
            <EmptySubText>
              Explore os produtos da loja e adicione os produtos que desejar
          </EmptySubText>
          </EmptyContainer>
        )}
    </Container>
  );
}
