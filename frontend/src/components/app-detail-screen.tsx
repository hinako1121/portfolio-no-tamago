"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowLeft,
  Star,
  MessageCircle,
  Github,
  ExternalLink,
  Calendar,
  User,
  ChevronDown,
  ChevronUp,
  Twitter,
  Linkedin,
  Globe,
} from "lucide-react"

interface AppDetailScreenProps {
  onNavigate: (screen: string) => void
}

export function AppDetailScreen({ onNavigate }: AppDetailScreenProps) {
  const [newComment, setNewComment] = useState("")
  const [selectedVersion, setSelectedVersion] = useState("2.1")
  const [isVersionHistoryOpen, setIsVersionHistoryOpen] = useState(false)
  const [ratings, setRatings] = useState({
    design: 0,
    usability: 0,
    originality: 0,
    practicality: 0,
    overall: 0,
  })

  const app = {
    id: 1,
    title: "タスク管理アプリ",
    description:
      "シンプルで使いやすいタスク管理ツール。チーム協働機能も充実しており、プロジェクトの進捗管理から個人のタスク管理まで幅広く対応できます。直感的なUIと豊富な機能で、効率的なタスク管理を実現します。",
    category: "Webアプリ",
    author: {
      name: "田中太郎",
      avatar: "/placeholder.svg?height=40&width=40",
      bio: "フロントエンドエンジニア。React、Next.jsを使ったWebアプリ開発が得意です。ユーザビリティを重視したアプリを作っています。5年以上の開発経験があり、特にモダンなWebアプリケーションの設計・実装を得意としています。",
      github: "https://github.com/tanaka",
      twitter: "https://twitter.com/tanaka",
      linkedin: "https://linkedin.com/in/tanaka",
      website: "https://tanaka-portfolio.com",
    },
    rating: 4.5,
    totalRatings: 24,
    comments: 12,
    thumbnail: "/placeholder.svg?height=400&width=600",
    githubUrl: "https://github.com/tanaka/task-manager",
    liveUrl: "https://task-manager-demo.com",
    createdAt: "2024年1月15日",
    updatedAt: "2024年3月10日",
    versions: [
      {
        version: "2.1",
        date: "2024年3月10日",
        changes: "チーム機能の追加、UIの改善、バグ修正",
        isLatest: true,
      },
      {
        version: "2.0",
        date: "2024年2月20日",
        changes: "メジャーアップデート：新しいダッシュボード、通知機能",
        isLatest: false,
      },
      {
        version: "1.0",
        date: "2024年1月15日",
        changes: "初回リリース",
        isLatest: false,
      },
    ],
  }

  const feedbacksByVersion = {
    "2.1": [
      {
        id: 1,
        user: {
          name: "佐藤花子",
          avatar: "/placeholder.svg?height=32&width=32",
        },
        rating: 5,
        detailedRatings: {
          design: 5,
          usability: 5,
          originality: 4,
          practicality: 5,
        },
        comment:
          "とても使いやすいアプリです！UIがシンプルで直感的に操作できます。チーム機能も便利で、プロジェクト管理が格段に楽になりました。",
        date: "2024年3月12日",
        version: "2.1",
      },
    ],
    "2.0": [
      {
        id: 2,
        user: {
          name: "山田次郎",
          avatar: "/placeholder.svg?height=32&width=32",
        },
        rating: 4,
        detailedRatings: {
          design: 4,
          usability: 3,
          originality: 5,
          practicality: 4,
        },
        comment: "新しいダッシュボードは素晴らしいですが、モバイル版の対応がもう少し改善されると嬉しいです。",
        date: "2024年2月25日",
        version: "2.0",
      },
    ],
    "1.0": [
      {
        id: 3,
        user: {
          name: "鈴木一郎",
          avatar: "/placeholder.svg?height=32&width=32",
        },
        rating: 5,
        detailedRatings: {
          design: 4,
          usability: 5,
          originality: 5,
          practicality: 5,
        },
        comment: "個人利用からチーム利用まで幅広く使えて素晴らしいです。特にタスクの優先度設定機能が気に入っています。",
        date: "2024年1月20日",
        version: "1.0",
      },
    ],
  }

  const handleRatingChange = (category: string, value: number) => {
    setRatings((prev) => ({ ...prev, [category]: value }))
  }

  const StarRating = ({
    rating,
    onRatingChange,
    readonly = false,
  }: {
    rating: number
    onRatingChange?: (value: number) => void
    readonly?: boolean
  }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 cursor-pointer transition-colors ${
              star <= rating ? "fill-amber-400 text-amber-400" : "text-stone-300 hover:text-amber-400"
            } ${readonly ? "cursor-default" : ""}`}
            onClick={() => !readonly && onRatingChange?.(star)}
          />
        ))}
      </div>
    )
  }

  const currentFeedbacks = feedbacksByVersion[selectedVersion as keyof typeof feedbacksByVersion] || []

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-stone-200 shadow-soft">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between h-14 sm:h-16">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button
                variant="ghost"
                onClick={() => onNavigate("list")}
                className="text-stone-600 hover:text-stone-900 hover:bg-stone-100 h-9 sm:h-10 px-2 sm:px-3"
              >
                <ArrowLeft className="mr-1 sm:mr-2 h-4 w-4" />
                <span className="hidden xs:inline">戻る</span>
              </Button>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs sm:text-sm">P</span>
                </div>
                <span className="text-lg sm:text-xl font-bold text-amber-900">アプリ詳細</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* App Info */}
            <Card className="border-0 shadow-medium bg-white overflow-hidden">
              <CardHeader className="bg-amber-500 text-white p-4 sm:p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-3">
                      <CardTitle className="text-2xl sm:text-3xl font-bold line-clamp-2">{app.title}</CardTitle>
                      <Badge className="bg-white/20 text-white border-white/30 self-start">
                        v{app.versions[0].version}
                      </Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 mb-4">
                      <div className="flex items-center space-x-1">
                        <StarRating rating={app.rating} readonly />
                        <span className="text-white/90 ml-2 font-medium text-sm sm:text-base">
                          {app.rating} ({app.totalRatings}件)
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-white/80">
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="h-4 w-4" />
                          <span className="text-sm">{app.comments}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {app.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <div className="p-0">
                <img
                  src={app.thumbnail || "/placeholder.svg"}
                  alt={app.title}
                  className="w-full h-48 sm:h-80 object-cover"
                />
              </div>

              <CardContent className="p-4 sm:p-8">
                <p className="text-stone-700 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">{app.description}</p>

                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white shadow-medium h-10 sm:h-11 text-sm sm:text-base">
                    <ExternalLink className="mr-1 sm:mr-2 h-4 w-4" />
                    アプリを開く
                  </Button>
                  <Button
                    variant="outline"
                    className="border-stone-200 text-stone-700 hover:bg-stone-50 h-10 sm:h-11 text-sm sm:text-base"
                  >
                    <Github className="mr-1 sm:mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </div>

                {/* Author Info */}
                <div className="p-4 sm:p-6 bg-orange-50 rounded-xl">
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                    <Avatar className="h-12 w-12 sm:h-14 sm:w-14 ring-2 ring-amber-100">
                      <AvatarImage src={app.author.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-amber-500 text-white text-sm sm:text-base">田中</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold text-stone-900 text-base sm:text-lg mb-1">{app.author.name}</p>
                      <p className="text-xs sm:text-sm text-stone-600 mb-3 leading-relaxed">{app.author.bio}</p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex flex-wrap gap-2">
                    {app.author.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-stone-200 text-stone-700 hover:bg-stone-50 h-8 text-xs"
                        onClick={() => window.open(app.author.github, "_blank")}
                      >
                        <Github className="mr-1 h-3 w-3" />
                        GitHub
                      </Button>
                    )}
                    {app.author.twitter && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-stone-200 text-stone-700 hover:bg-stone-50 h-8 text-xs"
                        onClick={() => window.open(app.author.twitter, "_blank")}
                      >
                        <Twitter className="mr-1 h-3 w-3" />
                        Twitter
                      </Button>
                    )}
                    {app.author.linkedin && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-stone-200 text-stone-700 hover:bg-stone-50 h-8 text-xs"
                        onClick={() => window.open(app.author.linkedin, "_blank")}
                      >
                        <Linkedin className="mr-1 h-3 w-3" />
                        LinkedIn
                      </Button>
                    )}
                    {app.author.website && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-stone-200 text-stone-700 hover:bg-stone-50 h-8 text-xs"
                        onClick={() => window.open(app.author.website, "_blank")}
                      >
                        <Globe className="mr-1 h-3 w-3" />
                        Website
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Version History */}
            <Card className="border-0 shadow-soft bg-white">
              <CardHeader>
                <Collapsible open={isVersionHistoryOpen} onOpenChange={setIsVersionHistoryOpen}>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                      <CardTitle className="text-xl font-semibold text-stone-900">バージョン履歴</CardTitle>
                      {isVersionHistoryOpen ? (
                        <ChevronUp className="h-4 w-4 text-stone-500" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-stone-500" />
                      )}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-4">
                      <div className="space-y-6">
                        {app.versions.map((version, index) => (
                          <div key={version.version} className="flex items-start space-x-4">
                            <div className="flex-shrink-0 mt-1">
                              <div
                                className={`w-3 h-3 rounded-full ${version.isLatest ? "bg-amber-500" : "bg-stone-300"}`}
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <span className="font-semibold text-stone-900">v{version.version}</span>
                                {version.isLatest && (
                                  <Badge className="bg-amber-500 text-white border-0 text-xs">最新</Badge>
                                )}
                                <span className="text-sm text-stone-500">{version.date}</span>
                              </div>
                              <p className="text-stone-600">{version.changes}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </CardHeader>
              {!isVersionHistoryOpen && (
                <CardContent>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="font-semibold text-stone-900">v{app.versions[0].version}</span>
                        <Badge className="bg-amber-500 text-white border-0 text-xs">最新</Badge>
                        <span className="text-sm text-stone-500">{app.versions[0].date}</span>
                      </div>
                      <p className="text-stone-600">{app.versions[0].changes}</p>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Comments Section */}
            <Card className="border-0 shadow-soft bg-white">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                  <CardTitle className="text-xl font-semibold text-stone-900">コメント・フィードバック</CardTitle>
                  <Select value={selectedVersion} onValueChange={setSelectedVersion}>
                    <SelectTrigger className="w-full sm:w-40 h-10 border-stone-200 focus:border-amber-500">
                      <SelectValue placeholder="バージョン選択" />
                    </SelectTrigger>
                    <SelectContent>
                      {app.versions.map((version) => (
                        <SelectItem key={version.version} value={version.version}>
                          v{version.version}
                          {version.isLatest && " (最新)"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {currentFeedbacks.length > 0 ? (
                    currentFeedbacks.map((feedback) => (
                      <div key={feedback.id} className="border-b border-stone-100 pb-8 last:border-b-0">
                        <div className="flex items-start space-x-4">
                          <Avatar className="flex-shrink-0">
                            <AvatarImage src={feedback.user.avatar || "/placeholder.svg"} />
                            <AvatarFallback className="bg-amber-500 text-white">{feedback.user.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-3">
                              <span className="font-semibold text-stone-900">{feedback.user.name}</span>
                              <StarRating rating={feedback.rating} readonly />
                              <span className="text-sm text-stone-500">{feedback.date}</span>
                            </div>

                            {/* 詳細評価 */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3 text-xs">
                              <div className="flex items-center justify-between bg-stone-50 px-2 py-1 rounded">
                                <span className="text-stone-600">デザイン</span>
                                <span className="font-semibold text-stone-900">{feedback.detailedRatings.design}</span>
                              </div>
                              <div className="flex items-center justify-between bg-stone-50 px-2 py-1 rounded">
                                <span className="text-stone-600">使いやすさ</span>
                                <span className="font-semibold text-stone-900">
                                  {feedback.detailedRatings.usability}
                                </span>
                              </div>
                              <div className="flex items-center justify-between bg-stone-50 px-2 py-1 rounded">
                                <span className="text-stone-600">独創性</span>
                                <span className="font-semibold text-stone-900">
                                  {feedback.detailedRatings.originality}
                                </span>
                              </div>
                              <div className="flex items-center justify-between bg-stone-50 px-2 py-1 rounded">
                                <span className="text-stone-600">実用性</span>
                                <span className="font-semibold text-stone-900">
                                  {feedback.detailedRatings.practicality}
                                </span>
                              </div>
                            </div>

                            <p className="text-stone-700 mb-4 leading-relaxed">{feedback.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-stone-500">このバージョンにはまだコメントがありません</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Rating Form */}
            <Card className="border-0 shadow-soft bg-white">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-stone-900">このアプリを評価</CardTitle>
                <CardDescription className="text-stone-600">あなたの評価とコメントを投稿してください</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-stone-700">デザイン</span>
                    <StarRating
                      rating={ratings.design}
                      onRatingChange={(value) => handleRatingChange("design", value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-stone-700">使いやすさ</span>
                    <StarRating
                      rating={ratings.usability}
                      onRatingChange={(value) => handleRatingChange("usability", value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-stone-700">独創性</span>
                    <StarRating
                      rating={ratings.originality}
                      onRatingChange={(value) => handleRatingChange("originality", value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-stone-700">実用性</span>
                    <StarRating
                      rating={ratings.practicality}
                      onRatingChange={(value) => handleRatingChange("practicality", value)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-stone-700">総合評価</span>
                    <StarRating
                      rating={ratings.overall}
                      onRatingChange={(value) => handleRatingChange("overall", value)}
                    />
                  </div>
                </div>

                <Textarea
                  placeholder="コメントを入力してください..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="border-stone-200 focus:border-amber-500 focus:ring-amber-500/20"
                  rows={4}
                />

                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white shadow-medium">評価を投稿</Button>
              </CardContent>
            </Card>

            {/* App Stats */}
            <Card className="border-0 shadow-soft bg-white">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-stone-900">アプリ情報</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 text-stone-400" />
                  <span className="text-sm text-stone-600">公開日: {app.createdAt}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 text-stone-400" />
                  <span className="text-sm text-stone-600">最終更新: {app.updatedAt}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="h-4 w-4 text-stone-400" />
                  <span className="text-sm text-stone-600">開発者: {app.author.name}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-4 w-4 text-stone-400" />
                  <span className="text-sm text-stone-600">評価数: {app.totalRatings}件</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-4 w-4 text-stone-400" />
                  <span className="text-sm text-stone-600">コメント数: {app.comments}件</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
