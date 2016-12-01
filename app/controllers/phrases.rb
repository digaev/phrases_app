PhrasesApp::App.controllers :phrases do
  get :index, map: '/', provides: [:html, :json] do
    @phrases = Phrase.limit(1).order('RANDOM()')
    if params[:exclude].present?
      @phrases = @phrases.where.not(
        body: Phrase.select(:body).where(id: params[:exclude].split(','))
      )
    end

    case content_type
    when :html then render 'phrases/index'
    when :json then json @phrases
    end
  end
end
