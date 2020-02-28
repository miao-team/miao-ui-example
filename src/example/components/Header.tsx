import { View } from "@tarojs/components";
import Taro, { Component, Config } from "@tarojs/taro";
import { MLayout, MNavbar, MPanel, MGrid MButton } from 'miao-ui'
import { classNames } from "miao-ui/utils"
import "../index.scss";
export default class Header extends Component {
    config: Config = {
        navigationBarTitleText: "Header"
    };

    render() {
        const headerView = <MNavbar shadow>Icon 演示</MNavbar>
        return (
            <MLayout
                disable
                header={headerView}
            >
                <MPanel
                    title='NavBar'
                    className="bg-white padding-5"
                    description="图标配色"
                    headerBorder
                    rightLink={{
                        text: '更多图标配色',
                        url: '###'
                    }}
                    clearFixBottom
                >
                    <MNavbar shadow>Icon 演示</MNavbar>
                </MPanel>
            </MLayout>
        )
    }
}
