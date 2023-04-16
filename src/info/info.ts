

export class homeInfo{
    // TODO home页面展示内容编辑，支持编辑姓名，年龄，当前所在城市，学历，工作状态，自述，求职意向城市
    name: string = "胡涛";
    age: string = "25";
    location: string = "昆明";
    diploma: string = "大专";
    status: string = "离职";
    readme: string = "我是一名拥有四年开发经验的前端工程师，目前正在寻找一份新的的工作。如果你想了解更多，请继续往下看";
    workPlace:object=[
        //TODO 求职意向城市，数据格式为{place：“城市名称”}
        {place:'杭州'},
        {place:'上海'},
        {place:'深圳'},
    ]
}

export class skillInfo{
    //TODO skill页面展示内容编辑，支持编辑内外圈展示内容以及自述
    outCircleList:Object=[
        //TODO 外圈内容展示，数据格式为{name：”自定义内容“}，最大数量支持添加8个
        {name: 'SQLite'},
        {name: 'Android'},
        {name: 'Vue'},
        {name: 'Angular'},
        {name: 'Node'},
        {name: 'RxJS'},
        {name: 'Cordova'},
        {name: 'Ionic'}
    ];
    innerCircleList:object=[
        //TODO 内圈内容展示，数据格式为{name：”自定义内容“}，最大数量支持添加4个
        {name: 'HTML'},
        {name: 'JS'},
        {name: 'CSS'},
        {name: 'TS'}
    ];
    //TODO 描述内容编辑，支持插入html标签
    readme: string = "<p> " +
        "熟悉主流前端框架Angular,Vue<br> " +
        "熟悉混合APP开发框架，ionic，Cordova并且能够进行Android原生开发<br>" +
        "熟悉git，npm等常用团队协作包管理程序<br>" +
        "熟悉敏捷式开发流程，模块化组件化开发<br>" +
        "了解uni-app，小程序开发</p>";
}

export class workExperienceInfo{

    //TODO workExperience页面展示内容编辑
    experienceList:Object=[
        {
            name:'云南科传大数据',
            startTime: '2019年6月',
            endTime: '2022年6月',
            useSkill:"ionic，angular，Cordova，sqlite，Android",
            workDescription:"在职期间主要负责公司产品项目科传蜂鸟POS与一些业务项目开发<br>" +
                "该产品是一款供给商场收银使用的Android智能POS应用，其主要功能为，生成订单并进行支付(撤销,退货)，交易完成后存储上传订单并生成对应小票，订单查询，日结等<br>" +
                "产品项目方面主要负责把订单交易部分的共性内容进行解耦，转化为产品插件，持续优化产品相关功能迭代BUG修复<br>" +
                "业务项目方面，主要负责华润IMPOS相关需求开发与BUG修复以及优化，该项目为蜂鸟POS产品项目的主要代码提供项目之一，协助其他同事进行蜂鸟POS衍生业务项目开发工作"
        },
        {
            name:'云南旷视文化传播有限公司',
            startTime: '2018年11月',
            endTime: '2019年5月',
            useSkill:"vue，Cordova，mpvue，uni-app，原生小程序",
            workDescription:"期间主要负责公司外包项目，APP，小程序开发"
        },
        {
            name:'丽江云创',
            startTime: '2018年6月',
            endTime: '2018年10月',
            useSkill:"ionic，Cordova，angular ",
            workDescription:"使用 ionic，Cordova，angular，typescript 进行可去考 APP 开发，项目前期独立负责完成可去考教练 APP 功能与前端界面开发，项目中后期主要负责可去考学车与可去考教练两个APP的Android平台的功能开发与维护"
        }
    ]
}

export class contactMeInfo{

    //TODO 添加描述关键词，格式为 {keywords: 'XXX'},
    keywordsList: Object = [
        {keywords: '求知'},
        {keywords: '挑战'},
        {keywords: '沟通'},
    ];

    //TODO 添加详细描述，支持添加html标签优化文本显示
    briefDescription: string =
        "<p>求知欲强，喜欢尝试新的东西</p>" +
        "<p>敢于挑战，通过不断尝试，为成功蓄力</p>" +
        "<p>乐于沟通，希望能通过有效沟通来规避一些可避免问题</p>" +
        "<p>如果你觉得我符合你们的招聘需求，请联系我</p>" ;

    //TODO 添加联系方式，格式为{title: "XXXX", content: 'XXXXX'},
    contactInformation: object = [
        {title: "QQ(微信)", content: '690690413'},
        {title: "邮箱", content: '690690413@qq.com'},
        {title: "电话", content: '17387214540'},
    ];

    //TODO 配置是否添加word简历下载，allow为true的时候则允许下载，为false的时候不显示下载链接，若allow为true，则需要配置href：路径为编译后简历文件路径， documentName下载后文件名称
    downloadWord:object={
        allow:true,
        href:"resume.docx",
        documentName:"胡涛的个人简历.docx",

    }

}