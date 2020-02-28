import { View } from "@tarojs/components";
import Taro, { Component, Config } from "@tarojs/taro";
import { MLayout, MNavbar, MPanel, MGrid MIcon, MLoading, Constant } from 'miao-ui'
import { classNames } from "miao-ui/utils"
import "../index.scss";
export default class Loading extends Component {
    config: Config = {
        navigationBarTitleText: "Loading"
    };


    constructor() {
        super()

        this.state = {
            type: "icon",

            // bgColor?: bgColorType | bgColorMoreType | lightBgColorType;
            //
            // image?:string;
            // imageSize?:fontSizeType;
            //
            //
            // text?:string;
            // textColor?: bgColorType;
            // textSize?:fontSizeType;
            //
            //
            //
            // icon?:string;
            // iconSize?:fontSizeType;
            // iconColor?:bgColorType;
            //
            //
            // show?: boolean;
        }

    }

    render() {
        const headerView = <MNavbar shadow>MLoadingxs 演示</MNavbar>
        return (
            <MLayout
                disable
                header={headerView}
            >
                <MPanel
                    className="padding-5 bg-white"
                    title="MLoading"
                    sibTitle="Loading 动态加载效果..."
                    borderBottom
                    clearFixBottom
                >
                    <MGrid col="3" gap="1"
                        borderBottom
                        clearFixBottom
                    >
                        {[
                            'audio',
                            'bars',
                            'circles',
                            'grid',
                            'hearts',
                            'oval',
                            'puff',
                            'rings',
                            'spin',
                            'spinning',
                            'three-dots',
                            'triangle',
                        ].map((item, key) => {
                            return <MLoading
                                className="text-center padding-5"
                                icon={item}
                                text={item}
                                show
                            />
                        })}

                    </MGrid>

                </MPanel>
            </MLayout>
        )
    }
}
//    <MLoading type="bar" bgColor="red" />
//    <MLoading type="modal" bgColor="black" icon={'spinning'} show />
