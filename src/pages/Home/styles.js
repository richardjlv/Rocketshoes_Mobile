import { darken } from 'polished';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  background: #191920;
`;

export const ProductList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})``;

export const ProductItem = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Title = styled.Text`
  color: #333;
  font-size: 16px;
`;

export const Price = styled.Text`
  font-size: 21px;
  color: #333;
  font-weight: bold;
  margin: 5px 0 20px;
`;

export const ButtonAddProduct = styled(RectButton)`
  background: #7159c1;
  align-items: center;
  flex-direction: row;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, '#7159c1')};
  align-items: center;
  flex-direction: row;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const ProductAmountItems = styled.Text`
  color: #eee;
  margin-left: 5px;
`;

export const AddProduct = styled.Text`
  flex: 1;
  text-align: center;
  color: #eee;
`;
