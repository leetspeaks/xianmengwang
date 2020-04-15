new Vue({
    el : "#app",
    data(){
        return{
            banner : [
                {
                    id : 1,
                    imgUrl : "../images/ad-2.jpg"
                },
                {
                    id : 2,
                    imgUrl : "../images/ad-2.jpg"
                },
                {
                    id : 3,
                    imgUrl : "../images/ad-2.jpg"
                },
                {
                    id : 4,
                    imgUrl : "../images/ad-2.jpg"
                },
                {
                    id : 5,
                    imgUrl : "../images/ad-2.jpg"
                }
            ],
            recommend : [
                {
                    id : 1,
                    imgUrl : "../images/oil.jpg",
                    title : "荣耀 6 Plus(PE-TL10) 3G内核增强版",
                    price : "￥1124.00",
                },
                {
                    id : 2,
                    imgUrl : "../images/oil.jpg",
                    title : "荣耀 6 Plus(PE-TL10) 3G内核增强版",
                    price : "￥1124.00",
                },
                {
                    id : 3,
                    imgUrl : "../images/oil.jpg",
                    title : "荣耀 6 Plus(PE-TL10) 3G内核增强版",
                    price : "￥1124.00",
                },
                {
                    id : 4,
                    imgUrl : "../images/oil.jpg",
                    title : "荣耀 6 Plus(PE-TL10) 3G内核增强版",
                    price : "￥1124.00",
                },
                {
                    id : 5,
                    imgUrl : "../images/oil.jpg",
                    title : "荣耀 6 Plus(PE-TL10) 3G内核增强版",
                    price : "￥1124.00",
                }
            ],
            store : [
                {
                    id : 1,
                    title : "四川成都武侯区",
                    msg : "武侯分店一部"
                },
                {
                    id : 2,
                    title : "四川成都武侯区",
                    msg : "武侯分店一部"
                },
                {
                    id : 3,
                    title : "四川成都武侯区",
                    msg : "武侯分店一部"
                },
                {
                    id : 4,
                    title : "四川成都武侯区",
                    msg : "武侯分店一部"
                },
                {
                    id : 5,
                    title : "四川成都武侯区",
                    msg : "武侯分店一部"
                }
            ],
            hot : [
                {
                    id : "1",
                    imgUrl : "../images/product8.jpg",
                    title : "陈克明 面条 克明面业 麦禧福面 福拌一生 五福礼盒挂面 399*5",
                    price : "￥223.12",
                    num : "123"
                },
                {
                    id : "2",
                    imgUrl : "../images/product8.jpg",
                    title : "陈克明 面条 克明面业 麦禧福面 福拌一生 五福礼盒挂面 399*5",
                    price : "￥223.12",
                    num : "123"
                },
                {
                    id : "3",
                    imgUrl : "../images/product8.jpg",
                    title : "陈克明 面条 克明面业 麦禧福面 福拌一生 五福礼盒挂面 399*5",
                    price : "￥223.12",
                    num : "123"
                },
                {
                    id : "4",
                    imgUrl : "../images/product8.jpg",
                    title : "陈克明 面条 克明面业 麦禧福面 福拌一生 五福礼盒挂面 399*5",
                    price : "￥223.12",
                    num : "123"
                }
            ],
            promotion : [
                {
                    id : 1,
                    imgUrl : "../images/product1.jpg",
                    title : "Orion 好丽友 熊猫派派福巧克力味4 枚100g/盒"
                },
                {
                    id : 2,
                    imgUrl : "../images/product2.jpg",
                    title : "Orion 好丽友 熊猫派派福巧克力味4 枚100g/盒"
                },
                {
                    id : 3,
                    imgUrl : "../images/product3.jpg",
                    title : "Orion 好丽友 熊猫派派福巧克力味4 枚100g/盒"
                },
                {
                    id : 4,
                    imgUrl : "../images/product4.jpg",
                    title : "Orion 好丽友 熊猫派派福巧克力味4 枚100g/盒"
                },
                {
                    id : 5,
                    imgUrl : "../images/product5.jpg",
                    title : "Orion 好丽友 熊猫派派福巧克力味4 枚100g/盒"
                }
            ],
            floor_title : [
                {
                    id : 1,
                    msg : "苹果"
                },
                {
                    id : 1,
                    msg : "香蕉"
                },
                {
                    id : 1,
                    msg : "橙子"
                },
                {
                    id : 1,
                    msg : "哈密瓜"
                },
                {
                    id : 1,
                    msg : "白菜"
                },
                {
                    id : 1,
                    msg : "青菜"
                }
            ],
            floor_content : [
                {
                    id : 1,
                    imgUrl : "../images/product6.jpg",
                    title : "olay 玉兰油新生素颜金纯活能水",
                    price : "￥123.00",
                    num : "345"
                },
                {
                    id : 2,
                    imgUrl : "../images/product7.jpg",
                    title : "olay 玉兰油新生素颜金纯活能水",
                    price : "￥123.00",
                    num : "345"
                },
                {
                    id : 3,
                    imgUrl : "../images/product8.jpg",
                    title : "olay 玉兰油新生素颜金纯活能水",
                    price : "￥123.00",
                    num : "345"
                },
                {
                    id : 4,
                    imgUrl : "../images/product9.jpg",
                    title : "olay 玉兰油新生素颜金纯活能水",
                    price : "￥123.00",
                    num : "345"
                },
                {
                    id : 5,
                    imgUrl : "../images/product10.jpg",
                    title : "olay 玉兰油新生素颜金纯活能水",
                    price : "￥123.00",
                    num : "345"
                },
                {
                    id : 6,
                    imgUrl : "../images/product11.jpg",
                    title : "olay 玉兰油新生素颜金纯活能水",
                    price : "￥123.00",
                    num : "345"
                },
                {
                    id : 7,
                    imgUrl : "../images/product12.jpg",
                    title : "olay 玉兰油新生素颜金纯活能水",
                    price : "￥123.00",
                    num : "345"
                },
                {
                    id : 8,
                    imgUrl : "../images/product13.jpg",
                    title : "olay 玉兰油新生素颜金纯活能水",
                    price : "￥123.00",
                    num : "345"
                }
            ],
            like : [
                {
                    id : 1,
                    imgUrl : "../images/like1.jpg",
                    title : "御泥坊 玫瑰滋养+红石榴亮颜美肌套装 深层补水滋润 提亮肤色",
                    price : "￥123.00",
                    num : "345"
                },
                {
                    id : 2,
                    imgUrl : "../images/like2.jpg",
                    title : "御泥坊 玫瑰滋养+红石榴亮颜美肌套装 深层补水滋润 提亮肤色",
                    price : "￥123.00",
                    num : "345"
                },
                {
                    id : 3,
                    imgUrl : "../images/like3.jpg",
                    title : "御泥坊 玫瑰滋养+红石榴亮颜美肌套装 深层补水滋润 提亮肤色",
                    price : "￥123.00",
                    num : "345"
                },
                {
                    id : 4,
                    imgUrl : "../images/like4.jpg",
                    title : "御泥坊 玫瑰滋养+红石榴亮颜美肌套装 深层补水滋润 提亮肤色",
                    price : "￥123.00",
                    num : "345"
                },
                {
                    id : 5,
                    imgUrl : "../images/like5.jpg",
                    title : "御泥坊 玫瑰滋养+红石榴亮颜美肌套装 深层补水滋润 提亮肤色",
                    price : "￥123.00",
                    num : "345"
                },
                {
                    id : 6,
                    imgUrl : "../images/like6.jpg",
                    title : "御泥坊 玫瑰滋养+红石榴亮颜美肌套装 深层补水滋润 提亮肤色",
                    price : "￥123.00",
                    num : "345"
                },
                {
                    id : 7,
                    imgUrl : "../images/like7.jpg",
                    title : "御泥坊 玫瑰滋养+红石榴亮颜美肌套装 深层补水滋润 提亮肤色",
                    price : "￥123.00",
                    num : "345"
                },
                {
                    id : 8,
                    imgUrl : "../images/like8.jpg",
                    title : "御泥坊 玫瑰滋养+红石榴亮颜美肌套装 深层补水滋润 提亮肤色",
                    price : "￥123.00",
                    num : "345"
                },
                {
                    id : 9,
                    imgUrl : "../images/like1.jpg",
                    title : "御泥坊 玫瑰滋养+红石榴亮颜美肌套装 深层补水滋润 提亮肤色",
                    price : "￥123.00",
                    num : "345"
                },
                {
                    id : 10,
                    imgUrl : "../images/like2.jpg",
                    title : "御泥坊 玫瑰滋养+红石榴亮颜美肌套装 深层补水滋润 提亮肤色",
                    price : "￥123.00",
                    num : "345"
                },
                {
                    id : 11,
                    imgUrl : "../images/like3.jpg",
                    title : "御泥坊 玫瑰滋养+红石榴亮颜美肌套装 深层补水滋润 提亮肤色",
                    price : "￥123.00",
                    num : "345"
                },
                {
                    id : 12,
                    imgUrl : "../images/like4.jpg",
                    title : "御泥坊 玫瑰滋养+红石榴亮颜美肌套装 深层补水滋润 提亮肤色",
                    price : "￥123.00",
                    num : "345"
                },
                {
                    id : 13,
                    imgUrl : "../images/like5.jpg",
                    title : "御泥坊 玫瑰滋养+红石榴亮颜美肌套装 深层补水滋润 提亮肤色",
                    price : "￥123.00",
                    num : "345"
                },
                {
                    id : 14,
                    imgUrl : "../images/like6.jpg",
                    title : "御泥坊 玫瑰滋养+红石榴亮颜美肌套装 深层补水滋润 提亮肤色",
                    price : "￥123.00",
                    num : "345"
                },
                {
                    id : 15,
                    imgUrl : "../images/like7.jpg",
                    title : "御泥坊 玫瑰滋养+红石榴亮颜美肌套装 深层补水滋润 提亮肤色",
                    price : "￥123.00",
                    num : "345"
                },
                {
                    id : 16,
                    imgUrl : "../images/like8.jpg",
                    title : "御泥坊 玫瑰滋养+红石榴亮颜美肌套装 深层补水滋润 提亮肤色",
                    price : "￥123.00",
                    num : "345"
                }
            ],
            service : [
                {
                    id : 1,
                    imgUrl : "../images/icon2.jpg",
                    title : "安全保证",
                    msg : "多重保证机制 认证商城"
                },
                {
                    id : 2,
                    imgUrl : "../images/icon3.jpg",
                    title : "正品保证",
                    msg : "正品行货 放心选购"
                },
                {
                    id : 3,
                    imgUrl : "../images/icon4.jpg",
                    title : "七天无理由退换",
                    msg : "七天无理由保证消费权益"
                },
                {
                    id : 4,
                    imgUrl : "../images/icon5.jpg",
                    title : "价格保证",
                    msg : "价格更低，质量更可靠"
                }
            ],
            foot : [
                {
                    id : 1,
                    title : "新手上路",
                    msg : [
                        {
                            content : "售后流程"
                        },
                        {
                            content : "购买流程"                            
                        },
                        {
                            content : "订购方式"
                        },
                        {
                            content : "隐私申明"
                        },
                        {
                             content : "推荐分享说明"
                        }
                    ]
                },
                {
                    id : 2,
                    title : "配送与支付",
                    msg : [
                        {
                            content : "售后流程"
                        },
                        {
                            content : "购买流程"
                        },
                        {
                            content : "订购方式"
                        },
                        {
                            content : "隐私申明"
                        },
                        {
                            content : "推荐分享说明"
                        }
                    ]
                },
                {
                    id : 3,
                    title : "售后保障",
                    msg : [
                        {
                            content : "售后流程"
                        },
                        {
                            content : "购买流程"
                        },
                        {
                            content : "订购方式"
                        },
                        {
                            content : "常见问题"
                        }
                    ]
                },
                {
                    id : 4,
                    title : "支付方式",
                    msg : [
                        {
                            content : "售后流程"
                        },
                        {
                            content : "购买流程"
                        },
                        {
                            content : "隐私申明"
                        },
                        {
                            content : "常见问题"
                        }
                    ]
                },
                {
                    id : 5,
                    title : "帮助中心",
                    msg : [
                        {
                            content : "售后流程"
                        },
                        {
                            content : "购买流程"
                        },
                        {
                            content : "订购方式"
                        },
                        {
                            content : "常见问题"
                        }
                    ]
                }
            ]
        }
    }
});