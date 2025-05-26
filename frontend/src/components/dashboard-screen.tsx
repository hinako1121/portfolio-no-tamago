"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, MessageCircle, Edit, Trash2, Plus, TrendingUp, Award } from "lucide-react"
import { Box, Typography, Grid } from '@mui/material'
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
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        ダッシュボード
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="最近のアプリ" />
            <CardContent>
              <Typography variant="body1">
                まだアプリがありません。
              </Typography>
              <Box sx={{ mt: 2 }}>
                <button
                  onClick={() => navigate('/apps/new')}
                  className="text-amber-600 hover:text-amber-700 font-medium transition-colors"
                >
                  アプリを投稿する
                </button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="プロフィール" />
            <CardContent>
              <Typography variant="body1">
                プロフィールを編集しましょう。
              </Typography>
              <Box sx={{ mt: 2 }}>
                <button
                  onClick={() => navigate('/profile/edit')}
                  className="text-amber-600 hover:text-amber-700 font-medium transition-colors"
                >
                  プロフィールを編集
                </button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default DashboardScreen
