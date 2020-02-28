import { View } from "@tarojs/components";
import Taro, { Component, Config } from "@tarojs/taro";
import { MLayout, MNavbar, MTitleBar, MGrid MCard, MText, Constant, MNav, MTabs, MSwiper } from 'miao-ui'
import "../index.scss";

import ItemA from '../demoA.tsx'
import ItemB from '../demoB.tsx'
import { MTextExample } from '../initParams'
export default class Button extends Component {
    config: Config = {
        navigationBarTitleText: "Text"
    };



    constructor() {
        super()
        this.state = {
            text: 'text 测试文字'
             ,headerOpacity:0
        }
    }


    private onClickText(item, items, index) {
        console.log(item)
        item && this.setState({
            [`${item}`]: items.text
        })
        console.log(this.state);
    }



    onPageScroll(scrollTop) {
        this.setState({
            headerOpacity:scrollTop.scrollTop/200
        })
        //console.log(scrollTop)
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

        const videoList = [{
            url: 'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/video/spyuzaoqian.mp4',
            type: 'video',
            controls: true,
            autoplay: true,
            showPlayBtn: true,
            title: '烬天玉藻前',
            muted: true
        }, {
            url: 'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/video/CGkaichang.mp4',
            type: 'video',
            controls: true,
            autoplay: false,
            showPlayBtn: true,
            title: 'CG'
        }]


        const navItems = [
            { text: 'A' },
            { text: 'B' }
        ]



        const defaultTabs = [
            {

                text: `标签A`,
                //id: `A`,
                component: <ItemA id="adminA" />,
            },
            {

                text: `标签B`,
                //id: `B`,
                component: <ItemB id="adminB" />,
            },
            {
                text: 'Swiper',
                component: <MSwiper
                    //    type='card'
                    list={videoList}
                    circular
                    autoplay={false}
                    dot='round'
                    indicatorDots
                    indicatorColor='#8799a3'
                    indicatorActiveColor='#0081ff'
                    onClick={(index) => {
                        console.log(index)
                    }}
                />
            }
        ];



        return (

            <MTabs
                className="bg-red"
                items={defaultTabs}
                headerFixed
                touchMove
                headerStyle={{backgroundColor:`rgba(0,0,0,${this.state.headerOpacity})`}}
                headerClassName="text-md"
                itemClassName="padding-x-15"
            //    headerRenderStart="adfsdf"
            //    activeClassName="bg-red"
            />


        )
    }
}

//    {defaultTabs.map((item, key) => (
    //    <View className="tab-item">
    //        asdfasdfasdf
    //    </View>
//    ))}

// <MLayout
//     disable
//     header={headerView}
// >
//
//     <MButton className="margin-20"
//         size="xsl"
//         color="black"
//         bgColor="red"
//         plain
//         plainSize="bold"
//         loading
//         long
//     >测试按钮</MButton>
//     <MTitleBar
//         type="border-title"
//         className="padding-5 solid-bottom" title="参数" subTitle="选择不同参数 来查看字体效果"></MTitleBar>
//
//
//     <MNav
//         title='Title'
//         titleClassName="text-red text-right"
//         titleStyle={{ width: "100px" }}
//         className="solid-bottom text-md"
//         items={navItems}
//     // onClick={(items, index) => this.onClickText(item, items, index)}
//     />
//
// </MLayout>
