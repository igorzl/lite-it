class ProjectsController < ApplicationController
  before_action :find_project, only: [:show, :edit, :update, :destroy]

  def index
    @projects = policy_scope(Project)
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
    params.require(:project).permit(:name, :date, :location, :image)
  end
end
