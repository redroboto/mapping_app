require 'httparty'
require_relative 'errors'

module NewsService
  class Request
    BASE_URL = 'https://newsapi.org/v2'

    def self.call(http_method:, query:, api_key:)
      url = "#{BASE_URL}/everything"

      response = HTTParty.send(
        http_method,
        url,
        query: query.merge(apiKey: api_key, pageSize: 10),
        headers: { 'Content-Type' => 'application/json' }
      )

      handle_response(response)
    end

    private

    def self.handle_response(response)
      case response.code
      when 200
        { code: response.code, status: 'Success', data: response.parsed_response }
      else
        { code: response.code, status: 'Error', data: NewsService::Errors.map(response.code) }
      end
    end
  end
end
