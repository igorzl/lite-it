class CanvasesController < ApplicationController

  before_action :find_canvas, only: [:show, :edit, :update, :destroy]

  def new
    @canvas = Canvas.new
    authorize @canvas
  end
  
  def create
    @canvas = Canvas.new(canvas_params)
    authorize @canvas
    @canvas.project = Project.find(params[:project_id])
    @canvas.save
    # REDIRECT TO EDIT PAGE FOR CANVAS
  end
  
  def edit
    authorize @canvas
    #raise
  end

  def update
    authorize @canvas
    @canvas.description = params[:canvas][:description]
    @canvas.photo = params[:canvas][:photo]
    @canvas.save
  end

  def show
    authorize @canvas
  end
  
  def destroy
    Canvas.destroy(params[:id])
  end

  private

  def find_canvas
    @canvas = Canvas.find(params[:id])
  end

  def canvas_params
    params.require(:canvas).permit(:description, :photo, :project)
  end

end
