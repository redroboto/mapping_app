module NewsService
  class Errors
    def self.map(code)
      case code
      when 401
        'Unauthorized request. Please check your API key.'
      when 403
        'Forbidden request. You do not have permission.'
      when 404
        'Resource not found. Please check your query.'
      when 500
        'Internal server error. Please try again later.'
      else
        'An unexpected error occurred. Please try again.'
      end
    end
  end
end
