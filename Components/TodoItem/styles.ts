import styled from 'styled-components/native'
import Icone from 'react-native-vector-icons/Ionicons'
import Ic from 'react-native-vector-icons/MaterialIcons'

export const Container = styled.TouchableOpacity`
    width : 90%;
    background-color : white;
    align-self : center;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
    padding : 10px 20px;
    border-radius : 10px;
    margin-top : 10px;
`;

export const Title = styled.Text`
    font-size : 16px;
    font-weight : bold;
`;


export const ContainerIcon = styled.View`
    flex-direction : row;
    align-items : center;
`;

export const Icon = styled(Icone)`
    padding-left : 10px;
`;

export const Ico = styled(Ic)`
    padding : 5px 10px;
`;