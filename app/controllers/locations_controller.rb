class LocationsController < ApplicationController
  def index
    year = params[:year]
    @locations = if year.nil?
                  Location.where("is_2017", true)
                 else
                   Location.where("is_#{year} = ?", true)
                 end
  end

  def show
    @location = Location.find(params[:id])
    @locations = Location.where(latitude: @location.latitude, longitude: @location.longitude, name: @location.name)

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

  def timeline
  end
end
