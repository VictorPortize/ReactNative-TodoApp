import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Container, Title, ContainerBack } from './styles'

//Component
import AddItem from '../AddItem'
import BackIcon from '../BackIcon'

interface Props {
    onPress : Function
    title : String
}

const Header : React.FC<Props> = ({ onPress, title }) => {

    const { canGoBack, goBack  } = useNavigation()
    const [ back, setBack ] = useState(false)

    useEffect(() => {
        setBack(canGoBack())
    },[])

    return (
        <Container>
            <ContainerBack>
                { back && <BackIcon  onPress={ goBack } /> }
                <Title>{title}</Title>
            </ContainerBack>
            <AddItem onPress={ onPress } />
        </Container>
    )
}

export default Header