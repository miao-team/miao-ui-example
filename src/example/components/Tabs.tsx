import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { ECard, ELayout, ETabs, ETitleBar, ETabNav } from "miao-ui";

function gen(item, index) {
    return {
        text: `标签 ${index + 1}`,
        id: `id-${index}`
    };
}

const defaultTabs = [...new Array(10)].map(gen);

const verbTabs = [
    {
        text: "标签 1",
        id: "verb-1"
    },
    {
        text: "标签 2",
        id: "verb-2"
    },
    {
        text: "标签 3",
        id: "verb-3"
    }
];

const iconTabs = [
    {
        text: "标签 1",
        icon: "emoji",
        id: "icon-1"
    },
    {
        text: "标签 2",
        icon: "addressbook",
        id: "icon-2"
    },
    {
        text: "标签 3",
        icon: "discoverfill",
        id: "icon-3"
    }
];

export default function Tabs() {
    return (
        <ELayout>

            <ETabs
                bgColor="white"
                className=" text-md"

                tabs={defaultTabs}>
                {defaultTabs.map(item => (
                    <View key={item.id} id={item.id}>
                        {item.text}
                    </View>
                ))}
            </ETabs>

            <ETabNav
                bgColor="white"
                className=" text-md"
                activeColor="red"
                tabs={defaultTabs} />

            <ETabNav
                bgColor="white"
                activeColor="green"
                className=" text-md"
                activeClass="text-lg"
                tabs={defaultTabs} />

            <ETitleBar
                className="marginn-t-10"
                title="内容可拖动"
                textColor="black"
                type="icon"
                subTitle="default"
            />
            <ECard>

            </ECard>

            <ETitleBar title="平分" textColor="black" type="icon" subTitle="verb" />
            <ECard>
                <ETabs tabs={verbTabs} type="verb">
                    {verbTabs.map(item => (
                        <View key={item.id} id={item.id}>
                            {item.text}
                        </View>
                    ))}
                </ETabs>
            </ECard>

            <ETitleBar
                title="居中"
                textColor="black"
                type="icon"
                subTitle="center"
            />
            <ECard>
                <ETabs
                    tabs={verbTabs.map(item => ({
                        text: item.text,
                        id: item.id + "-1"
                    }))}
                    type="center"
                >
                    {verbTabs.map(item => (
                        <View key={item.id} id={item.id + "-1"}>
                            {item.text}
                        </View>
                    ))}
                </ETabs>
            </ECard>

            <ETitleBar
                title="激活色&背景色"
                textColor="black"
                type="icon"
                subTitle="activeColor&bgColor"
            />
            <ECard>
                <ETabs
                    tabs={verbTabs.map(item => ({
                        text: item.text,
                        id: item.id + "-2"
                    }))}
                    type="center"
                    activeColor="red"
                    bgColor="black"
                >
                    {verbTabs.map(item => (
                        <View key={item.id} id={item.id + "-2"}>
                            {item.text}
                        </View>
                    ))}
                </ETabs>
            </ECard>

            <ETitleBar
                title="带图标"
                textColor="black"
                type="icon"
                subTitle="icon"
            />
            <ECard>
                <ETabs className="bg-white" tabs={iconTabs} type="center">
                    {iconTabs.map(item => (
                        <View key={item.id} id={item.id}>
                            {item.text}
                        </View>
                    ))}
                </ETabs>
            </ECard>
        </ELayout>
    );
}

Tabs.config = {
    navigationBarTitleText: "Tabs 标签页"
};
