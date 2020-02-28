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


        const imageProps = [
            'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
            'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
            'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
            'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
            'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
            //'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg'
        ]

        const imagePropsObj = {
            url: 'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
        }
        return (
            <View>

                <MCard className="bg-white padding">

                    <MItem title={'这城是标题'} />
                    <MItem title={'checkbox'} checkbox />
                    <MItem title={'arrow'} arrow />
                    <MItem title={'checked'} checked />
                </MCard>

                <MCard className="bg-white margin-top-xl padding">
                    <MItem title={'这城是主标题'} subTitle="这城副标题" />
                </MCard>
                <MCard className="bg-white margin-top-xl padding">
                    <MItem title={'这城是主标题'} subTitle="这城副标题"
                        image='https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg' />
                </MCard>
                <MCard className="bg-white margin-top-xl padding">
                    <MItem title={'这城是主标题'} subTitle="这城副标题"
                        imageType="round"
                        image='https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg' />
                </MCard>
                <MCard className="bg-white margin-top-xl padding">
                    <MItem title={'这城是主标题'} subTitle="这城副标题"
                        imageType="round"
                        imagePosition="right"
                        image='https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg' />
                </MCard>
                <MCard className="bg-white margin-top-xl padding">
                    <MItem title={'这城是主标题'} subTitle="这城副标题"
                        //imageType="round"
                        imagePosition="top"
                        image='https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg' />
                </MCard>
                <MCard className="bg-white margin-top-xl padding">
                    <MItem title={'这城是主标题'} subTitle="这城副标题"
                        //imageType="round"
                        imagePosition="bottom"
                        image='https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg' />
                </MCard>
                <MCard className="bg-white margin-top-xl padding">
                    <MItem title={'这城是主标题'} subTitle="这城副标题"
                        //imageType="round"
                        imagePosition="center"
                        image='https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg' />
                </MCard>
                <MCard className="bg-white margin-top-xl padding">
                    <MItem title={'这城是主标题'} subTitle="这城副标题"
                        //imageType="round"
                        imagePosition="center"
                        image={imageProps} />
                </MCard>
            </View>
        )
    }
}
//<MItem
//    title={'这城是标题'}

//subTitle={'这城是主标题哦这城是主标题哦这城是主标题哦这城是主标题哦这城是主标题哦这城是主标题哦这城是主标题哦这城是主标题哦这城是主标题哦这城是主标题哦这城是主标题哦这城是主标题哦'}
//image={imagePropsObj}
//imageSize={'xxl'}
//imageType={'round'}
//imagePosition={'bottom'}
//imageClassName={'shadow'}
//extends={['TextA', "TextB", 'TextC']}
///>
