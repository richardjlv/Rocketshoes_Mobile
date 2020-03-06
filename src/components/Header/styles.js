import { darken } from 'polished';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  background: ${darken(0.03, '#191920')};
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.TouchableOpacity`
  width: 185px;
`;

export const LogoImage = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;
export const Cart = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
`;

export const CartAmount = styled.Text`
  color: #fff;
  text-align: center;
  background: #7159c1;
  font-size: 12px;
  top: -8px;
  right: -8px;
  padding: 2px;
  min-width: 18px;
  min-height: 18px;
  border-radius: 9px;
  position: absolute;
`;
