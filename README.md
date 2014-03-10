to deploy :

grunt build
cd dist
git commit -a -m "update"
git push heroku master


deploy:
git push heroku master

You have to upload your public key to Heroku:

heroku keys:add ~/.ssh/id_rsa.pub
If you don't have a public key, Heroku will prompt you to add one automatically which works seamlessly. Just use:

heroku keys:add

//heroku will allocate resources to the application:
heroku ps:scale web=1

heroku open

//troubleshooting:
heroku logs
heroku restart