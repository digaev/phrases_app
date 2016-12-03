require 'spec_helper'

RSpec.describe 'PhrasesApp::App.controllers :phrases' do
  describe 'get :index' do
    it 'should be ok' do
      get '/'
      expect(last_response).to be_ok
    end
  end
end
