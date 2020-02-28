import { View } from "@tarojs/components";
import Taro, { Component, Config } from "@tarojs/taro";
import { MLayout, MNavbar, MPanel, MGrid, MLoading, Constant } from 'miao-ui'
import classNames from "classnames"
import "../index.scss";
export default class Color extends Component {
    config: Config = {
        navigationBarTitleText: "Color"
    };

    render() {



        const headerView = <MNavbar shadow>Color 配色方案 演示</MNavbar>
        return (
            <MLayout
                disable
                header={headerView}
            >
                <MPanel
                    title='Animation'
                    className="bg-white padding-5"
                    description="className='bg-[colorName]'"
                    headerBorder

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

            </MLayout >
        )
    }
}
