import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  margin: 15px;
  padding: 10px;
  border-radius: 4px;
`;

export const Product = styled.View``;

export const ProductItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 10px;
  margin-left: 10px;
  margin-right: 5px;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  color: #333;
  font-size: 18px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductDelete = styled.TouchableOpacity``;

export const ProductControl = styled.View`
  background: #eaeaea;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  padding: 8px;
  margin: 10px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  editable: false,
})`
  color: #333;
  background: #fff;
  min-width: 52px;
  padding: 0 5px;
  margin: 0 5px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

export const ProductSubTotal = styled.Text`
  flex: 1;
  text-align: right;
  font-size: 18px;
  font-weight: bold;
  margin-right: 5px;
`;

export const TotalContainer = styled.View`
  margin-top: 30px;
  flex-direction: column;
  align-items: center;
`;

export const TotalAmount = styled.Text`
  color: #333;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const TotalText = styled.Text`
  color: #666;
  font-size: 16px;
  text-transform: uppercase;
`;

export const Order = styled(RectButton)`
  width: 100%;
  padding: 12px;
  background: #7159c1;
  border-radius: 4px;
  margin: 0 10px;
`;

export const OrderText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16px;
`;

export const EmptyContainer = styled.View`
  align-items: center;
  padding: 20px;
`;

export const EmptyText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

export const EmptySubText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #666;
  margin-top: 10px;
`;
