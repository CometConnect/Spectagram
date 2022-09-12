import React, { FC } from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Theme } from '../../types'
import style from './CustomDrawerStyles'

const CustomDrawer: FC<DrawerContentComponentProps & { theme: Theme }> = ({ theme, ...props }) => {
    const styles = new style(theme)
    return (
<DrawerContentScrollView
    style={styles.container}
    contentContainerStyle={styles.content}
    indicatorStyle={"white"}
>
    <DrawerItemList {...props} />
</DrawerContentScrollView>
    )
}

export default CustomDrawer