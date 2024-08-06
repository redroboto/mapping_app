class LocationsController < ApplicationController
  def index
    year = params[:year]
    if year.nil?
      @locations = Location.all
    else
      @locations = Location.where("is_#{year} = ?", true)
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

  def timeline

  end
end
