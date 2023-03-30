rm -R -f ./migrations &&
 &&
psql -U gitpod -c 'DROP DATABASE example;' || true &&
psql -U gitpod -c 'CREATE DATABASE example;' &&
psql -U gitpod -c 'CREATE pipenv run initEXTENSION unaccent;' -d example &&
pipenv run migrate &&
pipenv run upgrade