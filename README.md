workflow:
make fixes locally
commit

run grunt build
cd dist
(git add -A)
commit local
push to heroku
run heroku open to view

to deploy :

grunt build
cd dist
git commit -a -m "update"
git push heroku master

heroku login
heroku create  OR  heroku git:remote -a herokuappnamegoeshere
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

heroku config:add MONGOLAB_URI=mongodb://.../brackets
heroku config:add MONGOHQ_URL=mongodb://.../Brackets

heroku open



//troubleshooting:
heroku logs
heroku restart