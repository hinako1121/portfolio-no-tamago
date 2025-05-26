"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Upload, Github, ImageIcon, FileText, Link } from "lucide-react"

interface PostAppScreenProps {
  onNavigate: (screen: string) => void
}

export function PostAppScreen({ onNavigate }: PostAppScreenProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    githubUrl: "",
    liveUrl: "",
    version: "1.0",
  })

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-stone-200 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => onNavigate("dashboard")}
                className="text-stone-600 hover:text-stone-900 hover:bg-stone-100"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                戻る
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="text-xl font-bold text-amber-900">アプリを投稿</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-8">
        <Card className="border-0 shadow-strong bg-white">
          <CardHeader className="bg-amber-500 text-white p-4 sm:p-6">
            <CardTitle className="text-2xl sm:text-3xl font-bold">新しいアプリを投稿</CardTitle>
            <CardDescription className="text-white/90 text-base sm:text-lg">
              あなたの作品を共有して、フィードバックを受け取りましょう
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-8 space-y-6 sm:space-y-8">
            {/* Title */}
            <div className="space-y-2 sm:space-y-3">
              <label className="text-sm font-semibold text-stone-900 flex items-center">
                <FileText className="mr-2 h-4 w-4" />
                アプリタイトル <span className="text-red-500 ml-1">*</span>
              </label>
              <Input
                placeholder="例：タスク管理アプリ"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="h-11 sm:h-12 border-stone-200 focus:border-amber-500 focus:ring-amber-500/20 text-base sm:text-lg"
              />
            </div>

            {/* Thumbnail Upload */}
            <div className="space-y-2 sm:space-y-3">
              <label className="text-sm font-semibold text-stone-900 flex items-center">
                <ImageIcon className="mr-2 h-4 w-4" />
                サムネイル画像 <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="border-2 border-dashed border-stone-300 rounded-xl p-8 sm:p-12 text-center hover:border-amber-400 hover:bg-amber-50/50 transition-all duration-200 cursor-pointer">
                <Upload className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-stone-400 mb-3 sm:mb-4" />
                <p className="text-stone-700 text-base sm:text-lg font-medium mb-2">
                  <span className="hidden sm:inline">画像をドラッグ&ドロップするか、クリックして選択</span>
                  <span className="sm:hidden">タップして画像を選択</span>
                </p>
                <p className="text-xs sm:text-sm text-stone-500">推奨サイズ: 1200x630px (PNG, JPG, WebP)</p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2 sm:space-y-3">
              <label className="text-sm font-semibold text-stone-900">
                説明文 <span className="text-red-500 ml-1">*</span>
              </label>
              <Textarea
                placeholder="アプリの機能や特徴を詳しく説明してください..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="border-stone-200 focus:border-amber-500 focus:ring-amber-500/20 min-h-[120px] sm:min-h-[150px] text-base"
              />
              <p className="text-xs text-stone-500">{formData.description.length}/1000文字</p>
            </div>

            {/* Category */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-stone-900">
                カテゴリ <span className="text-red-500 ml-1">*</span>
              </label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger className="h-12 border-stone-200 focus:border-amber-500 text-base">
                  <SelectValue placeholder="カテゴリを選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web">Webアプリ</SelectItem>
                  <SelectItem value="mobile">モバイルアプリ</SelectItem>
                  <SelectItem value="game">ゲーム</SelectItem>
                  <SelectItem value="tool">ツール</SelectItem>
                  <SelectItem value="other">その他</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* URLs */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <div className="space-y-2 sm:space-y-3">
                <label className="text-sm font-semibold text-stone-900 flex items-center">
                  <Github className="mr-2 h-4 w-4" />
                  GitHubリンク
                </label>
                <Input
                  placeholder="https://github.com/username/repo"
                  value={formData.githubUrl}
                  onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                  className="h-11 sm:h-12 border-stone-200 focus:border-amber-500 focus:ring-amber-500/20 text-base"
                />
              </div>
              <div className="space-y-2 sm:space-y-3">
                <label className="text-sm font-semibold text-stone-900 flex items-center">
                  <Link className="mr-2 h-4 w-4" />
                  公開URL
                </label>
                <Input
                  placeholder="https://your-app.com"
                  value={formData.liveUrl}
                  onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                  className="h-11 sm:h-12 border-stone-200 focus:border-amber-500 focus:ring-amber-500/20 text-base"
                />
              </div>
            </div>

            {/* Version */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-stone-900">バージョン</label>
              <Input
                value={formData.version}
                readOnly
                className="w-32 h-12 border-stone-200 bg-stone-50 text-stone-500 cursor-not-allowed"
              />
              <p className="text-xs text-stone-500">初回投稿時のバージョンは1.0で固定です</p>
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 pt-4 sm:pt-8">
              <Button
                onClick={() => onNavigate("dashboard")}
                variant="outline"
                className="flex-1 h-11 sm:h-12 border-stone-200 text-stone-700 hover:bg-stone-50 text-base font-medium order-2 sm:order-1"
              >
                下書き保存
              </Button>
              <Button
                onClick={() => onNavigate("dashboard")}
                className="flex-1 h-11 sm:h-12 bg-amber-500 hover:bg-amber-600 text-white shadow-medium text-base font-medium order-1 sm:order-2"
              >
                公開する
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
