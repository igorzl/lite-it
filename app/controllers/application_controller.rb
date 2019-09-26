class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?

  def after_sign_in_path_for(resource)
    projects_path
  end

  def after_sign_up_path_for(resource)
    projects_path
  end

  def configure_permitted_parameters
    # For additional fields in app/views/devise/registrations/new.html.erb
    devise_parameter_sanitizer.permit(:account_update, keys: [:fname, :lname])
    devise_parameter_sanitizer.permit(:sign_up, keys: [:fname, :lname])
  end

  # Pundit staff

  before_action :authenticate_user!
  include Pundit

  # Pundit: white-list approach.
  after_action :verify_authorized, except: :index, unless: :skip_pundit?
  after_action :verify_policy_scoped, only: :index, unless: :skip_pundit?

private

  def skip_pundit?
    devise_controller? || params[:controller] =~ /(^(rails_)?admin)|(^pages$)/
  end

  # end of Pundit staff

  def default_url_options
    { host: ENV["DOMAIN"] || "localhost:3000" }
  end
end
