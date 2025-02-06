import type { MineData } from './types'

// 平台动态
export const NEWS_DATA: MineData[] = [
  {
    title: 'LangChain 中文',
    time: "2025-01-20",
    desc: '中文网的 LangChain 使用指南对我来说阅读不是很友好和顺手，这是我搭建的<a href="https://langchain.fullstack.ren/" target="_blank" rel="noreferrer">《LangChain 中文》</a>',
    image: '/news/langchain.png',
    icon: '/icons/langchain.png'
  },
  {
    title: 'AI 中文',
    time: "2025/1/1",
    desc: '简化工作流程，让开发更简单，这是我搭建的<a href="http://ai.fullstack.ren/" :target="_blank" rel="noreferrer">《Ai 中文》</a>',
    image: '/news/ai.jpeg',
    icon: '/icons/jianghu.jpg',
  }
]
