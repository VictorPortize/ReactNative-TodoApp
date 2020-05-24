import styled from 'styled-components/native'
import { Animated, Dimensions } from 'react-native'
import Icone from 'react-native-vector-icons/Ionicons'
import Ic from 'react-native-vector-icons/MaterialIcons'

const { width } = Dimensions.get('window')

export const inputDistance = -width * 0.15;
export const outputDistance = -width * 0.15;
export const Container = styled.TouchableOpacity`
    margin-top : 10px;
    border-radius : 10px;
    align-self : center;
    width : ${ width * 0.8}px;
    overflow : hidden;
`;
export const ContainerAnimation = styled( Animated.View )`
    background-color : white;
    border-radius : 10px;
`
export const ContainerTodo = styled.TouchableOpacity`
    background-color : white;
    flex-direction : row;
    justify-content : space-between;
    padding : 10px 20px;
    border-radius : 10px;
    align-items : center;
`
export const ContainerDelete = styled.View`
    background-color : red;
    flex-direction : row;
    width : ${ width * 0.17 }px;
    border-top-right-radius : 10px;
    border-bottom-right-radius : 10px;
    flex : 1;
    height : 100%;
    position : absolute;
    z-index : -1;
    top : 0;
    right : 0;
    align-items : center;
    justify-content : center;
`
export const Title = styled.Text`
    font-size : 16px;
    font-weight : bold;
    width : 90%;
`;
export const Icon = styled(Icone)`
    padding-left : 10px;
`;
export const Ico = styled(Ic)`
    padding : 5px 10px;
`;