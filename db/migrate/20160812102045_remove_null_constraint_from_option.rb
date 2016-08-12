class RemoveNullConstraintFromOption < ActiveRecord::Migration
  def change
    change_column_null :options, :option, true
  end
end
