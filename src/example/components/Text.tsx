import { View } from "@tarojs/components";
import Taro, { Component, pxTransform } from "@tarojs/taro";
import { EPanel, EText, ELayout, ENavbar, ECard } from 'miao-ui'
import "../index.scss";

import size from "../constant/size";
import color from "../constant/color";

const sizeTip = [
    "说明文本，标签等关注度低的文字",
    "页面辅助信息，次级内容等",
    "页面默认字体",
    "同上",
    "页面小标题，第一层级内容显示",
    "页面大标题，用于结果页的提示信息",
    "用于金额数字等",
    "用于图标或者大数字",
    "用于特大提示"
];

export default class Text extends Component {



    render() {


        const sizeComponent = size.fontSize.map((item, index) => (
            <View key={item}>
                <ECard bgColor="grey">
                    <EText text={sizeTip[index]} size={item} />

                </ECard>
            </View>
        ));
        const colorComponent = color.normalColor.map(item => (
            <ECard key={item.title} bgColor="light-gray">
                <EText textColor={item.title}>{item.title}</EText>
            </ECard>
        ));

        const headerView = <View className="header"><ENavbar shadow>Text</ENavbar></View>




        return (
            <ELayout renderHeader={headerView}>
                <EPanel
                    title='Text Size演示'
                    className="bg-white"
                    description="Icon 布局"
                    headerBorder
                    clearFixBottom
                >
                    {sizeComponent}
                </EPanel>

                <EPanel
                    title='Text Color演示'
                    className="bg-white"
                    description="Icon 布局"
                    headerBorder
                    clearFixBottom
                >
                    {colorComponent}
                </EPanel>
                <EPanel
                    title='Text 文字截断演示'
                    className="bg-white"
                    description="Icon 布局"
                    headerBorder
                >
                    <ECard bgColor="grey">
                        <View style={{ width: pxTransform(300) }}>
                            <EText cut align="left">
                                泰国、新加坡、印度尼西亚~{" "}
                            </EText>
                        </View>
                    </ECard>
                </EPanel>


            </ELayout>

        );
    }
}
