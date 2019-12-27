FROM mysql:5.7

MAINTAINER Bayon Forte <bayon@forteworks.com> 

ENV MYSQL_DATABASE=test \
    MYSQL_ROOT_PASSWORD=password 

COPY ./test-dump.sql /docker-entrypoint-init.d/

# (3) Crucial Steps:
# 1 pull the mysql image 
# 2 declare mysql database and password.
# 3 map sql file to /docker-entrypoint-init.d/