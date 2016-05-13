var $ = require('jquery');

require('./rg-raw.tag');

require('../images/guide/btn_d.png');
require('../images/guide/btn_u.png');

<rgaccordion>
  <style scoped>
    .list {
      width:100%;
    }

    .list dt {
      margin-left: 20px;
      color: #262626;
      font-weight: normal;
      height: 44px;
      line-height: 44px;
      font-size: 17px;
      border-bottom: 1px solid #e7eced;
      background: url(./assets/images/btn_d.png) 95% 17px no-repeat;
      cursor: pointer;
    }

    .list dt.hover {
      background: url(./assets/images/btn_u.png) 95% 17px no-repeat;
    }

    .list dd {
      font-size: 14px;
      line-height: 24px;
      color: #666;
      width: 94%;
      padding: 10px 5%;
      display: none;
    }
  </style>

  <dl class="list" each={guides}>
    <dt onclick={toggle}>{title}</dt>
    <dd class="bg-normal">
      <rgraw content="{content}"></rgraw>
    </dd>
  </dl>

  <script>
    this.guides = opts.guides;

    // toggle accordion's status(open, close)
    this.toggle = (e) => {
      var $toggled = $(e.currentTarget);
      var $content = $toggled.parent('.list').find("dd");
      $toggled.toggleClass("hover");
      $content.slideToggle();
    }
  </script>
</rgaccordion>
