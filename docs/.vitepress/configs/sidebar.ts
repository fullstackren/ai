import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/news/': [
    {
      text: 'AI 动态', link: '/news',
      items: [
        { text: '【AI动态】2025年1月20日', link: '/news/ai-news-20250120' },
      ]
    }
  ],
  '/app/': [
    {
      text: '实现应用', link: '/app',
      items: [
        { text: 'DeepSeek 在 Cursor 中的应用', link: '/app/deepseek-in-cursor' },
      ]
    }
  ],
  '/basic/': [
    {
      text: '',
      items: [
        { text: '理论硬知识', link: '/' },
        { text: 'AI 大模型技术架构', link: '/basic/ai-big-model-architecture-diagram' },
      ]
    }
  ],
}
