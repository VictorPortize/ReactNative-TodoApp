import React from 'react'

import { Container, Title, SubTitle } from './styles'

const EmptyList : React.FC = () => {

    return (
        <Container>
            <Title>Sem items</Title>
            <SubTitle>Toque o ícone na parte superior direita para adicionar</SubTitle>
        </Container>
    )
}

export default EmptyList