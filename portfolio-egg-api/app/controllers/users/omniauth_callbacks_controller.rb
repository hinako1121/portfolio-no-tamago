class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def github
    handle_auth "GitHub"
  end

  def google_oauth2
    handle_auth "Google"
  end

  def handle_auth(kind)
    @user = User.from_omniauth(request.env['omniauth.auth'])

    if @user.persisted?
      sign_in_and_redirect @user
    else
      redirect_to new_user_registration_url, alert: "#{kind}ログインに失敗しました"
    end
  end
end