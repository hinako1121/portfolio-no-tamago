"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, MessageCircle, Edit, Trash2, Plus, TrendingUp, Award } from "lucide-react"
import { useNavigate } from 'react-router-dom'

interface DashboardScreenProps {
  onNavigate: (screen: string) => void
}

export function DashboardScreen({ onNavigate }: DashboardScreenProps) {
  const navigate = useNavigate()

  const userApps = [
    {
      id: 1,
      title: "タスク管理アプリ",
      description: "シンプルで使いやすいタスク管理ツール",
      category: "Webアプリ",
      rating: 4.5,
      comments: 12,
      version: "2.1",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "天気予報アプリ",
      description: "リアルタイムの天気情報を表示",
      category: "モバイルアプリ",
      rating: 4.2,
      comments: 8,
      version: "1.3",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
  ]

  const stats = [
    { label: "総投稿数", value: "2", icon: TrendingUp, color: "text-emerald-600" },
    { label: "平均評価", value: "4.3", icon: Award, color: "text-yellow-600" },
  ]

  return (
    <div className="min-h-screen bg-amber-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-amber-900">ダッシュボード</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* 最近のアプリ */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-strong">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-stone-800">最近のアプリ</CardTitle>
              <CardDescription className="text-stone-600">あなたが投稿したアプリの一覧</CardDescription>
            </CardHeader>
            <CardContent>
              {userApps.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-stone-600 mb-4">まだアプリがありません</p>
                  <Button
                    onClick={() => navigate('/apps/new')}
                    className="bg-amber-500 hover:bg-amber-600 text-white"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    アプリを投稿する
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {userApps.map((app) => (
                    <Card key={app.id} className="border border-stone-200 hover:border-amber-200 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-stone-900 mb-1">{app.title}</h3>
                            <p className="text-sm text-stone-600 mb-2">{app.description}</p>
                            <div className="flex items-center space-x-4">
                              <Badge variant="outline" className="border-stone-200 text-stone-700">
                                {app.category}
                              </Badge>
                              <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                                <span className="text-sm text-stone-700">{app.rating}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MessageCircle className="h-4 w-4 text-stone-400" />
                                <span className="text-sm text-stone-600">{app.comments}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* プロフィール */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-strong">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-stone-800">プロフィール</CardTitle>
              <CardDescription className="text-stone-600">あなたのプロフィール情報</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-6">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder.svg" alt="User avatar" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-stone-900">ユーザー名</h3>
                  <p className="text-sm text-stone-600">user@example.com</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-stone-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                      <span className="text-sm text-stone-600">{stat.label}</span>
                    </div>
                    <p className="text-2xl font-semibold text-stone-900 mt-1">{stat.value}</p>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => navigate('/profile/edit')}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white"
              >
                <Edit className="mr-2 h-4 w-4" />
                プロフィールを編集
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default DashboardScreen
