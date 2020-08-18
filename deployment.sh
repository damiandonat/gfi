# remove
rm -rf package-lock.json
echo '--------> removed package-lock.json'
rm -rf node_modules
echo '--------> removed node_modules'

# intall
echo '--------> start install modules'                                                                                                                                                          
npm i                                                                                                                                                                                           
echo '--------> installed modules'

# start
echo '--------> running app'
ng serve