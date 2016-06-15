/**
 * 本DEMO来自：http://xgrommx.github.io/rx-book/content/guidelines/introduction/index.html
 * DEMO的主要内容是从github上取得用户，并过滤出最你最关心的3位用户.
 */

var Rx = require('rxjs/Rx');

require('../styles/common.css');
require('../styles/rxjs-gitquery.css');

import {ajaxGet} from '../libs/helper';

// 谷歌查询API的基础网址
var apiUrl = "https://api.github.com/users";

// 查询按钮
var queryButton = document.querySelector('.btn-query');

// Click[event] ==> URL[string] ==> JSON[Object]
var DOMClick = Rx.Observable.fromEvent(queryButton, 'click');


DOMClick.subscribe(
    (x) => {
        ajaxGet(apiUrl).subscribe(
            (x) => {
                console.log(x);
            }
        );
    }
);
