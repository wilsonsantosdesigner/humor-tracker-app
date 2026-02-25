import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native'
import { TNavigationScreenProps } from '../Routes';

export const HomePage = () => {

    const { navigate } = useNavigation<TNavigationScreenProps>();

    return <>
        <Button title='Go to Detail' onPress={() => navigate('detail', { rate: 5 })}/>
    </>
}