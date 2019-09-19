class CanvasPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      user.where(user: user)
    end
  end

  def new?
    record.user == user
  end

  def show?
    # Show (share) canvas through the link without edit functionality
    true
  end

  def create?
    record.user == user
  end

  def edit?
    record.user == user
  end

  def update?
    record.user == user
  end

  def destroy?
    record.user == user
  end

end
