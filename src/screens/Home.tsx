import { useNavigation } from '@react-navigation/native'
import { Button, Text, View } from 'react-native'
import { TNavigationScreenProps } from '../Routes';
import { Header } from '../shared/components/Header';
import { Footer } from '../shared/components/Footer';
import { BaseInput } from '../shared/components/BaseInput';

export const HomePage = () => {
    const navigation  = useNavigation<TNavigationScreenProps>();

    return <>
        <Header name='Wilson Santos' />

        <View style={{ flex: 1 }} />

        <Footer>
            <BaseInput label='Nome' asButton onPress={() => navigation.navigate('setUserName')}>
                <Text style={{ fontFamily: 'extraBold' }} >Footer</Text>
            </BaseInput>
        </Footer>
    </>
}