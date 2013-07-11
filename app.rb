require 'sinatra/base'
require 'sinatra/reloader'

module Xover
  class DemoApp < Sinatra::Base
    register Sinatra::Reloader

    get '/' do
      erb :index
    end

    post '/' do
      "You said '#{params[:message]}'."
    end
  end
end

if __FILE__ == $0
  Project::TestApp.run! port: 9292
end
