class HomeController < ApplicationController
  include ReactOnRails::Controller
  def index
    redux_store("mainAppStore", props: home_json_string)
    respond_to do |format|
      format.html
    end
  end

  private

  def home_json_string
    render_to_string(template: "/home/store.json.jbuilder",
                     locals: { counter: 1, user: current_user }, format: :json)
  end

end
