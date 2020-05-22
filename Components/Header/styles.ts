import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const Container = styled.View`
    flex-direction : row;
    align-items : center;
    justify-content : space-between;
    padding-left : 20px;
    border-bottom-width : ${ StyleSheet.hairlineWidth }px;
`;

export const ContainerBack = styled.View`
    flex-direction : row;
    align-items : center;
`;

export const Title = styled.Text`
    font-size : 20px;
    color : white;
    font-weight : bold;
`;