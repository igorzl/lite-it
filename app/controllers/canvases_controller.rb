class CanvasesController < ApplicationController

  before_action :find_canvas, only: [:show, :edit, :update, :update_notes, :destroy]

  def new
    @canvas = Canvas.new
    authorize @canvas
  end

  def create
    @canvas = Canvas.new(canvas_params)
    authorize @canvas
    @canvas.project = Project.find(params[:project_id])
    @canvas.save
    redirect_to(edit_canvas_path(@canvas) ,:notice => 'Canvas saved.')
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

  def update_notes
    authorize @canvas
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
