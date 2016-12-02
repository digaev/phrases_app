PhrasesApp::App.controllers :phrases do
  get :index, map: '/', provides: [:html, :json] do
    @phrases = Phrase.limit(1).order('RANDOM()')

    case content_type
    when :html then render 'phrases/index'
    when :json then json @phrases
    end
  end
end
