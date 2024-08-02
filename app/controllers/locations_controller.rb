class LocationsController < ApplicationController
  def index
    
    year = params[:year]
    if year.nil?
      @locations = Location.all
    else
      case year
      when "2017"
        @locations = Location.where(is_2017:true)
      when "2018"
        @locations = Location.where(is_2018:true)
      when "2019"
        @locations = Location.where(is_2019:true)
      when "2020"
        @locations = Location.where(is_2020:true)
      when "2021"
        @locations = Location.where(is_2021:true)
      when "2022"
        @locations = Location.where(is_2022:true)
      when "2023"
        @locations = Location.where(is_2023:true)  
      when "2024"
        @locations = Location.where(is_2024:true)
      end
    end

  end

  def home
    api_key = 'cc38c00429dc4dee93ba2451d77f9ae5'
    client = NewsService::Client.new(api_key)
    result = client.fetch_pogo_news
    @news = result[:data]['articles'] if result[:status] == 'Success'
    @error_message = result[:data] unless result[:status] == 'Success'
  end

  def report

  end
end
