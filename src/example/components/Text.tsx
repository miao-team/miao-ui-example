import { View } from "@tarojs/components";
import Taro, { Component, Config } from "@tarojs/taro";
import { MLayout, MNavbar, MTitleBar, MGrid MCard, MText, Constant, MNav, MButton } from 'miao-ui'
import "../index.scss";

import { MTextExample } from '../initParams'
export default class Text extends Component {
    config: Config = {
        navigationBarTitleText: "Text"
    };


    componentWillMount() {
        Taro.eventCenter.on("broadcastNavHeightEvent", (messageEvent) => {
            console.log(messageEvent, "asdfasfasdfadsf")
        })
    }

    constructor() {
        super()
        this.state = {
            text: 'text 测试文字',
        }
    }


    private onClickText(item, items, index) {
        console.log(item)
        item && this.setState({
            [`${item}`]: items.text
        })
        console.log(this.state);
    }

    render() {

        const tabsNav = [
            { text: 'A', icon: "home", id: 1 },
            { text: 'B', icon: "home", id: 1 },
            { text: 'C', icon: "home", id: 1 },
        ];


        const initParamsView = Object.keys(MTextExample).map((item) => {


            if (typeof MTextExample[item] == "object") {

                const navItems = MTextExample[item].map(it => {
                    return {
                        text: (typeof it === "boolean") ? (it ? 'Y' : 'N') : it,
                    }
                })
                return <MNav
                    title={item}
                    titleClassName="text-red text-right"
                    titleStyle={{ width: "100px" }}
                    className="solid-bottom text-md"
                    items={navItems}
                    itemClassName="padding-x-15"
                    onClick={(items, index) => this.onClickText(item, items, index)}
                />
            }
        })



        const headerView = <MNavbar shadow>Text 演示</MNavbar>
        return (
            <MLayout
                disable
                header={headerView}
            >

                <MCard
                    className="bg-white margin-20 solid"
                    contentClassName="text-center padding-x-5 padding-y-20">
                    <MText {...this.state} />
                </MCard>
                <MTitleBar
                    type="border-title"
                    className="padding-5 solid-bottom" title="参数" subTitle="选择不同参数 来查看字体效果"></MTitleBar>


                {initParamsView}

            </MLayout>
        )
    }
}
