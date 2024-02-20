# ☁️ 云编译

还在困扰如何搭建编译环境？芯片越来越多，环境也越来越多？电脑好卡呀~ 好，云编译来为你排忧解难~

已支持的平台:

1. air101       - Air101的LuatOS固件
2. air103       - Air103的LuatOS固件
3. air105       - Air105的LuatOS固件
4. idf5-esp32c3 - ESP32C3的LuatOS固件
5. idf5-esp32s3 - ESP32S3的LuatOS固件
6. ec618-luatos - ec618系列(Air780E/Air600E等)的LuatOS固件
7. ec618-csdk   - ec618系列(Air780E/Air600E等)的CSDK
8. air601       - Air601的LuatOS固件
9. air601-at    - Air601的AT固件
10. ec718p-luatos - ec718P系列(Air780EP/Air780EPV)的LuatOS固件

## 提醒

1. 页面显示的flash占用为估算值,若编译成功就是能放得下
2. soc文件本身也是压缩包(但不需要解压它),**soc文件的大小并不代表底层固件的真实大小**

这里我们以Air101为展示

## 访问构建网站

[https://luatos.com](https://luatos.com)

![image.png](https://cdn.openluat-luatcommunity.openluat.com/images/20211011092251619_image.png)

## 点击登录

使用合宙[erp账号](http://erp.openluat.com)登录即可. 若没有账号, 可免费注册. 本服务免费使用.

![QQ截图20211011092353.png](https://cdn.openluat-luatcommunity.openluat.com/images/20211011092608787_QQ截图20211011092353.png)

## 点击右上角构建

点击右上角菜单新构建，自定义构建名称，可以是任意英文字符, 与具体构建类型无关.

![image.png](https://cdn.openluat-luatcommunity.openluat.com/images/20211011092859451_image.png)

![image.png](https://cdn.openluat-luatcommunity.openluat.com/images/20211011092945203_image.png)

![20211011093313018_image.png](https://cdn.openluat-luatcommunity.openluat.com/images/20211011094139885_20211011093313018_image.png)

## 勾选想要的组件

![20211011093354772_image.png](https://cdn.openluat-luatcommunity.openluat.com/images/20211011094238218_20211011093354772_image.png)

## 点击右上角保存修改，之后点击准备就绪

**注意：一定要点击保存修改**

![20211011093452493_image.png](https://cdn.openluat-luatcommunity.openluat.com/images/20211011094345320_20211011093452493_image.png)

等待编译，过一段时间刷新一下结果

![image.png](https://cdn.openluat-luatcommunity.openluat.com/images/20211011093739823_image.png)

编译成功，点击下载即可

## **常见问题：**

### 为何我编译失败？

编译失败的问题有很多，通常有这几种比较常见：

1. 为未点击保存修改就点击准备就绪。
2. 组件选择过多，或字体的选择导致flash大小不够,导致编译失败
3. 固件包都是压缩包, soc也是压缩包,并不直接代表固件大小
4. 若持续失败, 请[联系我们](../../pages/supports.md) 或者[报issue](https://github.com/openLuat/LuatOS)

## 自定义字库怎么用

自定义字库的名称, 与云编译页面上字库的 "命名" 值相同. 即 字体英文名_字体类型_字号

1. 自定义字库与原有字库不冲突
2. 自定义字库与原有字库的引用方式差异

```lua
-- 原有字库的引用方式
lcd.font_opposansm12_chinese

-- 自定义字库的引用方式
fonts.get("oppo_bold_12")
```

使用方式

```lua
-- 原有字库的引用方式, 各自引用
lcd.setFont(lcd.font_opposansm12_chinese)
eink.setFont(eink.font_opposansm12_chinese)
u8g2.setFont(u8g2.font_opposansm12_chinese)

-- 自定义字库的引用方式, 统一使用
lcd.setFont(fonts.get("oppo_bold_12"))
eink.setFont(fonts.get("oppo_bold_12"))
u8g2.setFont(fonts.get("oppo_bold_12"))
```
