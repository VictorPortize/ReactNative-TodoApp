import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get(`window`)

export const Container = styled.View`
    width : 85%;
    border-width : 1px;
    border-color : white;
    align-self : center;
    padding : 8px 15px;
    margin-top : 50px;
`;

export const Title = styled.Text`
    color : white;
    font-size : 20px;
    font-weight : bold;
    align-self : center;
`

export const SubTitle = styled.Text`
    color : white;
    font-size : 12px;
    text-align : center;
`