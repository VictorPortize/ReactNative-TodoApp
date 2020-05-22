import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import { Container } from './styles'

interface Props {
    onPress : Function
}

const AddItem : React.FC<Props> = ({ onPress }) => {

    return (
        <Container onPress={ onPress }>
            <Icon name='md-add' size={20} color='white' />
        </Container>
    )
}

export default AddItem