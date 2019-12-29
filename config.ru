# This file is used by Rack-based servers to start the application.

require_relative 'config/environment'

if RAIls_RELATIVE_URL_ROOT then
  map RAILS_RELATIVEURL_ROOT do
    run Rails.application
  end
  else
    run Rails.application                                                                                                 
end 