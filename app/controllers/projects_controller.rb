class ProjectsController < ApplicationController
  before_action :find_project, only: [:show, :edit, :update, :destroy]
  # skip_before_action :verify_authenticity_token, only: [:sort]

  def index
    @projects = policy_scope(Project.order(:position))
  end

  def sort
    params[:order].each do |index, id|
      @project = Project.find(id)
      authorize @project
      @project.position = index
      @project.save
    end
    @projects = Project.order(:position)
    respond_to do |format|
      format.js {render json: @projects}
      # format.html {redirect_to projects_path}
    end
    # render formats: :js, handlers: :erb
  end

  def show
    authorize @project
  end

  def new
    @project = Project.new
    authorize @project
  end

  def create
    @project = Project.new(project_params)
    @project.user = current_user
    authorize @project
    if @project.save
      redirect_to projects_path
    else
      render :new
    end
  end

  def edit
    authorize @project
  end

  def update
    authorize @project
    @project.update(project_params)
    redirect_to project_path(@project)
  end

  def destroy
    authorize @project
    redirect_to projects_path if @project.destroy!
  end

  private

  def find_project
    @project = Project.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:name, :description, :image)
  end
end
