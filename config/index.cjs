/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx97db456850575c50',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'e3317c016389dc58133071db8f7732fb',

  PROVINCE: '江西',
  CITY: '南昌',

  USERS: [
    {
      // 想要发送的人的名字
      name: '我的璐小崽，想你了',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oEYzM6V2ifNhS0O_IM5BaEWFP_hM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'EFOyRETq9Vjce6d2_BafQlY2XgsCd3p-tmwYX3RiccE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '我的璐小崽', year: '1998', date: '02-28',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-02-05' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '	n3cWC8ScV_QlnAXuD_6ax1macvCltu8MQ97SWDgfVIA',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oEYzM6dgzDPHpfeQlfhAQ_opDbU8',
    }
  ],

}

module.exports = USER_CONFIG

