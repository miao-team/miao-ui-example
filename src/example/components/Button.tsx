
import { View } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";

import classNames from 'classnames'
import { EPanel, EGrid, EButton, EDivider, EPage, ENavbar } from 'miao-ui'
import "../index.scss";
export default class Button extends Component {


    render() {
        const headerView = <View className="header"><ENavbar boxShow>Button 演示</ENavbar></View>

        return (
            <EPage renderHeader={headerView}>
                <EPanel
                    
                    className="bg-white"
                    headerBorder
                    clearFixBottom
                >

                    <EDivider className="margin-y-10" size={12}>Size 属性</EDivider>
                    <EGrid col={4} gap={10}>
                        <EButton size="mini">mini</EButton>
                        <EButton size="small">small</EButton>
                        <EButton >normal</EButton>
                        <EButton size="large">large</EButton>
                    </EGrid>
                    <EDivider className="margin-y-10" size={12}>样式属性</EDivider>
                    <EGrid col={4} gap={10}>
                        <EButton size="small" circle>circle</EButton>
                        <EButton size="small" outline>outline</EButton>
                        <EButton size="small" inline>inline</EButton>
                        <EButton size="small" disabled>disabled</EButton>
                    </EGrid>
                    <EDivider className="margin-y-10" size={12}>色彩属性</EDivider>
                    <EGrid col={4} gap={10}>


                        {[
                            'red',
                            'orange',
                            'yellow',
                            'olive',
                            'green',
                            'cyan',
                            'blue',
                            'purple',
                            'mauve',
                            'pink',
                            'brown',
                            'black',
                            'gary',
                            'white',
                        ].map((item, key) => {
                            return <EButton size="small" type={item} circle>{item}</EButton>
                        })}

                    </EGrid>

                </EPanel>
            </EPage>
        );
    }
}
