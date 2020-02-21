import { View } from "@tarojs/components";
import Taro, { Component, Config } from "@tarojs/taro";
import { EPanel, ELayout, ENavbar, ETag } from 'miao-ui'
import "../index.scss";

const tags = [
    {
        text: "文明",
        color: "light-blue"
    },
    {
        text: "和谐",
        color: "brown"
    },
    {
        text: "民主",
        color: "brown",
        plain: true
    }
];
export default class Tag extends Component {
    config = {
        navigationBarTitleText: "Tag 标签"
    };
    render() {
        const headerView = <View className="header"><ENavbar shadow>Text</ENavbar></View>
        return (
            <ELayout renderHeader={headerView}>
                <EPanel
                    title='Icon'
                    className="bg-white"
                    description="Tag 组件"
                    uri="#"
                    headerBorder
                    clearFixBottom
                >


                    <ETag tags={tags.slice(0, 1)} shape="radius" />
                    <ETag tags={tags.slice(0, 1)} shape="normal" />
                    <ETag tags={tags.slice(0, 1)} shape="round" />
                    <ETag className="margin-10" tags={[{
                        text: "2323232323",
                        color: "black",
                        plain: true
                    }]} shape="round" />



                    <ETag tags={tags.slice(0, 1)} shape="radius" size="small" />
                    <ETag tags={tags.slice(0, 1)} shape="radius" size="normal" />


                    <ETag tags={tags} shape="radius" size="normal" />

                    <ETag tags={tags} shape="normal" size="normal" />

                    <ETag tags={tags} shape="round" size="normal" />

                    <ETag
                        tags={tags}
                        shape="round"
                        size="normal"
                        onClick={(item, index) => {
                            Taro.showToast({
                                title: JSON.stringify(item),
                                icon: "none"
                            });
                        }}
                    />
                </EPanel>
            </ELayout>

        );
    }
}



