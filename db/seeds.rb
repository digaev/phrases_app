
ActiveRecord::Base.transaction do
  3.times do
    FactoryGirl.create :phrase
  end
end
