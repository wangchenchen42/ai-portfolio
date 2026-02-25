'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

// ===== 作品数据（可替换） =====
const works = [
  {
    id: 1,
    title: '疯狂8点',
    type: 'AI游戏',
    tagClass: 'tag-game',
    desc: '用 AI 生成的经典纸牌游戏，支持多人对战，规则简单上手快。',
    url: 'https://crazy8.chenchen.space',
    github: '', // 可填入 GitHub 链接
    emoji: '🃏',
  },
  {
    id: 2,
    title: '新星防御',
    type: 'AI游戏',
    tagClass: 'tag-game',
    desc: '塔防策略游戏，AI 生成关卡与敌人波次，每局体验不同。',
    url: 'https://tower.chenchen.space',
    github: '',
    emoji: '🏰',
  },
  {
    id: 3,
    title: '星际游戏',
    type: 'AI游戏',
    tagClass: 'tag-game',
    desc: '太空探索主题游戏，AI 驱动的星系生成与剧情叙事。',
    url: 'https://xingji.chenchen.space',
    github: '',
    emoji: '🚀',
  },
  {
    id: 4,
    title: '色彩敏感度测试',
    type: 'AI应用',
    tagClass: 'tag-app',
    desc: '测试你的色彩分辨能力，AI 动态调整难度，生成个性化报告。',
    url: 'https://color.chenchen.space',
    github: '',
    emoji: '🎨',
  },
  {
    id: 5,
    title: '运动心跳可视化',
    type: 'AI应用',
    tagClass: 'tag-app',
    desc: '将运动数据转化为动态心跳波形可视化，AI 分析运动健康趋势。',
    url: 'https://heartbeat.chenchen.space',
    github: '',
    emoji: '💓',
  },
]

// ===== 声明 Vanta 全局类型 =====
declare global {
  interface Window {
    VANTA: {
      BIRDS: (config: Record<string, unknown>) => { destroy: () => void }
    }
    THREE: unknown
  }
}

