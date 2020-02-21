import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { EFlex, EPage, ENavbar, EPanel } from "miao-ui";

const size = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const percent = ["sub", "twice", "treble"];
const colors = ["blue", "red", "green"];

const justify = ["start", "end", "center", "between", "around"];
const align = ["start", "end", "center", "stretch"];

export default function Flex() {


    //   const per = percent.map((perc, index) => (
    //     <View key={perc} className={`flex-${perc}`}>
    //       <ClCard type="full" bgColor={`light-${colors[index]}`}>
    //         {perc}({index + 1})
    //       </ClCard>
    //     </View>
    //   ));

    //   const justifyComponent = justify.map(jus => (
    //     <ClCard key={jus}>
    //       <ClFlex justify={jus}>
    //         <ClCard bgColor="light-blue" shadow={false}>
    //           {jus}
    //         </ClCard>
    //         <ClCard bgColor="light-blue" shadow={false}>
    //           {jus}
    //         </ClCard>
    //       </ClFlex>
    //     </ClCard>
    //   ));

    //   const alignComponent = align.map(al => (
    //     <ClCard key={al}>
    //       <ClFlex align={al}>
    //         <View className="bg-gradual-blue padding margin">
    //           <View>{al}</View>
    //           <View>{al}</View>
    //         </View>

    //         <View className="bg-gradual-blue padding margin">
    //           <View style={{ height: "100%" }}>{al}</View>
    //         </View>
    //       </ClFlex>
    //     </ClCard>
    //   ));

    const headerView = <View className="header"><ENavbar boxShow>Icon</ENavbar></View>


    return (
        <EPage renderHeader={headerView}>
            <EPanel
                className="bg-white"
                headerBorder
                title="固定尺寸" >
                <EFlex align="center">
                    <View className="flex-1 bg-red">1</View>
                    <View className="flex-2 bg-green">2</View>
                    <View className="flex-3 bg-red">3</View>
                </EFlex>
            </EPanel>
        </EPage >
    );
}

Flex.config = {
    navigationBarTitleText: "Flex 弹性布局"
};
