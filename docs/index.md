---
layout: home
layoutClass: 'df-home-layout'

hero:
  name: AI 中文
  text: 简化工作流程，让开发更简单
  tagline: 助你腾出更多时间专注于成长和快乐
  image:
    src: /logo.png
    alt: AI 中文
  actions:
features:
---

<script setup>
import DfMine from './components/df-mine/DfMine.vue';
import { NEWS_DATA } from './components/df-mine/df-news-data.ts';
</script>

## 动态

<ClientOnly>
  <DfMine :data="NEWS_DATA" />
</ClientOnly>

<style lang="scss">

.df-home-layout {
  /* 覆盖全局的 vp-layout-max-width（仅当前页面使用） */
  --vp-layout-max-width: 1660px;

  /* layout 样式 */
  .container {
    max-width: var(--vp-layout-max-width) !important;
  }
  .content-container,
  .content {
    max-width: 100% !important;
    padding-bottom: 24px !important;
  }

  /* aside 样式 */
  .aside {
    padding-left: 0;
    max-width: 224px;
  }

  /* custom-block */
  .custom-block {
    .custom-block-title {
      font-size: var(--vp-custom-block-font-size);
    }
    ul {
      margin: 8px 0;
    }
    li {
      margin: 0;
    }
  }

  .vp-doc h2 {
    margin-top: 24px;
  }

  /*爱的魔力转圈圈*/
  .image-src:hover {
    transform: translate(-50%, -50%) rotate(666turn);
    transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
  }

  .details small {
    opacity: 0.8;
  }
}

</style>