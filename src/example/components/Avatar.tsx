import Taro, { Component } from "@tarojs/taro";
import { EPanel, EAvatar, EGrid } from 'miao-ui'

const headerArray = [
    {
        url: "https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg"
    },
    {
        bgColor: "blue",
        text: "M"
    },
    {
        bgColor: "blue",
        icon: "emoji"
    },
    {
        url: "https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg",
        tag: "female",
        tagColor: "light-pink"
    }
];
export default class Avatar extends Component {


    render() {
        return (
            <EPanel
                title='Icon'
                className="bg-white"
                description="Icon 布局"
                uri='/pages/demos/grid'
                headerBorder
                clearFixBottom
            >


                <EGrid className="text-center" col={6} gap={10}>

                    <EAvatar
                        headerArray={headerArray.slice(0, 1)}
                        shape="round"
                        size="xs"
                    />
                    <EAvatar
                        headerArray={headerArray.slice(0, 1)}
                        shape="round"
                        size="sm"
                    />
                    <EAvatar
                        headerArray={headerArray.slice(0, 1)}
                        shape="round"
                        size="md"
                    />
                    <EAvatar
                        headerArray={headerArray.slice(0, 1)}
                        shape="round"
                        size="lg"
                    />
                    <EAvatar
                        headerArray={headerArray.slice(0, 1)}
                        shape="round"
                        size="xl"
                    />
                    <EAvatar
                        headerArray={headerArray.slice(0, 1)}
                        shape="round"
                        size="xxl"
                    />
                </EGrid>

                <EGrid className="text-center" col={6} gap={10}>

                    <EAvatar
                        headerArray={headerArray.slice(0, 1)}
                        shape="radius"
                        size="xs"
                    />
                    <EAvatar
                        headerArray={headerArray.slice(0, 1)}
                        shape="radius"
                        size="sm"
                    />
                    <EAvatar
                        headerArray={headerArray.slice(0, 1)}
                        shape="radius"
                        size="md"
                    />
                    <EAvatar
                        headerArray={headerArray.slice(0, 1)}
                        shape="radius"
                        size="lg"
                    />
                    <EAvatar
                        headerArray={headerArray.slice(0, 1)}
                        shape="radius"
                        size="xl"
                    />
                    <EAvatar
                        headerArray={headerArray.slice(0, 1)}
                        shape="radius"
                        size="xxl"
                    />
                </EGrid>

                <EAvatar
                    headerArray={headerArray}
                    shape="round"
                    size="xxl"
                    shadow
                />
            </EPanel>

        );
    }
}
