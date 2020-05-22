import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export const Container = styled.View`
    flex-direction : row;
    background-color : white;
    width : 90%;
    align-self : center;
    align-items : center;
    padding : 5px 10px;
    margin-top : 14px;
    border-radius : 20px;
`;

export const Title = styled.Text`
    flex : 1;
    font-size : 16px;
`;

export const ContainerIcon = styled.TouchableOpacity`
    padding : 4px;
`;

export const Icone = styled(Icon)`
`;