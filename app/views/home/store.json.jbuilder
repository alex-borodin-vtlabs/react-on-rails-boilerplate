json.example do
  json.counter counter
end
if user
  json.user do
    json.email user.email
    json.roles user.roles
  end
end
