json.example do
  json.counter counter
end
json.csrfToken form_authenticity_token
if user
  json.user do
    json.email user.email
    json.roles user.roles
  end
end
