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
    redirect_to(edit_project_canvas_path(@canvas.project, @canvas) ,:notice => 'Canvas saved.')
  end
  
  def edit
    authorize @canvas
  end

  def update
    authorize @canvas
    @canvas.state_json = params[:canvas][:state_json]
    @canvas.canvas_svg = params[:canvas][:canvas_svg]
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
    params.require(:canvas).permit(:state_json, :canvas_svg, :project)
  end

end
