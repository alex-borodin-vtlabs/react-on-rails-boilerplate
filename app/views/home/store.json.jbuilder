json.counter counter
if user
  json.user do
    json.email user.email
    json.roles user.roles
  end
end
