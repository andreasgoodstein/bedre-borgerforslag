# heroku container:login
docker tag bedreforslag registry.heroku.com/bedreforslag/web
docker push registry.heroku.com/bedreforslag/web
heroku container:release web -a bedreforslag