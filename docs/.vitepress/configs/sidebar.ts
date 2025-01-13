import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/app/': [
    {
      text: '实现应用', link: '/app',
      items: [
        { text: 'DeepSeek 在 Cursor 中的应用', link: '/app/deepseek-in-cursor' },
      ]
    }
  ],
  '/theory/': [
    {
      text: '',
      items: [
        { text: '理论硬知识', link: '/' },
      ]
    }
  ],
}
