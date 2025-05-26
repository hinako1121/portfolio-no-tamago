"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Github, Mail, Sparkles, ArrowLeft, Eye, EyeOff } from "lucide-react"
import { useNavigate } from 'react-router-dom'

export function SignupScreen() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: サインアップ処理を実装
    console.log('Signup:', { name, email, password })
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!name.trim()) {
      newErrors.name = "ユーザー名を入力してください"
    } else if (name.length < 2) {
      newErrors.name = "ユーザー名は2文字以上で入力してください"
    }

    if (!email.trim()) {
      newErrors.email = "メールアドレスを入力してください"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "有効なメールアドレスを入力してください"
    }

    if (!password) {
      newErrors.password = "パスワードを入力してください"
    } else if (password.length < 8) {
      newErrors.password = "パスワードは8文字以上で入力してください"
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "パスワード（確認）を入力してください"
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "パスワードが一致しません"
    }

    if (!agreedToTerms) {
      newErrors.terms = "利用規約とプライバシーポリシーに同意してください"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-3 sm:p-4">
      <div className="w-full max-w-md">
        {/* Hero Section */}
        <div className="text-center mb-6 sm:mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-amber-500 rounded-2xl mb-4 sm:mb-6 shadow-medium">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-2">ポートフォリオのたまご</h1>
          <p className="text-stone-600 text-base sm:text-lg px-4 sm:px-0">アカウントを作成して始めましょう</p>
        </div>

        <Card className="border-0 shadow-strong bg-white/80 backdrop-blur-sm animate-slide-in">
          <CardHeader className="text-center pb-4">
            <div className="flex items-center justify-between mb-2">
              <Button
                variant="ghost"
                onClick={() => navigate('/login')}
                className="text-stone-600 hover:text-stone-900 hover:bg-stone-100 h-9 w-9 p-0"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <CardTitle className="text-xl font-semibold text-stone-800 flex-1">新規登録</CardTitle>
              <div className="w-9" /> {/* スペーサー */}
            </div>
            <CardDescription className="text-stone-600">必要な情報を入力してください</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
            <div className="space-y-3 sm:space-y-4">
              {/* ユーザー名 */}
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="ユーザー名"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`h-11 sm:h-12 border-stone-200 focus:border-amber-500 focus:ring-amber-500/20 bg-white/50 text-base ${
                    errors.name ? "border-red-300 focus:border-red-500" : ""
                  }`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* メールアドレス */}
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="メールアドレス"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`h-11 sm:h-12 border-stone-200 focus:border-amber-500 focus:ring-amber-500/20 bg-white/50 text-base ${
                    errors.email ? "border-red-300 focus:border-red-500" : ""
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* パスワード */}
              <div className="space-y-2">
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="パスワード（8文字以上）"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`h-11 sm:h-12 border-stone-200 focus:border-amber-500 focus:ring-amber-500/20 bg-white/50 text-base pr-10 ${
                      errors.password ? "border-red-300 focus:border-red-500" : ""
                    }`}
                  />
                </div>
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              {/* パスワード確認 */}
              <div className="space-y-2">
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="パスワード（確認）"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`h-11 sm:h-12 border-stone-200 focus:border-amber-500 focus:ring-amber-500/20 bg-white/50 text-base pr-10 ${
                      errors.confirmPassword ? "border-red-300 focus:border-red-500" : ""
                    }`}
                  />
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
              </div>
            </div>

            {/* 利用規約同意 */}
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => {
                    setAgreedToTerms(checked as boolean)
                    if (errors.terms) {
                      setErrors((prev) => ({ ...prev, terms: "" }))
                    }
                  }}
                  className="mt-1"
                />
                <label htmlFor="terms" className="text-sm text-stone-600 leading-relaxed cursor-pointer">
                  <a href="#" className="text-amber-600 hover:text-amber-700 font-medium transition-colors">
                    利用規約
                  </a>
                  と
                  <a href="#" className="text-amber-600 hover:text-amber-700 font-medium transition-colors">
                    プライバシーポリシー
                  </a>
                  に同意します
                </label>
              </div>
              {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms}</p>}
            </div>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              登録
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-stone-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-3 text-stone-500 font-medium">または</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <Button
                variant="outline"
                onClick={() => console.log('GitHub Signup')}
                className="h-11 sm:h-12 border-stone-200 text-stone-700 hover:bg-stone-50 hover:border-stone-300 transition-all duration-200 text-sm sm:text-base"
              >
                <Github className="mr-1 sm:mr-2 h-4 w-4" />
                <span className="hidden xs:inline">GitHub</span>
                <span className="xs:hidden">Git</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => console.log('Google Signup')}
                className="h-11 sm:h-12 border-stone-200 text-stone-700 hover:bg-stone-50 hover:border-stone-300 transition-all duration-200 text-sm sm:text-base"
              >
                <Mail className="mr-1 sm:mr-2 h-4 w-4" />
                <span className="hidden xs:inline">Google</span>
                <span className="xs:hidden">Go</span>
              </Button>
            </div>

            <div className="text-center">
              <div className="text-sm">
                <span className="text-stone-600">すでにアカウントをお持ちの方は </span>
                <button
                  onClick={() => navigate('/login')}
                  className="text-amber-600 hover:text-amber-700 font-medium transition-colors"
                >
                  ログイン
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
