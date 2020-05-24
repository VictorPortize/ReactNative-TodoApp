import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get(`window`)

export const Container = styled.View`
    width : 85%;
    border-width : 1px;
    border-color : #28847e;
    align-self : center;
    padding : 8px 15px;
    border-radius : 10px;
`;

export const Title = styled.Text`
    color : #28847e;
    font-size : 20px;
    font-weight : bold;
    align-self : center;
`

export const SubTitle = styled.Text`
    color : #28847e;
    font-size : 12px;
    text-align : center;
`