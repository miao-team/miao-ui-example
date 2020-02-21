import { View } from "@tarojs/components";
import Taro, { Component, Config } from "@tarojs/taro";
import { MLayout, MNavbar, MPanel, MGrid MIcon, Constant } from 'miao-ui'

//, ENavbar, EIcon, EPanel, EGrid
import "../index.scss";

const iconType = [
    , "appreciate"
    , "check"
    , "close"
    , "edit"
    , "emoji"
    , "favorfill"
    , "favor"
    , "loading"
    , "locationfill"
    , "location"
    , "phone"
    , "roundcheckfill"
    , "roundcheck"
    , "roundclosefill"
    , "roundclose"
    , "roundrightfill"
    , "roundright"
    , "search"
    , "taxi"
    , "timefill"
    , "time"
    , "unfold"
    , "warnfill"
    , "warn"
    , "camerafill"
    , "camera"
    , "commentfill"
    , "comment"
    , "likefill"
    , "like"
    , "notificationfill"
    , "notification"
    , "order"
    , "samefill"
    , "same"
    , "deliver"
    , "evaluate"
    , "pay"
    , "send"
    , "shop"
    , "ticket"
    , "back"
    , "cascades"
    , "discover"
    , "list"
    , "more"
    , "scan"
    , "settings"
    , "questionfill"
    , "question"
    , "shopfill"
    , "form"
    , "pic"
    , "filter"
    , "footprint"
    , "top"
    , "pulldown"
    , "pullup"
    , "right"
    , "refresh"
    , "moreandroid"
    , "deletefill"
    , "refund"
    , "cart"
    , "qrcode"
    , "remind"
    , "delete"
    , "profile"
    , "home"
    , "cartfill"
    , "discoverfill"
    , "homefill"
    , "message"
    , "addressbook"
    , "link"
    , "lock"
    , "unlock"
    , "vip"
    , "weibo"
    , "activity"
    , "friendaddfill"
    , "friendadd"
    , "friendfamous"
    , "friend"
    , "goods"
    , "selection"
    , "explore"
    , "present"
    , "squarecheckfill"
    , "square"
    , "squarecheck"
    , "round"
    , "roundaddfill"
    , "roundadd"
    , "add"
    , "notificationforbidfill"
    , "explorefill"
    , "fold"
    , "game"
    , "redpacket"
    , "selectionfill"
    , "similar"
    , "appreciatefill"
    , "infofill"
    , "info"
    , "forwardfill"
    , "forward"
    , "rechargefill"
    , "recharge"
    , "vipcard"
    , "voice"
    , "voicefill"
    , "friendfavor"
    , "wifi"
    , "share"
    , "wefill"
    , "we"
    , "lightauto"
    , "lightforbid"
    , "lightfill"
    , "camerarotate"
    , "light"
    , "barcode"
    , "flashlightclose"
    , "flashlightopen"
    , "searchlist"
    , "service"
    , "sort"
    , "down"
    , "mobile"
    , "mobilefill"
    , "copy"
    , "countdownfill"
    , "countdown"
    , "noticefill"
    , "notice"
    , "upstagefill"
    , "upstage"
    , "babyfill"
    , "baby"
    , "brandfill"
    , "brand"
    , "choicenessfill"
    , "choiceness"
    , "clothesfill"
    , "clothes"
    , "creativefill"
    , "creative"
    , "female"
    , "keyboard"
    , "male"
    , "newfill"
    , "new"
    , "pullleft"
    , "pullright"
    , "rankfill"
    , "rank"
    , "bad"
    , "cameraadd"
    , "focus"
    , "friendfill"
    , "cameraaddfill"
    , "apps"
    , "paintfill"
    , "paint"
    , "picfill"
    , "refresharrow"
    , "colorlens"
    , "markfill"
    , "mark"
    , "presentfill"
    , "repeal"
    , "album"
    , "peoplefill"
    , "people"
    , "servicefill"
    , "repair"
    , "file"
    , "repairfill"
    , "taoxiaopu"
    , "weixin"
    , "attentionfill"
    , "attention"
    , "commandfill"
    , "command"
    , "communityfill"
    , "community"
    , "read"
    , "calendar"
    , "cut"
    , "magic"
    , "backwardfill"
    , "playfill"
    , "stop"
    , "tagfill"
    , "tag"
    , "group"
    , "all"
    , "backdelete"
    , "hotfill"
    , "hot"
    , "post"
    , "radiobox"
    , "rounddown"
    , "upload"
    , "writefill"
    , "write"
    , "radioboxfill"
    , "punch"
    , "shake"
    , "move"
    , "safe"
    , "activityfill"
    , "crownfill"
    , "crown"
    , "goodsfill"
    , "messagefill"
    , "profilefill"
    , "sound"
    , "sponsorfill"
    , "sponsor"
    , "upblock"
    , "weblock"
    , "weunblock"
    , "my"
    , "myfill"
    , "emojifill"
    , "emojiflashfill"
    , "flashbuyfill"
    , "text"
    , "goodsfavor"
    , "musicfill"
    , "musicforbidfill"
    , "card"
    , "triangledownfill"
    , "triangleupfill"
    , "roundleftfill-copy"
    , "font"
    , "title"
    , "recordfill"
    , "record"
    , "cardboardfill"
    , "cardboard"
    , "formfill"
    , "coin"
    , "cardboardforbid"
    , "circlefill"
    , "circle"
    , "attentionforbid"
    , "attentionforbidfill"
    , "attentionfavorfill"
    , "attentionfavor"
    , "titles"
    , "icloading"
    , "full"
    , "mail"
    , "peoplelist"
    , "goodsnewfill"
    , "goodsnew"
    , "medalfill"
    , "medal"
    , "newsfill"
    , "newshotfill"
    , "newshot"
    , "news"
    , "videofill"
    , "video"
    , "exit"
    , "skinfill"
    , "skin"
    , "moneybagfill"
    , "usefullfill"
    , "usefull"
    , "moneybag"
    , "redpacket_fill"
    , "subscription"
    , "loading1"
    , "github"
    , "global"
    , "settingsfill"
    , "back_android"
    , "expressman"
    , "evaluate_fill"
    , "group_fill"
    , "play_forward_fill"
    , "deliver_fill"
    , "notice_forbid_fill"
    , "fork"
    , "pick"
    , "wenzi"
    , "ellipse"
    , "qr_code"
    , "dianhua"
    , "icon"
    , "loading2"
    , "btn"];






