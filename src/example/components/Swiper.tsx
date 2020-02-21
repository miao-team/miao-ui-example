import { View } from "@tarojs/components";
import Taro, { pxTransform, Config } from "@tarojs/taro";
import { EPanel, ETitleBar, ESwiper, EIcon, EPage, ENavbar } from 'miao-ui'
import "../index.scss";

export default function Swiper() {

    const fileList = [
        {
            url:
                "https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/mp-bgcolor/swiper1.jpg",
            type: "image"
        },
        {
            url:
                "https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/mp-bgcolor/swiper2.jpg",
            type: "image"
        }
    ];

    const videoList = [
        {
            url:
                "https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/video/spyuzaoqian.mp4",
            type: "video",
            controls: true,
            autoplay: true,
            showPlayBtn: true,
            title: "烬天玉藻前",
            muted: true
        },
        {
            url:
                "https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/video/CGkaichang.mp4",
            type: "video",
            controls: true,
            autoplay: false,
            showPlayBtn: true,
            title: "CG"
        }
    ];


    const headerView = <View className="header"><ENavbar boxShow>Switer</ENavbar></View>
    return (
        <EPage renderHeader={headerView}>



            <ETitleBar title="类型" textColor="red" type="icon" description="type" />
            <ESwiper type="card" list={fileList} circular />
            <ESwiper type="screen" list={fileList} circular />

            <ETitleBar title="指示点" textColor="black" type="icon" subTitle="dot" />
            <ESwiper
                type="screen"
                list={fileList}
                circular
                dot="round"
                indicatorDots
                indicatorColor="#8799a3"
                indicatorActiveColor="#0081ff"
            />

            <ETitleBar title="视频" textColor="black" type="icon" subTitle="dot" />
            <ESwiper
                type="screen"
                list={videoList}
                circular
                dot="round"
                indicatorDots
                indicatorColor="#8799a3"
                indicatorActiveColor="#0081ff"
                style={{
                    height: pxTransform(450)
                }}
            />


        </EPage>

    );
}


Swiper.config = {
    navigationBarTitleText: "Swiper"
};
