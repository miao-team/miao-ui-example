# MIAO-UI 是一个基于 Taro(2.0+) 框架的组件库
### 本项目为 MIAO-UI 组件库的演示项目
[![GitHub stars](https://img.shields.io/github/stars/yinliangdream/miao-ui?style=for-the-badge) ![GitHub forks](https://img.shields.io/github/forks/yinliangdream/miao-ui?style=for-the-badge)](https://github.com/yinLiangDream/miao-ui)


## 特色

- 全部组件采用 TypeScript 编写，所有类型申有清晰有了
- 丰富的配色方案，统一管理组件的配色方案/极具色彩表现力
- 丰富的组件库，应有尽有 0 耦合

## 使用方式

>
> 安装：`npm i miao-ui`， `yarn add miao-ui`
> 演示项目安装：`npm i miao-ui-example`， `yarn add miao-ui-example`
## _注意_

> _当前版本为开发版本,请暂时不要下载或用于项目中！_

## 使用案例

### 引入 `CSS` 文件

引入 `CSS` 需要在 `src` 目录下 `app.scss` 中引入样式

```js
@import "~miao-ui/src/style/index.scss";
```

### 引入组件

```jsx
import { MIcon } from "miao-ui";

<MIcon size="xl" color="red" icon="home" />;
```
