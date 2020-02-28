import { View } from "@tarojs/components";
import Taro, { Component, Config } from "@tarojs/taro";
import { MList, MItem, MCard } from 'miao-ui'
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

        const title = [
            '战“疫”生产两手抓 习近平这样排兵布阵',
            "习近平对党员干部提出这些要求 如何才能跑出“加速度”？",
            "产业升级孕育更大潜力 脱贫攻坚，瞄准目标再发力 理上网来",
            "疫情防控，不获全胜决不轻言成功",
            "国际体育仲裁法庭公布孙杨仲裁结果",
            "江苏徐州首例患者出院19天核酸转阳，邻居曾办欢迎仪式65人被隔离",
            "韩国新增315例新冠肺炎确诊病例，累计确诊2337例",
            "湖北厅官全家拒医事件：领导警察被关门外2小时 社区女书记急哭",
            "外交部澄清“韩国人来华避难”传言：航班乘客大多数是中国人",
            "新冠肺炎首例尸解报告出炉：病变仍聚焦肺部 其他脏器损伤证据不足",
            "一夜回到十年前！中超“最冷冬窗”仅花2800万欧元",
            "拦住姚明的防疫保安：我当然认识他 但不符合规定就不能进",
            "湖北仙桃医生家中猝死未认定工伤 人社局：已开始行政复议",
            " 专题复盘者联盟：全球股市开启比惨模式，A股哪些公司尾盘被资金抄底？",
        ]

        const list = [...Array(10)].map((item, key) => {
            return {
                title: title[key],
                bgColor:'red',
                image: [
                    'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
                    'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
                    'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
                    'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
                    'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
                    'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
                    'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
                    'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
                ],
                subTitle: title[key + 1],

            }
        });

        return (
            <MList
                //bgColor="red"
                itemType="column"
                itemColumn={4}
                //card
                //border
                borderType="border-short"
                //itemPadding="sm"
                //checkbox
                titleSize={'xl'}
                subTitleSize={'md'}
                subTitleColor={'red'}
                imageSize={"xxl"}
                imagePosition={'top'}
                itemMargin={'sm'}
                subTitleRows={2}
                //imageWidth={100}
                imageHeight={200}
                list={list}
                onClick={()=>{
                    console.log('onClick')
                }}
            />
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
