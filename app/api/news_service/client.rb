require_relative 'request'

module NewsService
  class Client
    BASE_URL = 'https://newsapi.org/v2'

    def initialize(api_key)
      @api_key = api_key
    end

    def fetch_pogo_news
      query = { q: 'Philippine Offshore Gaming Operators' }
      response = Request.call(http_method: 'get', query: query, api_key: @api_key)
      response
    end
  end
end
