import Taro from "@tarojs/taro";
import { ECard, EPage, ETabBar, ETitleBar, ENavbar, EPanel } from "miao-ui";
import { View, Image } from "@tarojs/components";

const tabs = [
    {
        badge: true,
        icon: "hot",
        title: "首页"
    },
    {
        badge: false,
        icon: "info",
        title: "喵喵喵"
    },
    {
        badge: 99,
        icon: "repeal",
        title: "嗷嗷嗷",
        action: true
    },
    {
        badge: 8,
        icon: "weunblock",
        title: "啾啾啾"
    },
    {
        icon: "video",
        title: "丢丢丢"
    }
];

const defaultTabs = [
    {
        badge: true,
        icon: "hot",
        title: "首页"
    },
    {
        badge: false,
        icon: "info",
        title: "喵喵喵"
    },
    {
        badge: 99,
        icon: "repeal",
        title: "嗷嗷嗷"
    }
];

const imgTabs = [
    {
        badge: true,
        img:
            "https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/list_head/423.jpg",
        title: "首页"
    },
    {
        badge: false,
        img:
            "https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/list_head/422.jpg",
        title: "个人中心"
    },
    {
        badge: 99,
        img:
            "https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/list_head/421.jpg",
        title: "设置"
    }
];

const actionTabs = JSON.parse(JSON.stringify(defaultTabs)).map(
    (item, index) => {
        index === 0 && (item.action = true);
        return item;
    }
);

export default function TabBar() {

    const headerView = <ENavbar boxShow>Text</ENavbar>

    return (
        <View>
            <EPage renderHeader={headerView}>
                <EPanel
                    // title='Icon'
                    className="bg-gray"
                    description="Icon 布局"
                    uri='/pages/demos/grid'
                    headerBorder
                    clearFixBottom
                >
                    <ETabBar className="margin-b-10" active={1} tabs={defaultTabs} />




                    <ETabBar className="margin-b-10" active={1} bgColor="light-cyan" tabs={defaultTabs} />



                    <ETabBar
                        className="margin-b-10"
                        active={1}
                        bgColor="light-cyan"
                        activeColor="black"
                        tabs={defaultTabs}
                    />
                    <ETabBar
                        active={1}
                        className="margin-b-10"
                        bgColor="light-cyan"
                        activeColor="black"
                        tabs={actionTabs}
                    />
                    <ETabBar className="margin-b-10" active={1} tabs={imgTabs} />
                </EPanel>
                <ETabBar active={1} bgColor="black" activeColor="gray" fix tabs={tabs} />
            </EPage>

        </View>

    );
}

TabBar.config = {
    navigationBarTitleText: "TabBar 标签栏"
};
