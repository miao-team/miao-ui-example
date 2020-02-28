import Taro, { Component, Config } from "@tarojs/taro";
import Home from "./example/index";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
if (process.env.NODE_ENV !== "production" && process.env.TARO_ENV === "h5") {
    require("nerv-devtools");
}
import './app.scss'
import './miao-ui/styles/index.scss'



class App extends Component {
    config: Config = {
        navigationBarTitleText: "MiaoUI",
        pages: [
            "example",
        ],
        subPackages: [
            {
                root: "example",
                pages: [
                    /**
                     * Style
                     */
                    "components/Color",
                    "components/TextColor",
                    "components/BtnColor",
                    "components/Animation",
                    "components/Size",
                    "components/Border",
                    "components/Shadow",
                    "components/Margin",
                    "components/Padding",
                    "components/Radius",
                    "components/Transition",

                    "components/Panel",
                    //views
                    "components/Button",


                    "components/Loading",

                    //

                    "components/Layout",
                    "components/Header",
                    "components/NavBar",
                    "components/Footer",
                    "components/TabBar",
                    "components/Text",
                    "components/Image",
                    "components/Content",
                    //
                    "components/Icon",
                    "components/Avatar",
                    "components/Divider",

                    "components/NoticeBar",


                    // "components/Flex",
                    "components/Swiper",
                    // "components/TitleBar",
                    "components/MenuList",
                    "components/Item",
                    "components/List",
                    // "components/TabBar",
                    "components/Tag",
                    // "components/Page",
                    "components/Tabs",
                    // // "components/TabNav",
                    // "components/Text",
                    "components/Message"
                ]
            }],

    };

    componentWillMount() { }

    componentDidMount(): void {
    }

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
    render() {
        return (
            <Home />
        );
    }
}

Taro.render(<App />, document.getElementById("app"));
