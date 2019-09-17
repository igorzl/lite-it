class ProjectsController < ApplicationController
  before_action :find_project, only: [:show]

  def index
    @projects = policy_scope(Project)
  end

  def show
    authorize @project
  end

private

  def find_project
    @project = Project.find(params[:id])
  end

end
