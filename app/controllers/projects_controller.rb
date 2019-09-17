class ProjectsController < ApplicationController
  before_action :find_project, only: [:show]

  def index
    @projects = policy_scope(Project)
  end

  def show
    authorize @project
  end

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      redirect_to projects_path
    else
      render :new
    end
  end

  def update
  end

  def edit
  end

  def destroy
  end

  private

  def find_project
    @project = Project.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:name, :description, :photo)
  end
end
