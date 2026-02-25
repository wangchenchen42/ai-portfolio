import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChenChen · AI 作品集',
  description: '我的 AI 作品集 — 游戏、应用与创意实验',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
