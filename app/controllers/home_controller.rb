class HomeController < ApplicationController

	def index
		@commonInfo = Rails.application.config.x.release_common
		@gwangjuData = Rails.application.config.x.data_gwangju
		@mohwData = Rails.application.config.x.data_mohw
		puts "출력됨?"
		puts @commonInfo
		puts @gwangjuData
		puts @mohwData
  end

  def pageTitle
    @title = "코로나, 함께해요!"
  end
end
