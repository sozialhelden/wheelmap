class WidgetsController < ApplicationController

  before_filter :authenticate_user!, :only => [:update]
  before_filter :authenticate_with_api_key, :only => [:update, :embed]

  def embed
    if @widget
        render layout: 'embed'
    else
      head 404
    end
  end

  def update
    @widget = Widget.find(params[:id])
    if @widget.update_attributes(widget_params)
      render :json => @widget.to_json, :status => 200
    else
      flash.now[:alert] = @user.errors.full_messages.to_sentence
      head 400
    end
  end

  protected

  def widget_params
    params.require(:widget).permit(:lat, :lon, :height, :width, :categories)
  end

  def authenticate_with_api_key
    api_key = params[:key] || request.headers["X-API-KEY"]
    user    = api_key && User.find_by_api_key(api_key)
    @widget = user ? user.widget : nil
  end
end
