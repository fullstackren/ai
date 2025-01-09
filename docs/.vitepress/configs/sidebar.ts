import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/dev-tools/': [
    {
      text: '快捷技巧',
      items: [
        { text: '快捷技巧', link: '/quick-tips' },
        { text: '标签页分组', link: '/quick-tips/tab-group' },
      ]
    }
  ],
  '/quick-tips/': [
    {
      text: '快捷技巧',
      items: [
        { text: '快捷技巧', link: '/quick-tips' },
        { text: '标签页分组', link: '/quick-tips/tab-group' },
      ]
    }
  ]
}
