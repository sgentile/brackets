to deploy :

grunt build
cd dist
git commit -a -m "update"
git push heroku master

heroku login
heroku create  OR  heroku git:remote -a morning-everglades-5893
Git remote heroku added


git remote -v

deploy:
git push heroku master

You have to upload your public key to Heroku:

heroku keys:add ~/.ssh/id_rsa.pub
If you don't have a public key, Heroku will prompt you to add one automatically which works seamlessly. Just use:

heroku keys:add

//heroku will allocate resources to the application:
heroku ps:scale web=1

heroku config:set NODE_ENV=production

heroku config

see Evernote for heroku mongolab settings... set this so it's not stored in your app!
heroku config:add MONGOLAB_URI=mongodb://<user>:<password>@ds033639.mongolab.com:33639/brackets
heroku config:add MONGOHQ_URL=mongodb://<user>:<password>@troup.mongohq.com:10067/Brackets

heroku open



//troubleshooting:
heroku logs
heroku restart