var $ = require('jquery');
var riot = require('riot');

require('../libs/jquery-picture.js');

require('../styles/common.css');
require('../styles/guide.css');

require('../tags/rg-accordion.tag');

require('../images/guide/newbie-banner.png');
require('../images/guide/newbie-banner@2x.png');
require('../images/guide/newbie-banner@3x.png');
require('../images/guide/newbie-icon.png');
require('../images/guide/newbie-icon@2x.png');
require('../images/guide/newbie-icon@3x.png');

// 加载图片响应框架
$(function() {
  $(".xf-mobile-guide-banner > picture").picture();
});
// compile and render accordion component.
riot.mount('.xf-mobile-guide-list', {
  guides: [
    {
      title: "为什么选择犇小富？",
      content:
        "<h5>高额收益</h5>"
        + "<p>年化收益11%-15%， 是银行活期利率的56倍。</p>"
      + "<h5>灵活变现</h5>"
      + "<ul>"
        + "<li><span class='xf-circle xf-circle-normal'></span>15天可债权转让</li>"
        + "<li><span class='xf-circle xf-circle-normal'></span>99%转让成功虑</li>"
        + "<li><span class='xf-circle xf-circle-normal'></span>1-12个月投资理财期限产品，自由组合</li>"
      + "</ul>"
      + "<h5>五星风控</h5>"
      + "<ul>"
        + "<li><span class='xf-circle xf-circle-normal'></span>顶级风控模型</li>"
        + "<li><span class='xf-circle xf-circle-normal'></span>'冰鉴'为您保驾护航</li>"
      + "</ul>"
    },
    {
      title: "犇小富是什么公司？",
      content:
      "<p>犇小富（小富金融）成立于2014年5月8日，总部位于华中互联网金融产业基地武汉商务区，泛海国际SOHU城。注册资本5000万元，风险准备金1000万元，是中国互联网金融P2P信贷知名企业。</p>"
      + "<ul>"
        + "<li><span class='xf-circle xf-circle-normal'></span>武汉互联网金融信息行业协会副会长单位</li>"
        + "<li><span class='xf-circle xf-circle-normal'></span>荣获中央服务业引导资金支持</li>"
        + "<li><span class='xf-circle xf-circle-normal'></span>网贷之家五星风控评级</li>"
        + "<li><span class='xf-circle xf-circle-normal'></span>武汉常青盟联合创始人</li>"
      + "</ul>"
    },
    {
      title: "理财收益从哪里来？",
      content: "<p>理财收益的最本质来源为平台接入的各类优质债卷。</p>"
    },
    {
      title: "犇小富如何保障资金的安全？",
      content:
      "<h5>本金保障计划</h5>"
      + "<p>犇小富为所有用户建立本金保障计划，平台投资人在犇小富的投资行为100%适用于本机保障计划。当借款人逾期时通过风险保证先行付。</p>"
    },
    {
      title: "如何投资犇小富？",
      content:
      "<div class='block-center'>"
        + "<p class='h6 noBold'>下载并安装犇小富</p>"
        + "<span class='xf-icon-down'></span>"
        + "<p class='h6 noBold'>我的-立即注册</p>"
        + "<span class='xf-icon-down'></span>"
        + "<p class='h6 noBold'>我的-银行卡管理</p>"
        + "<span class='xf-icon-down'></span>"
        + "<p class='h6 noBold'>立即投资</p>"
      +"</div>"
    },
    {
      title: "如何获取更多犇小富的信息？",
      content:
        "<p class='h6 noBold'>官方网站: <a href='http://www.xiaofujr.com'>www.xiaofujr.com</a></p>"
      + "<p class='h6 noBold'>官方QQ群: 258674173</p>"
      + "<p class='h6 noBold'>管方微信: xiaofujr（订阅号）</p>"
      + "<p class='h6 noBold'>办公地址: 武汉中央商务区泛海国际SOHO城2栋906室</p>"
    }
  ]
});
