import { View } from "@tarojs/components";
import Taro, { Component, useState } from "@tarojs/taro";
import { EButton, ETitleBar, ELayout, ENavbar, ECard, EMessage } from 'miao-ui'
import "../index.scss";


export default class Text extends Component {


    config = {
        navigationBarTitleText: "Message 提示消息"
    };

    render() {

        const [text, setText] = useState("");
        const [show, setShow] = useState(false);
        const [type, setType] = useState("info");
        const [duration, setDuration] = useState(3);
        const [bgColor, setBgcolor] = useState("");
        const headerView = <View className="header"><ENavbar shadow>Message 提示消息</ENavbar></View>

        return (
            <ELayout renderHeader={headerView}>



                <EMessage
                    className="bg-black text-lg"
                    message={text}
                    show={show}
                    type={type}
                    duration={duration}
                    bgColor={bgColor}
                />

                <ETitleBar title="类型" textColor="black" type="icon" subTitle="type" />

                <EButton
                    shape="round"
                    bgColor="light-grey"
                    onClick={() => {
                        setText("这是一条提示的消息");
                        setType("info");
                        setShow(true);
                        setDuration(3);
                    }}
                >
                    提示
                    </EButton>
            </ELayout>

        );
    }
}
