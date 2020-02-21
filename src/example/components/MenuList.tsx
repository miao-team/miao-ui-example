import Taro from "@tarojs/taro";
import { Image, Text, View } from "@tarojs/components";
import { EPage, EMenuList, ETitleBar, ENavbar, EPanel } from "miao-ui";

const typeMenu = [
    {
        title: "第一项",
        arrow: true,
        icon: {
            icon: "emoji"
        },
        subTitle: {
            title: 'subTitle',
            textColor: 'red',
            onClick: () => {
                alert('adsf')
            }
        }
    },
    {
        title: "第二项",
        arrow: true,
        image: "https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg",
        subTitle: 'ddkdkdkdk'
    },
    {
        divider:true,
    },
    {
        title: "第二项",
        arrow: true,
        image: {
            url: "https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg",
            type: 'round'
        },
        subTitle: 'ddkdkdkdk'
    }
];


export default function MenuList() {

    const headerView = <View className="header"><ENavbar boxShow>Text</ENavbar></View>

    return (
        <EPage renderHeader={headerView}>

            <EPanel
                title="MenuList Card"
                clearFixBottom
            >
                <EMenuList card list={typeMenu} />
            </EPanel>
            <EPanel
                title="MenuList Card"
                bodyClassName="no-padding"
                clearFixBottom
            >
                <EMenuList list={typeMenu} />
            </EPanel>

            <EPanel
                title="MenuList Card"
                bodyClassName="no-padding"
                clearFixBottom
            >
                <EMenuList shortBorder list={typeMenu} />
            </EPanel>



            {/* <ClLayout margin="normal" marginDirection="vertical">
                <ClMenuList card list={typeMenu} />
            </ClLayout>
            <ClLayout margin="normal" marginDirection="vertical">
                <ClMenuList list={typeMenu} />
            </ClLayout>

            <ClTitleBar
                title="图标&箭头"
                textColor="black"
                type="icon"
                subTitle="icon&arrow"
            />
            <ClLayout margin="normal" marginDirection="vertical">
                <ClMenuList card list={arrowMenu} />
            </ClLayout>

            <ClTitleBar
                title="短/长分割线"
                textColor="black"
                type="icon"
                subTitle="icon&arrow"
            />
            <ClLayout margin="normal" marginDirection="vertical">
                <ClMenuList list={typeMenu} shortBorder />
            </ClLayout>
            <ClLayout margin="normal" marginDirection="vertical">
                <ClMenuList list={typeMenu} />
            </ClLayout> */}
        </EPage>
    );
}

MenuList.config = {
    navigationBarTitleText: "MenuList 菜单列表"
};
