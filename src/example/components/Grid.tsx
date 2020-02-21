

import { View } from "@tarojs/components";
import Taro, { Component } from "@tarojs/taro";

import classNames from 'classnames'
import { EPanel, EGrid, EDivider } from 'miao-ui'
import "../index.scss";
export default class Grid extends Component {


    render() {
        return (

            <EPanel
                title='Grid'
                className="bg-white"
                description="Grid 布局"
                uri='/pages/demos/grid'
                headerBorder
                clearFixBottom
            >

                <EGrid col={4} gap={1}>
                    {[
                        'red',
                        'orange',
                        'yellow',
                        'olive',
                        'green',
                        'cyan',
                        'blue',
                        'purple',
                        'mauve',
                        'pink',
                        'brown',
                        'black',
                        'gray',
                        'white',
                    ].map((item, key) => {
                        return <View className={classNames(`bg-${item}`, 'height-30 font-14 text-center')}>{item}</View>
                    })}
                </EGrid>
            </EPanel>

        );
    }
}
