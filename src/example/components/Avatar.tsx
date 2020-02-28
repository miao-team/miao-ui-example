import { View } from "@tarojs/components";
import Taro, { Component, Config } from "@tarojs/taro";
import { MLayout, MNavbar, MTitleBar, MGrid MCard, MText, Constant, MNav, MAvatar } from 'miao-ui'
import "../index.scss";

import { MTextExample } from '../initParams'
export default class Button extends Component {
    config: Config = {
        navigationBarTitleText: "Text"
    };



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
                    onClick={(items, index) => this.onClickText(item, items, index)}
                />
            }
        })



        const headerView = <MNavbar shadow>Text 演示</MNavbar>




        const navItems = [
            { text: 'A' },
            { text: 'B' }
        ]


        const headerArray = [
            {
                //    url: 'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
                text: 'M',
                tag: 'emoji',
                icon: 'emoji',
                bgColor: 'red',
                tagColor: 'green'
            }, {
                bgColor: 'blue',
                text: 'M'
            }, {
                bgColor: 'blue',
                icon: 'emoji'
            }, {
                url: 'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
                tag: 'female',
                tagColor: 'light-pink'
            }
        ]

        return (
            <MLayout
                disable
                header={headerView}
            >


                <MAvatar text="AAA" headerArray={headerArray.slice(0, 1)} shape='radius' />

                <MAvatar headerArray={headerArray} shape='round' size="lg" />


                <MTitleBar
                    type="border-title"
                    className="padding-5 solid-bottom" title="参数" subTitle="选择不同参数 来查看字体效果"></MTitleBar>


                <MNav
                    title='Title'
                    titleClassName="text-red text-right"
                    titleStyle={{ width: "100px" }}
                    className="solid-bottom text-md"
                    items={navItems}
                // onClick={(items, index) => this.onClickText(item, items, index)}
                />

            </MLayout>
        )
    }
}
