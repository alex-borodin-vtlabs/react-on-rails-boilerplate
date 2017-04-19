class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  attr_accessor :roles
  before_validation :check_validation

  ROLES = %i[admin superadmin]


  def check_validation
    puts 111111111111
    puts roles
    puts self.roles
  end

  def roles=(roles)
    puts 222222222222
    roles = [*roles].map { |r| r.to_sym }
    self.roles_mask = (roles & ROLES).map { |r| 2**ROLES.index(r) }.inject(0, :+)
  end

  def roles
    ROLES.reject do |r|
      ((roles_mask.to_i || 0) & 2**ROLES.index(r)).zero?
    end
  end

  def role?(role)
    roles.include?(role)
  end

  def admin?
    self.roles.include?(:admin)
  end
end
