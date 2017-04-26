# React on Rails boilerplate

Just clone and use server-side rendering, routing, user auth and roles, admin interface, API requests and others.

* Technologies

See package.json and Gemfile for versions

1. [Ruby on Rails 5](http://rubyonrails.org/)
1. [react_on_rails gem](https://github.com/shakacode/react_on_rails/)
1. [Devise](https://github.com/plataformatec/devise/)
1. [RailsAdmin](https://github.com/sferik/rails_admin)
1. [React](http://facebook.github.io/react/)
1. [Webpack](https://github.com/webpack/) 
1. [Babel transpiler](https://github.com/babel/babel)
1. [bootstrap-loader with Bootstrap 4](https://www.npmjs.com/package/bootstrap-loader/)
1. [Reactstrap](https://reactstrap.github.io/)
1. [Redux](https://github.com/reactjs/redux)
1. [react-router](https://github.com/reactjs/react-router)
1. [react-router-redux](https://github.com/reactjs/react-router-redux)
1. [CanCanCan](https://github.com/CanCanCommunity/cancancan/)
1. Scss
1. esLint

* Installation 

1. Be sure that you have Node installed! We suggest [nvm](https://github.com/creationix/nvm), with node version `v6.0` or above. See this article [Updating and using nvm](http://forum.shakacode.com/t/updating-and-using-nvm/293).
1. `git clone https://github.com/vacuumtubedriver/react-on-rails-boilerplate.git`
1. `cd react-on-rails-boilerplate`
1. Check that you have Ruby 2.3.0 or greater
1. Check that you're using the right version of node. Run `nvm list` to check. Use 5.5 or greater.
1. Check that you have Postgres installed. Run `which postgres` to check. Use 9.4 or greater.
1. `gem install foreman`
1. `bundle install`
1. `brew install yarn`
1. `yarn`
1. `rake db:setup`
1. `foreman start -f Procfile.dev`

* How To

+ **Users**: use standatd Devise registration and login and manage roles in RailsAdmin. Get current user with roles from Redux store:
  ```
    store.$mainAppStore.get('user')
  ```
  
+ **Router**: just add new route in `client/app/bundles/MainApp/routes/routes.jsx`  


+ **API** 
  + in component: 
  ```
    this.props.actions.callApi(url, method, storeKey);
  ```
  + access response:
  ```
   store.$mainAppStore.get(storeKey) 
  ```
  + urls `/api/v1/`
  
 + **Linting**: 
    ```
      cd client
      yarn lint
    ```
  
 * Contributors
  [VT Labs](https://vtlabs.org)
