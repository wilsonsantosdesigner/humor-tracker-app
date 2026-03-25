import { useNavigation } from '@react-navigation/native'
import { Button, Text, View } from 'react-native'
import { TNavigationScreenProps } from '../Routes';
import { Header } from '../shared/components/Header';
import { Footer } from '../shared/components/Footer';

export const HomePage = () => {
    const { navigate } = useNavigation<TNavigationScreenProps>();

    return <>
        <Header name='Wilson Santos' />

        <View style={{ flex: 1}} />
        
        <Footer>
            <Text style={{ fontFamily: 'extraBold'}} >Home</Text>
        </Footer>
    </>
}