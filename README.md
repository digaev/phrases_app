```
$ git clone https://github.com/digaev/phrases_app
$ cd phrases_app
$ bundle install

# create database
$ rake ar:migrate

# generate three phrases
$ rake ar:seed

# start server
$ padrino s
```
