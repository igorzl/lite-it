class CanvasesController < ApplicationController

  before_action :find_canvas, only: [:show, :edit, :update, :update_notes, :update_name, :update_photo, :destroy]

  def new
    @canvas = Canvas.new
    authorize @canvas
    @project = Project.find(params[:project_id])
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
    @project = Project.find(@canvas.project_id)
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

  def update_name
    authorize @canvas
    @canvas.name = params[:canvas][:name]
    if @canvas.save
      redirect_to canvas_path(@canvas)
    else
      @canvas.name = ""
      render :show
    end
  end

  def update_photo
    authorize @canvas
    @canvas.photo = params[:canvas][:photo]
    @canvas.save
    redirect_to canvas_path(@canvas)
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
    params.require(:canvas).permit(:state_json, :canvas_svg, :project, :notes, :photo)
  end

end
