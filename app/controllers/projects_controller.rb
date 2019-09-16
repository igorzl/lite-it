class ProjectsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show]
  before_action :find_project, only: [:show, :edit, :update, :destroy]

  def show
      authorize @project
  end

private

  def find_project
    @project = Project.find(params[:id])
  end

end
