class CanvasPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      user.where(user: user)
    end
  end

  def new?
    true
  end

  def show?
    true
  end

  def create?
    true
  end

  def edit?
    project = Project.find(record.project_id)
    project.user == user
  end

  def update?
    project = Project.find(record.project_id)
    project.user == user
  end

  def update_notes?
    project = Project.find(record.project_id)
    project.user == user
  end

  def update_name?
    project = Project.find(record.project_id)
    project.user == user
  end

  def update_photo?
    project = Project.find(record.project_id)
    project.user == user
  end

  def destroy?
    project = Project.find(record.project_id)
    project.user == user
  end

  def add_notes?
    project = Project.find(record.project_id)
    project.user == user
  end
end
