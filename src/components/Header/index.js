import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import { Container, Logo, LogoImage, Cart, CartAmount } from './styles';

export function Header({ navigation }) {
  const { navigate } = navigation;

  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Logo
        onPress={() => {
          navigate('Home');
        }}>
        <LogoImage />
      </Logo>
      <Cart
        onPress={() => {
          navigate('Cart');
        }}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <CartAmount>{cartSize || 0}</CartAmount>
      </Cart>
    </Container>
  );
}
