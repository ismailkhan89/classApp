import {  Platform ,I18nManager} from 'react-native'
import i18n from 'i18n-js';
import { en } from './translations/en'
import { ar } from './translations/ar'

import AsyncStorage from '@react-native-async-storage/async-storage';

i18n.initAsync = async () => {
    i18n.translations = { en , ar };
    const lang = await AsyncStorage.getItem('resonate-language')
    // const lang = null
    if(lang === null) {
        await AsyncStorage.setItem('resonate-language','en')
        i18n.locale = 'en';
    }
    else{

        i18n.locale = lang;
    }
    i18n.fallbacks = true;
    await I18nManager.forceRTL(false);
}


export default i18n