"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Star, MessageCircle, TrendingUp, Clock, Grid, List } from "lucide-react"

interface AppListScreenProps {
  onNavigate: (screen: string) => void
}

export function AppListScreen({ onNavigate }: AppListScreenProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("all")
  const [sortBy, setSortBy] = useState("popular")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const apps = [
    {
      id: 1,
      title: "タスク管理アプリ",
      description: "シンプルで使いやすいタスク管理ツール。チーム協働機能も充実。",
      category: "Webアプリ",
      author: "田中太郎",
      rating: 4.5,
      comments: 12,
      thumbnail: "/placeholder.svg?height=200&width=300",
      isNew: false,
      isFeatured: true,
    },
    {
      id: 2,
      title: "天気予報アプリ",
      description: "リアルタイムの天気情報を美しいUIで表示するモバイルアプリ。",
      category: "モバイルアプリ",
      author: "佐藤花子",
      rating: 4.2,
      comments: 8,
      thumbnail: "/placeholder.svg?height=200&width=300",
      isNew: true,
      isFeatured: false,
    },
    {
      id: 3,
      title: "パズルゲーム",
      description: "頭を使う楽しいパズルゲーム。100以上のレベルを用意。",
      category: "ゲーム",
      author: "山田次郎",
      rating: 4.7,
      comments: 25,
      thumbnail: "/placeholder.svg?height=200&width=300",
      isNew: false,
      isFeatured: true,
    },
    {
      id: 4,
      title: "家計簿アプリ",
      description: "簡単に収支を記録できる家計簿アプリ。グラフ表示機能付き。",
      category: "ツール",
      author: "鈴木一郎",
      rating: 4.3,
      comments: 15,
      thumbnail: "/placeholder.svg?height=200&width=300",
      isNew: true,
      isFeatured: false,
    },
  ]

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-stone-200 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="text-xl font-bold text-amber-900">ポートフォリオのたまご</span>
              </div>
              <div className="hidden md:flex space-x-1">
                <Button variant="ghost" className="text-amber-600 bg-amber-50 hover:bg-amber-100">
                  ホーム
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => onNavigate("dashboard")}
                  className="text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                >
                  マイページ
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => onNavigate("post")}
                className="bg-amber-500 hover:bg-amber-600 text-white shadow-medium"
              >
                投稿する
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">アプリ一覧</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">みんなが作った素晴らしいアプリを発見しよう</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6 sm:mb-8 border-0 shadow-soft bg-white">
          <CardContent className="p-4 sm:p-6">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-stone-400" />
                <Input
                  placeholder="アプリを検索..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-11 sm:h-12 border-stone-200 focus:border-amber-500 focus:ring-amber-500/20 text-base"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="h-11 sm:h-12 border-stone-200 focus:border-amber-500 text-base">
                    <SelectValue placeholder="カテゴリ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">すべて</SelectItem>
                    <SelectItem value="web">Webアプリ</SelectItem>
                    <SelectItem value="mobile">モバイルアプリ</SelectItem>
                    <SelectItem value="game">ゲーム</SelectItem>
                    <SelectItem value="tool">ツール</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex gap-3">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="flex-1 sm:w-32 h-11 sm:h-12 border-stone-200 focus:border-amber-500 text-base">
                      <SelectValue placeholder="並び順" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">人気順</SelectItem>
                      <SelectItem value="newest">新着順</SelectItem>
                      <SelectItem value="rating">評価順</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex border border-stone-200 rounded-lg p-1">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className="h-9 w-9 sm:h-10 sm:w-10 p-0"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className="h-9 w-9 sm:h-10 sm:w-10 p-0"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Featured Apps Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6 px-1">
            <div className="p-1.5 sm:p-2 bg-amber-500 rounded-lg">
              <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">注目のアプリ</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {apps
              .filter((app) => app.isFeatured)
              .map((app) => (
                <Card
                  key={app.id}
                  className="border-0 shadow-medium hover:shadow-strong transition-all duration-300 bg-white group cursor-pointer overflow-hidden"
                  onClick={() => onNavigate("detail")}
                >
                  <CardHeader className="p-0">
                    <div className="relative">
                      <img
                        src={app.thumbnail || "/placeholder.svg"}
                        alt={app.title}
                        className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                        <Badge className="bg-yellow-500 text-white border-0 shadow-medium text-xs sm:text-sm">
                          注目
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <CardTitle className="text-base sm:text-lg font-semibold text-stone-900 mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {app.title}
                    </CardTitle>
                    <CardDescription className="text-stone-600 mb-3 sm:mb-4 line-clamp-2 text-sm sm:text-base">
                      {app.description}
                    </CardDescription>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="border-stone-200 text-stone-700 text-xs sm:text-sm">
                        {app.category}
                      </Badge>
                      <span className="text-xs sm:text-sm text-stone-500">by {app.author}</span>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                        <span className="text-xs sm:text-sm font-medium text-stone-700">{app.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 text-stone-400" />
                        <span className="text-xs sm:text-sm text-stone-600">{app.comments}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* New Apps Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6 px-1">
            <div className="p-1.5 sm:p-2 bg-emerald-600 rounded-lg">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">新着アプリ</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {apps
              .filter((app) => app.isNew)
              .map((app) => (
                <Card
                  key={app.id}
                  className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 bg-white group cursor-pointer"
                  onClick={() => onNavigate("detail")}
                >
                  <CardHeader className="p-0">
                    <div className="relative">
                      <img
                        src={app.thumbnail || "/placeholder.svg"}
                        alt={app.title}
                        className="w-full h-24 sm:h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2 bg-emerald-600 text-white border-0 text-xs">
                        NEW
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-4">
                    <CardTitle className="text-xs sm:text-sm font-semibold text-stone-900 mb-1 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {app.title}
                    </CardTitle>
                    <CardDescription className="text-xs text-stone-600 mb-2 sm:mb-3 line-clamp-2">
                      {app.description.slice(0, 30)}...
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-medium text-stone-700">{app.rating}</span>
                      </div>
                      <span className="text-xs text-stone-500 truncate max-w-16 sm:max-w-none">{app.author}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Apps Grid */}
        <div>
          <h2 className="text-2xl font-bold text-stone-900 mb-6">すべてのアプリ</h2>
          <div
            className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
          >
            {apps.map((app) => (
              <Card
                key={app.id}
                className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 bg-white group cursor-pointer"
                onClick={() => onNavigate("detail")}
              >
                <div className={`${viewMode === "list" ? "flex" : ""}`}>
                  <CardHeader className={`p-0 ${viewMode === "list" ? "w-48 flex-shrink-0" : ""}`}>
                    <div className="relative">
                      <img
                        src={app.thumbnail || "/placeholder.svg"}
                        alt={app.title}
                        className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                          viewMode === "list" ? "w-full h-32" : "w-full h-48"
                        }`}
                      />
                      {app.isNew && (
                        <Badge className="absolute top-2 left-2 bg-emerald-600 text-white border-0 text-xs">NEW</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className={`${viewMode === "list" ? "flex-1 flex flex-col justify-between" : ""} p-6`}>
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg font-semibold text-stone-900 group-hover:text-amber-600 transition-colors">
                          {app.title}
                        </CardTitle>
                        {app.isFeatured && (
                          <Badge className="bg-yellow-500 text-white border-0 text-xs ml-2">注目</Badge>
                        )}
                      </div>
                      <CardDescription className="text-stone-600 mb-4 line-clamp-2">{app.description}</CardDescription>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-stone-200 text-stone-700">
                          {app.category}
                        </Badge>
                        <span className="text-sm text-stone-500">by {app.author}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <span className="text-sm font-medium text-stone-700">{app.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="h-4 w-4 text-stone-400" />
                            <span className="text-sm text-stone-600">{app.comments}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
