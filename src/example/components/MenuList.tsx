import { View } from "@tarojs/components";
import Taro, { Component, Config } from "@tarojs/taro";
import { MMenuList, MItem, MCard } from 'miao-ui'
import "../index.scss";

export default class MenuList extends Component {
    config: Config = {
        navigationBarTitleText: "Text"
    };



    constructor() {
        super()

    }




    render() {


        const typeMenu = [
            {
                title: '这城是主标题哦.这城是主标题哦.这城是主标题哦.这城是主标题哦.',
                icon: 'home',
                image: 'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
                arrow: true,
                //    divider: true,
                subTitle: "这里民副标题哦这里民副标题哦这里民副标题哦这里民副标题哦这里民副标题哦这里民副标题哦这里民副标题哦这里民副标题哦这里民副标题哦这里民副标题哦这里民副标题哦这里民副标题哦 "
            },
            {
                title: "第二项"
            }, {
                title: "第二项"
            }, {
                title: "第二项"
            }, {
                title: "第二项"
            }, {
                title: "第二项"
            }
        ];

        const imageProps = [
            'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
            'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
            'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
            'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
            'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
            //'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg'
        ]


        const imagePropsObj = {
            url:'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
        }

        return (
            <MCard
                className="bg-white padding-xs"
            >

                <MItem
                    title={'这城是主标题哦这城是主标题哦这城是主标题哦这城是主标题哦这城是主标题哦这城是主标题哦'}
                    subTitle={'这城是主标题哦这城是主标题哦这城是主标题哦这城是主标题哦这城是主标题哦这城是主标题哦这城是主标题哦这城是主标题哦这城是主标题哦这城是主标题哦这城是主标题哦这城是主标题哦'}
                    image={imagePropsObj}
                    imageSize={'xxl'}
                    imageType={'round'}
                    imagePosition={'bottom'}
                    imageClassName={'sha'}
                />
            </MCard>

        )
    }
}
