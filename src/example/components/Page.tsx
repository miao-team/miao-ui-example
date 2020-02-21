import { View } from "@tarojs/components";
import Taro, { Component, Config } from "@tarojs/taro";
import { EPanel, EGrid, EIcon, ELayout, EButton, ETabBar } from 'miao-ui'
import "../index.scss";
import { classNames } from "miao-ui/utils";



interface IProps { }
interface IState {
    isLoading?: boolean;
    isOvering?:boolean;
    list?: string[]
}


const listddd = [
    'white',
    'red',
    'green',
    'orange',
    'yellow',
    'olive',
    'cyan',
    'blue',
    'purple',
    'mauve',
    'pink',
    'brown',
    'grey',
    'gray',
    'black'

]

const headerView = <View className="header"><ENavbar shadow>Page(Layout) 组件</ENavbar></View>
export default class Page extends Component<IProps, IState> {


    config: Config = {
        navigationBarTitleText: "Page(Layout) 组件",

    }
    static defaultValue = {
        header: {
            title: '测试默认标题',
            // bgColor: 'green',
            // textColor: 'red',
            right: 'asdf'

        },
        footer: {
            active: 1,
            bgColor: "black",
            fix: true,
            tabs: [
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
            ]
        },
        bgImage: '',


    }


    constructor() {
        super(...arguments);
        this.state = {
            isLoading: false,
            isOvering:false,
            list: [
                'white',
                'red',
                'green',
                'orange',
                'yellow',
                'olive',
                'cyan',
                'blue',
                'purple',
                'mauve',
                'pink',
                'brown',
                'grey',
                'gray',
                'black'

            ],
        }
    }
    // 滑动过程中

    private onScroll = (e) => {
        // console.log('滑动中...', e)
    }

    private onScrollEnd = (e) => {
        //console.log('滑动结束...', e)
    }
    private onScrollStart = (e) => {
        //console.log('滑动开始...', e)
    }

    private onInitialize = () => {
        this.setState({
            isLoading: true
        })
        Taro.showToast({
            title: '加载开始',
            icon: 'none'
        })
        // 模拟请求
        setTimeout(() => {

            Taro.showToast({
                title: '加载完成',
                icon: 'none'
            })
            this.setState({
                isLoading: false
            })
        }, 5000)
    }
    private onLoadmore = () => {
        this.setState({
            isLoading: true
        })
        Taro.showToast({
            title: 'Loading',
            icon: 'none'
        })

        // 模拟请求
        setTimeout(() => {


            Taro.showToast({
                title: 'Loading over',
                icon: 'none'
            })
            let dd = this.state.list.concat(listddd)
            this.setState({
                isLoading: false,
                isOvering:true,
                list: dd
            })
        }, 5000)
    }
    render() {
        const footerView = <View className="footer" style={{ height: "55px" }}>
            <ETabBar {...Page.defaultValue.footer} />
        </View>


      

        return (
            <ELayout
                headerConfig={Page.defaultValue.header}
                footerConfig={Page.defaultValue.footer}
                onScroll={this.onScroll}
                onScrollEnd={this.onScrollEnd}
                onInitialize={this.onInitialize}
                onLoadmore={this.onLoadmore}
                isLoading={this.state.isLoading}
                isOvering={this.state.isOvering}

                //bgImage={demo}

                //renderHeader={headerView}
                renderFooter={footerView}
            >
                {this.state.list.map(item => {
                    return <View className={classNames({
                        [`bg-${item}`]: item,
                    }, 'text-center')} style={{ height: "80px" }}></View>
                })}

            </ELayout>

        );
    }



}
