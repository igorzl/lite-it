class CanvasesController < ApplicationController
  include Pundit
  after_action :verify_authorized, except: [:new, :show, :edit]
  before_action :find_canvas, only: [:show, :edit, :update, :destroy]

  def new
    @canvas = Canvas.new
  end

  def show
  end

  def create
  end

  def edit
  end

  def update
  end
  
  def destroy
  end

  private

  def find_canvas
    @geek = Canvas.find(params[:id])
  end

end
