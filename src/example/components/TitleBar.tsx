

import { View } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";

import classNames from 'classnames'
import { EPanel, ECard, ETitleBar, EPage, ENavbar } from 'miao-ui'
import "../index.scss";
export default class TitleBar extends Component {

    config = {
        navigationBarTitleText: "TitleBar 购物栏"
    };
    render() {
        const headerView = <View className="header"><ENavbar boxShow>TitleBar</ENavbar></View>

        return (
            <EPage renderHeader={headerView}>
                <EPanel
                    title='TitleBar'
                    className="bg-white"
                    description="Grid 布局"
                    uri='/pages/demos/grid'
                    bodyClassName="bg-grey"
                    headerBorder
                    clearFixBottom
                >

                    <ETitleBar
                        title="背景色&文字颜色"
                        textColor="black"
                        type="sub-title"
                        renderRight={<View className="111">121212</View>}
                        subTitle="bgColor&textColor"
                    />
                    <ECard className="bg-white margin-t-10">
                        <ETitleBar
                            bgColor="green"
                            title="标准背景色"
                            textColor="white"
                            borderColor="white"
                        />
                        <ETitleBar
                            bgColor="light-blue"
                            title="浅色背景色"
                            textColor="black"
                            borderColor="blue"
                        />
                        <ETitleBar
                            bgColor="gradualBlue"
                            title="渐变背景色"
                            textColor="white"
                            borderColor="white"
                        />
                    </ECard>

                    <ETitleBar
                        title="类型"
                        textColor="black"
                        type="icon"
                        subTitle="type"
                    />
                    <ECard>
                        <ETitleBar
                            title="突出线"
                            type="border-title"
                            textColor="blue"
                            borderColor="light-blue"
                        />
                    </ECard>

                    <ECard>
                        <ETitleBar
                            title="子标题"
                            subTitle="childTitle"
                            type="sub-title"
                            textColor="blue"
                            subTitleColor="red"
                        />
                    </ECard>
                    <ECard>
                        <ETitleBar
                            type="icon"
                            title="标题带图标"
                            icon="likefill"
                            iconColor="red"
                            textColor="blue"
                        />
                    </ECard>
                </EPanel>
            </EPage>

        );
    }
}
