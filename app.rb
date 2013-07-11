require 'sinatra/base'
require 'sinatra/reloader'
require 'slim'

module Xover

  class DemoApp < Sinatra::Base

    register Sinatra::Reloader
    register Sinatra::Twitter::Bootstrap::Assets

    configure do
      set :slim, pretty: true
    end

    get '/partials/*.html' do
      path = 'partials/' + params[:splat][0]
      slim path.to_sym
    end

    get '*' do
      slim :index
    end

  end #class

end #module

if __FILE__ == $0
  Project::TestApp.run! port: 9292
end