export default class Icon extends Component {

    config: Config = {
        navigationBarTitleText: "Icon 组件"
    };

    render() {

        //
        const headerView = <MNavbar shadow>Icon 演示</MNavbar>
        console.log(Constant)
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
                        {Constant.Color.normalColor.map((item) => {
                            return <View>
                                <MIcon icon="title" color={item.title} size="xl" />
                                <View style="font-size:14px">{item.title}</View>
                            </View>
                        })}
                    </MGrid>


                </MPanel>
                <MPanel
                    title='Size'
                    className="bg-white padding-5"
                    description="图标Size"

                    rightLink={{
                        text: '更多图标Size',
                        url: '###'
                    }}
                    headerBorder
                    clearFixBottom
                >
                    <MGrid className="text-center" col={3} gap={1}>
                        {Constant.Size.fontSize.map((item) => {
                            return <View>
                                <MIcon icon="title" size={item} color="red" />
                                <View style="font-size:14px">{item}</View>
                            </View>
                        })}
                    </MGrid>
                </MPanel>
                <MPanel
                    title='所有图标'
                    className="bg-white padding-5"

                    rightLink={{
                        url: '###'
                    }}
                    headerBorder
                    clearFixBottom
                >



                    <MGrid className="text-center" col={3} gap={1}>
                        {iconType.map((item) => {
                            return <View>
                                <MIcon icon={item} size='30' />
                                <View style="font-size:14px">{item}</View>
                            </View>
                        })}
                    </MGrid>
                </MPanel>


                <MPanel
                    title='Icon'
                    className="bg-white padding-5"
                    description="Size"
                    headerBorder
                    clearFixBottom
                >

                </MPanel>
            </MLayout>
        );
    }
}
