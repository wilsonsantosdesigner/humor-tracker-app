import { useNavigation } from '@react-navigation/native'
import { Button, Text } from 'react-native'
import { TNavigationScreenProps } from '../Routes';

export const HomePage = () => {

    const { navigate } = useNavigation<TNavigationScreenProps>();

    return <>
    <Text style={{ fontFamily: 'extraBold'}} >Home</Text>
        <Button title='Go to Detail' onPress={() => navigate('detail', { rate: 5 })}/>
        <Button title='Go to Set User Name' onPress={() => navigate('setUserName')}/>
    </>
}