"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Mail, Sparkles } from "lucide-react"
import { Box, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface LoginScreenProps {
  onLogin: () => void
  onNavigateToSignup: () => void
}

export function LoginScreen({ onLogin, onNavigateToSignup }: LoginScreenProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: ログイン処理を実装
    console.log('Login:', { email, password })
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
          <p className="text-stone-600 text-base sm:text-lg px-4 sm:px-0">
            あなたのアプリを投稿して、フィードバックを受け取ろう
          </p>
        </div>

        <Card className="border-0 shadow-strong bg-white/80 backdrop-blur-sm animate-slide-in">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl font-semibold text-stone-800">ログイン</CardTitle>
            <CardDescription className="text-stone-600">アカウントにサインインしてください</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
            <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
              <div className="space-y-2">
                <TextField
                  fullWidth
                  label="メールアドレス"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  margin="normal"
                  required
                />
              </div>
              <div className="space-y-2">
                <TextField
                  fullWidth
                  label="パスワード"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  margin="normal"
                  required
                />
              </div>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                ログイン
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
                  onClick={onLogin}
                  className="h-11 sm:h-12 border-stone-200 text-stone-700 hover:bg-stone-50 hover:border-stone-300 transition-all duration-200 text-sm sm:text-base"
                >
                  <Github className="mr-1 sm:mr-2 h-4 w-4" />
                  <span className="hidden xs:inline">GitHub</span>
                  <span className="xs:hidden">Git</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={onLogin}
                  className="h-11 sm:h-12 border-stone-200 text-stone-700 hover:bg-stone-50 hover:border-stone-300 transition-all duration-200 text-sm sm:text-base"
                >
                  <Mail className="mr-1 sm:mr-2 h-4 w-4" />
                  <span className="hidden xs:inline">Google</span>
                  <span className="xs:hidden">Go</span>
                </Button>
              </div>

              <div className="text-center space-y-3">
                <div>
                  <a href="#" className="text-amber-600 hover:text-amber-700 text-sm font-medium transition-colors">
                    パスワードを忘れた方
                  </a>
                </div>
                <div className="text-sm">
                  <span className="text-stone-600">アカウントをお持ちでない方は </span>
                  <button
                    onClick={onNavigateToSignup}
                    className="text-amber-600 hover:text-amber-700 font-medium transition-colors"
                  >
                    新規登録
                  </button>
                </div>
              </div>
            </Box>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
