import React from 'react'
import {
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from '../../styles'
import {
  TitleHeader,
} from '../../components'
import {
  IconEgg
} from '../../components/Icon'

const Component = ({ navigation }) => {
  const {t, i18n} = useTranslation()
  return (
    <SafeAreaView style={[styles.containerSafeAreaView, styles.bgWhiteDark]}><ScrollView style={[styles.containerScrollView]}>
      <TitleHeader 
        title={t('menu_more_info').toUpperCase()} 
        leftIcon="back" leftPress={() => navigation.goBack()}
      />
      <View style={[styles.containerCenter]}>

        <View style={{marginTop:50, marginBottom:20}}>
          <IconEgg style={{width:70, height:70}} />
        </View>
        <Text style={{textAlign:'center'}}>{t('no_location_info')}</Text>

      </View>
    </ScrollView></SafeAreaView>
  )
}

export default Component
