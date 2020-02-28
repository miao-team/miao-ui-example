import { View } from "@tarojs/components";
            import Taro, { Component, Config } from "@tarojs/taro";
            import { MLayout, MNavbar, MPanel, MGrid MIcon, Constant } from 'miao-ui'
            import { classNames } from "miao-ui/utils"
            import "../index.scss";
            export default class Image extends Component {
                config: Config = {
                    navigationBarTitleText: "Image"
                };

                render() {
                    const headerView = <MNavbar shadow>Icon 演示</MNavbar>
                    return (
                        <MLayout
                            disable
                            renderHeader={headerView}
                        >
                            <MPanel
                                title='Color'
                                className="bg-white padding-5"
                                description="图标配色"
                                headerBorder
                                rightLink={{
                                    text: '更多图标配色',
                                    url: '###'
                                }}
                                clearFixBottom
                            >
                                    <MGrid className="text-center" col={3} gap={1}>
                                        ---
                                    </MGrid>
                            </MPanel>
                        </MLayout>
                    )
                }
            }