
import { View } from "@tarojs/components";
import Taro, { Component, Config } from "@tarojs/taro";


import "./index.scss";
//MNavbar, ETitleBar, EGrid, EIcon, , EDivider, ETabBar, Constant
import { MLayout, MTabBar, MGrid, MTitleBar, Constant, MIcon, MButton, MDivider } from 'miao-ui'
import { classNames } from 'miao-ui/utils'
const EComponent = [

    {
        title: '核心组件',
        subTitle: '核心组件-构成页面的核心元素 高耦合',
        rightLink: {
            url: '',
        },
        isParent: true,
        children: [
            { title: 'Layout', iconName: 'mobilefill', tag: 'Layout' },
            { title: 'Header', iconName: 'more', tag: 'Header' },
            { title: 'Navbar', iconName: 'taoxiaopu', tag: 'Navbar' },
            { title: 'Footer', iconName: 'more', tag: 'Footer' },
            { title: 'TabBar', iconName: 'newshot', tag: 'TabBar' },
            { title: 'Content', iconName: 'edit', tag: 'Content' },
            { title: 'Text', iconName: 'text', tag: 'Text' },
            { title: 'Image', iconName: 'pic', tag: 'Image' },
        ]
    },

    {
        title: '基础组件',
        subTitle: '基础组件-构成页面的基本元素',
        rightLink: {
            url: '',
        },
        isParent: true,
        children: [
            { title: '图标', iconName: 'icon', tag: 'Icon' },
            { title: '标签', iconName: 'tag', tag: 'Tag' },
            { title: '按钮', iconName: 'btn', tag: 'Button' },
            { title: '头像', iconName: 'emoji', tag: 'Avatar' },
            { title: '文字', iconName: 'text', tag: 'Text' },
            { title: '图片', iconName: 'pic', tag: 'Image' },
            { title: '分隔线', iconName: 'move', tag: 'Divider' },
            { title: '暮帘', iconName: 'usefullfill', tag: 'Curtain' },
        ]
    },
    //
    // {
    //     title: 'UI布局组件',
    //     isParent: true,
    //     children: [
    //         { title: 'Layout', iconName: 'icon', tag: 'Layout' },
    //         { title: 'Grid', iconName: 'btn', tag: 'Grid' },
    //         { title: 'Flex', iconName: 'btn', tag: 'Flex' },
    //         { title: 'Panel', iconName: 'btn', tag: 'Panel' },
    //         { title: 'Header', iconName: 'btn', tag: 'Header' },
    //         { title: 'Content', iconName: 'wenzi', tag: 'Content' },
    //         { title: 'Footer', iconName: 'tag', tag: 'Footer' },
    //         { title: 'Card', iconName: 'tag', tag: 'Card' },
    //         { title: 'Navbar', iconName: 'tag', tag: 'Navbar' },
    //         { title: 'TitleBar', iconName: 'tag', tag: 'TitleBar' },
    //         { title: 'TabBar', iconName: 'tag', tag: 'TabBar' },
    //         { title: 'List', iconName: 'tag', tag: 'List' },
    //         { title: 'Swiper', iconName: 'exit', tag: 'Swiper' },
    //     ]
    // },
    //
    // {
    //     title: 'UI布局',
    //     isParent: true,
    //     children: [
    //         { title: 'MenuList', iconName: 'mobilefill', tag: 'MenuList' },
    //
    //         { title: 'TabBar', iconName: 'sort', tag: 'TabBar' },
    //         { title: '步骤条', iconName: 'exit', tag: 'Panel' },
    //         { title: '标题栏', iconName: 'title', tag: 'TitleBar' },
    //         { title: '搜索栏', iconName: 'exit', tag: 'Panel' },
    //         { title: '购物栏', iconName: 'exit', tag: 'Panel' },
    //         { title: '通告栏', iconName: 'exit', tag: 'Panel' },
    //         { title: '日历', iconName: 'exit', tag: 'Panel' },
    //
    //
    //     ]
    //
    // },
    //
    // {
    //     title: '操作反馈',
    //     isParent: true,
    //     children: [
    //         { title: '进度条', iconName: 'emoji', tag: 'Progress' },
    //         { title: '加载', iconName: 'emoji', tag: 'Loading' },
    //         { title: '动画', iconName: 'emoji', tag: 'Animation' },
    //         { title: '提示消息', iconName: 'emoji', tag: 'Message' },
    //         { title: '提示', iconName: 'emoji', tag: 'Tip' },
    //         { title: '滑动操作', iconName: 'emoji', tag: 'SwiperAction' },
    //         { title: '动作面板', iconName: 'emoji', tag: 'ActionSheet' },
    //     ]
    // },
    //
    //
    //
    // {
    //     title: '用户交互',
    //     isParent: true,
    //     children: [
    //         { title: '表单', iconName: 'emoji', tag: 'Form' },
    //         { title: '输入框', iconName: 'emoji', tag: 'Input' },
    //         { title: '单选按钮', iconName: 'emoji', tag: 'Radio' },
    //         { title: '多选按钮', iconName: 'emoji', tag: 'Checkbox' },
    //         { title: '开关', iconName: 'emoji', tag: 'Switch' },
    //         { title: '选择器', iconName: 'emoji', tag: 'Select' },
    //         { title: '图片选择器', iconName: 'emoji', tag: 'ActionSheet' },
    //         { title: '输入域', iconName: 'emoji', tag: 'Textarea' },
    //
    //     ]
    // }
]
export default class ExampleItems extends Component {

    constructor(porps) {
        super(porps)
    }

    config: Config = {
        navigationBarTitleText: "渺子工作室-MiaoUI",
    }


    private toPage(page) {
        Taro.navigateTo({
            url: `/example/components/${page}`
        })
    }

    render() {
        return (
            <View>


                {EComponent.map((item, key) => {
                    return (
                        <View>

                            <MTitleBar
                                className={classNames({
                                    'margin-t-10': key > 0
                                }, "padding-5 solid-bottom")}
                                title={item.title}
                                subTitle={item.subTitle}
                                rightLink={item.rightLink}
                            />
                            <MGrid col={4} gap={2} className="text-center">
                                {item.children && item.children.map((child, ckey) => {
                                    return (
                                        <View key={key} className="bg-white padding-b-5" onClick={this.toPage.bind(this, child.tag)}>
                                            <MIcon icon={child.iconName} size='40' color="red" />
                                            <View style="font-size:14px">{child.title}</View>
                                        </View>
                                    )
                                })}
                            </MGrid>
                        </View>
                    )
                })}
            </View>
        );
    }
}
