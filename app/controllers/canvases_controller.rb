class CanvasesController < ApplicationController
  include Pundit
  after_action :verify_authorized, except: [:new, :show, :edit, :create, :update]
  before_action :find_canvas, only: [:show, :edit, :update, :destroy]

  def new
    @canvas = Canvas.new
  end
  
  def create
    @canvas = Canvas.new(canvas_params)
    @canvas.project = Project.find(params[:project_id])
    @canvas.save
    # REDIRECT TO EDIT PAGE FOR CANVAS
  end
  
  def edit
    #raise
  end

  def update
    @canvas.description = params[:canvas][:description]
    @canvas.photo = params[:canvas][:photo]
    @canvas.save
  end

  def show
  end
  
  def destroy
  end

  private

  def find_canvas
    @canvas = Canvas.find(params[:id])
  end

  def canvas_params
    params.require(:canvas).permit(:description, :photo, :project)
  end

end
