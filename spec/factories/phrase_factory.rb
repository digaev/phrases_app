FactoryGirl.define do
  factory :phrase do
    body { Faker::Lorem.sentence }
  end
end
