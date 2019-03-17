# chmod +x whatever you're executing ./
# bash resetdb.sh

dropdb users
dropdb students
dropdb items
dropdb studentitems
dropdb studenttestresults

createdb users
createdb items
createdb students
createdb studenttestresults
createdb studentitems

# start-server.sh