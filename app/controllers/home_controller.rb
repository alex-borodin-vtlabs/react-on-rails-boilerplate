class HomeController < ApplicationController
  include ReactOnRails::Controller
  def index
    @hello_world_props = { counter: 1 }
    redux_store("mainAppStore", props: { counter: 1 })
    respond_to do |format|
      format.html
    end
  end
end
