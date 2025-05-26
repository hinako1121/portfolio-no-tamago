"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Twitter, Save, User, Mail } from "lucide-react"
import { ArrowLeft, Upload } from "lucide-react"

interface ProfileEditScreenProps {
  onNavigate: (screen: string) => void
}

export function ProfileEditScreen({ onNavigate }: ProfileEditScreenProps) {
  const [profileData, setProfileData] = useState({
    username: "田中太郎",
    email: "tanaka@example.com",
    bio: "フロントエンドエンジニア。React、Next.jsを使ったWebアプリ開発が得意です。ユーザビリティを重視したアプリを作っています。",
    github: "https://github.com/tanaka",
    linkedin: "https://linkedin.com/in/tanaka",
    twitter: "https://twitter.com/tanaka",
  })

  const [isUploading, setIsUploading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    console.log("Profile saved:", profileData)
    onNavigate("dashboard")
  }

  const handleImageUpload = () => {
    setIsUploading(true)
    setTimeout(() => {
      setIsUploading(false)
    }, 2000)
  }

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
                <span className="text-xl font-bold text-amber-900">プロフィール編集</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                onClick={() => onNavigate("dashboard")}
                className="border-stone-200 text-stone-700 hover:bg-stone-50"
              >
                キャンセル
              </Button>
              <Button onClick={handleSave} className="bg-amber-500 hover:bg-amber-600 text-white shadow-medium">
                <Save className="mr-2 h-4 w-4" />
                保存
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-8">
        <div className="space-y-6 sm:space-y-8">
          {/* Profile Picture Section */}
          <Card className="border-0 shadow-soft bg-white">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl font-semibold text-stone-900 flex items-center">
                <User className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                プロフィール画像
              </CardTitle>
              <CardDescription className="text-stone-600 text-sm sm:text-base">
                あなたのプロフィール画像を設定してください
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-8">
              <div className="flex flex-col items-center space-y-4 sm:space-y-6 text-center">
                <Avatar className="h-24 w-24 sm:h-32 sm:w-32 ring-4 ring-amber-100 shadow-medium">
                  <AvatarImage src="/placeholder.svg?height=128&width=128" />
                  <AvatarFallback className="bg-amber-500 text-white text-2xl sm:text-3xl font-bold">
                    田中
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-3 sm:space-y-4">
                  <Button
                    onClick={handleImageUpload}
                    disabled={isUploading}
                    className="bg-amber-500 hover:bg-amber-600 text-white shadow-medium h-10 sm:h-11 text-sm sm:text-base"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    {isUploading ? "アップロード中..." : "画像を変更"}
                  </Button>
                  <div className="space-y-1">
                    <p className="text-sm text-stone-600">推奨サイズ: 400x400px (PNG, JPG, WebP)</p>
                    <p className="text-xs text-stone-500">最大ファイルサイズ: 5MB</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Basic Information */}
          <Card className="border-0 shadow-soft bg-white">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl font-semibold text-stone-900">基本情報</CardTitle>
              <CardDescription className="text-stone-600 text-sm sm:text-base">
                あなたの基本的な情報を入力してください
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-8 space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="space-y-2 sm:space-y-3">
                  <Label htmlFor="username" className="text-sm font-semibold text-stone-900 flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    ユーザー名 <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Input
                    id="username"
                    value={profileData.username}
                    onChange={(e) => handleInputChange("username", e.target.value)}
                    className="h-11 sm:h-12 border-stone-200 focus:border-amber-500 focus:ring-amber-500/20 text-base"
                  />
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <Label htmlFor="email" className="text-sm font-semibold text-stone-900 flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    メールアドレス
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    readOnly
                    className="h-11 sm:h-12 border-stone-200 bg-stone-50 text-stone-500 cursor-not-allowed text-base"
                  />
                  <p className="text-xs text-stone-500">メールアドレスは変更できません</p>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <Label htmlFor="bio" className="text-sm font-semibold text-stone-900">
                  自己紹介
                </Label>
                <Textarea
                  id="bio"
                  value={profileData.bio}
                  onChange={(e) => handleInputChange("bio", e.target.value)}
                  placeholder="あなたについて教えてください..."
                  className="border-stone-200 focus:border-amber-500 focus:ring-amber-500/20 min-h-[100px] sm:min-h-[120px] text-base"
                />
                <p className="text-xs text-stone-500">{profileData.bio.length}/500文字</p>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="border-0 shadow-soft bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-stone-900">ソーシャルリンク</CardTitle>
              <CardDescription className="text-stone-600">
                あなたのソーシャルメディアアカウントを追加してください
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-3">
                <Label htmlFor="github" className="text-sm font-semibold text-stone-900 flex items-center">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Label>
                <Input
                  id="github"
                  value={profileData.github}
                  onChange={(e) => handleInputChange("github", e.target.value)}
                  placeholder="https://github.com/username"
                  className="h-12 border-stone-200 focus:border-amber-500 focus:ring-amber-500/20"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="linkedin" className="text-sm font-semibold text-stone-900 flex items-center">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Label>
                <Input
                  id="linkedin"
                  value={profileData.linkedin}
                  onChange={(e) => handleInputChange("linkedin", e.target.value)}
                  placeholder="https://linkedin.com/in/username"
                  className="h-12 border-stone-200 focus:border-amber-500 focus:ring-amber-500/20"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="twitter" className="text-sm font-semibold text-stone-900 flex items-center">
                  <Twitter className="mr-2 h-4 w-4" />
                  Twitter
                </Label>
                <Input
                  id="twitter"
                  value={profileData.twitter}
                  onChange={(e) => handleInputChange("twitter", e.target.value)}
                  placeholder="https://twitter.com/username"
                  className="h-12 border-stone-200 focus:border-amber-500 focus:ring-amber-500/20"
                />
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6">
            <Button
              variant="outline"
              onClick={() => onNavigate("dashboard")}
              className="border-stone-200 text-stone-700 hover:bg-stone-50 h-11 sm:h-12 px-6 sm:px-8 text-base order-2 sm:order-1"
            >
              キャンセル
            </Button>
            <Button
              onClick={handleSave}
              className="bg-amber-500 hover:bg-amber-600 text-white shadow-medium h-11 sm:h-12 px-6 sm:px-8 text-base order-1 sm:order-2"
            >
              <Save className="mr-2 h-4 w-4" />
              変更を保存
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