export default function Home() {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffect = useRef<{ destroy: () => void } | null>(null)

  // ===== 动态加载 Vanta.js BIRDS 背景 =====
  useEffect(() => {
    const loadScript = (src: string): Promise<void> =>
      new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve()
          return
        }
        const s = document.createElement('script')
        s.src = src
        s.onload = () => resolve()
        s.onerror = reject
        document.head.appendChild(s)
      })

    const initVanta = async () => {
      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js')
        await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js')
        if (vantaRef.current && window.VANTA) {
          vantaEffect.current = window.VANTA.BIRDS({
            el: vantaRef.current,
            THREE: window.THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            // 魔幻配色：深紫背景 + 金色鸟群
            backgroundColor: 0x0a0a0f,
            color1: 0x7c3aed,
            color2: 0xf59e0b,
            colorMode: 'lerp',
            birdSize: 1.2,
            wingSpan: 25.0,
            speedLimit: 4.0,
            separation: 60.0,
            alignment: 40.0,
            cohesion: 30.0,
            quantity: 3.0,
          })
        }
      } catch (e) {
        console.warn('Vanta.js 加载失败，使用纯色背景', e)
      }
    }

    initVanta()
    return () => {
      vantaEffect.current?.destroy()
    }
  }, [])

  return (
    <>
      {/* ===== Vanta 背景容器（固定全屏） ===== */}
      <div
        ref={vantaRef}
        className="fixed inset-0 -z-10"
        style={{ background: '#0a0a0f' }}
      />

      {/* ===== 导航栏 ===== */}
      <nav className="nav-glass fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-magic text-xl font-bold gradient-text">
            ✦ ChenChen
          </a>
          {/* 导航链接 */}
          <div className="flex gap-8">
            <a
              href="#works"
              className="text-sm text-purple-300 hover:text-yellow-300 transition-colors duration-200 tracking-wide"
            >
              AI 作品
            </a>
            <a
              href="#about"
              className="text-sm text-purple-300 hover:text-yellow-300 transition-colors duration-200 tracking-wide"
            >
              关于我
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10">

        {/* ===== Hero 区 ===== */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
          <div className="float-anim">
            {/* 副标题 */}
            <p className="text-purple-400 text-sm tracking-[0.3em] uppercase mb-6 opacity-80">
              ✦ &nbsp; AI Creator &nbsp; ✦
            </p>
            {/* 主标题：故障特效 */}
            <h1
              className="glitch-text font-magic text-5xl md:text-7xl font-bold mb-4 gradient-text"
              data-text="ChenChen"
            >
              ChenChen
            </h1>
            {/* 副标题 */}
            <p className="text-xl md:text-2xl text-purple-200 mb-4 font-magic">
              AI 作品集
            </p>
            <p className="text-gray-400 max-w-md mx-auto mb-10 leading-relaxed">
              用 AI 构建游戏、应用与创意实验 —— 每一个作品都是一次魔法咒语。
            </p>
            {/* CTA 按钮 */}
            <a
              href="#works"
              className="btn-magic inline-block px-8 py-3 rounded-full text-sm font-medium tracking-wider"
            >
              探索作品 ✦
            </a>
          </div>

          {/* 向下滚动提示 */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-purple-500 opacity-50 animate-bounce text-2xl">
            ↓
          </div>
        </section>

        {/* ===== 分割线 ===== */}
        <div className="magic-divider mx-auto max-w-4xl" />

        {/* ===== 作品展示区 ===== */}
        <section id="works" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            {/* 区块标题 */}
            <div className="text-center mb-16">
              <p className="text-yellow-500 text-xs tracking-[0.4em] uppercase mb-3 opacity-70">
                ✦ &nbsp; My Works &nbsp; ✦
              </p>
              <h2 className="font-magic text-3xl md:text-4xl font-bold gradient-text">
                AI 作品
              </h2>
            </div>

            {/* 作品网格：1列 → 2列 → 3列 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {works.map((work) => (
                <div key={work.id} className="card-magic rounded-2xl overflow-hidden group">
                  {/* 作品封面占位区（可替换为 Next.js Image 组件） */}
                  {/* 替换方式：将下方 div 替换为 <Image src="/works/xxx.png" alt={work.title} width={400} height={200} /> */}
                  <div className="h-44 flex items-center justify-center text-6xl bg-gradient-to-br from-purple-900/40 to-indigo-900/40 border-b border-purple-800/30">
                    {work.emoji}
                  </div>

                  <div className="p-6">
                    {/* 类型标签 */}
                    <span className={`${work.tagClass} text-xs px-3 py-1 rounded-full font-medium`}>
                      {work.type}
                    </span>

                    {/* 标题 */}
                    <h3 className="font-magic text-lg font-bold text-white mt-3 mb-2 group-hover:text-yellow-300 transition-colors">
                      {work.title}
                    </h3>

                    {/* 描述 */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {work.desc}
                    </p>

                    {/* 链接按钮 */}
                    <div className="flex gap-3">
                      <a
                        href={work.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-magic flex-1 text-center py-2 rounded-lg text-xs font-medium"
                      >
                        🔮 演示
                      </a>
                      {work.github && (
                        <a
                          href={work.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-magic px-4 py-2 rounded-lg text-xs font-medium"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 分割线 ===== */}
        <div className="magic-divider mx-auto max-w-4xl" />

        {/* ===== 关于我区 ===== */}
        <section id="about" className="py-24 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-yellow-500 text-xs tracking-[0.4em] uppercase mb-3 opacity-70">
              ✦ &nbsp; About Me &nbsp; ✦
            </p>
            <h2 className="font-magic text-3xl md:text-4xl font-bold gradient-text mb-12">
              关于我
            </h2>

            {/* 头像 */}
            <div className="w-28 h-28 mx-auto mb-8 float-anim" style={{ boxShadow: '0 0 30px rgba(124,58,237,0.5)', borderRadius: '50%' }}>
              <Image
                src="/avatar.png"
                alt="ChenChen 头像"
                width={112}
                height={112}
                className="rounded-full border-2 border-purple-500 object-cover w-full h-full"
              />
            </div>

            {/* 个人简介（可替换） */}
            <p className="text-gray-300 leading-relaxed mb-10 text-base">
              你好，我是 ChenChen。热爱用 AI 构建有趣的东西 —— 游戏、工具、可视化。
              每个项目都是一次探索，每行代码都是一句咒语。
            </p>

            {/* 联系方式（可替换链接） */}
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="mailto:your@email.com"  // 替换为你的邮箱
                className="btn-magic px-5 py-2.5 rounded-full text-sm"
              >
                📧 邮箱
              </a>
              <a
                href="https://github.com/yourname"  // 替换为你的 GitHub
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magic px-5 py-2.5 rounded-full text-sm"
              >
                🐙 GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourname"  // 替换为你的领英
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magic px-5 py-2.5 rounded-full text-sm"
              >
                💼 领英
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ===== 页脚 ===== */}
      <footer className="relative z-10 border-t border-purple-900/30 py-8 px-6 text-center">
        <p className="text-gray-600 text-sm mb-3">
          © 2026 ChenChen · 用魔法与代码构建
        </p>
        {/* Vercel 部署标识 */}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs text-gray-700 hover:text-purple-400 transition-colors"
        >
          <svg height="10" viewBox="0 0 283 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-18-18.99-18zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-18-18.99-18zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" />
          </svg>
          Deployed on Vercel
        </a>
      </footer>
    </>
  )
}
