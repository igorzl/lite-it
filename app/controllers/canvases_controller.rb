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
    if params[:canvas][:notes].nil?
      @canvas.state_json = params[:canvas][:state_json]
      @canvas.photo = params[:canvas][:canvas_svg]
      @canvas.save
    else
      @canvas.notes = params[:canvas][:notes]
      if @canvas.save
        respond_to do |format|
          format.html { redirect_to edit_canvas_path(@canvas) }
          format.js
        end
      else
        respond_to do |format|
          format.html { render 'canvases/show' }
          format.js
        end
      end
    end
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
    params.require(:canvas).permit(:state_json, :canvas_svg, :project, :notes)
  end

end
