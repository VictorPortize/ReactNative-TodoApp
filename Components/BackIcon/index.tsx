import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import { Container } from './styles'

interface Props {
    onPress : Function
}

const BackIcon : React.FC<Props> = ({ onPress }) => {

    return (
        <Container onPress={ onPress }>
            <Icon name='md-arrow-back' size={20} color='white' />
        </Container>
    )
}

export default BackIcon