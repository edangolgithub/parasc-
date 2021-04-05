```
npm install -g serverless
Pro tip: You can install the NPM module local to your project, instead of globally.

npm update -g serverless

$ npm install serverless --save-dev
The Serverless team likes to move fast and break things, so it might be a good idea to set your Serverless version in your package.json. This way, you can use the latest version of Serverless on new projects without impacting older ones.

The tradeoff is that you’ll have to drill down to a subfolder in order to reach the serverless executable:

 ./node_modules/serverless/bin/serverless

serverless create --template aws-nodejs
sls create -n ngopython -t aws-python3

sls invoke local -f hello

sls invoke local -f hello --path data.json

sls: This is just a shortcut for serverless.
local: Your function runs on your local machine. Don’t worry, it’s not touching AWS at this point.
-f hello: You use the function flag and specify hello as an argument.


sls deploy

sls invoke -f hello
sls offline start
sls package
npm prune
npm i -D serverless-webpack webpack

const slsw = require('serverless-webpack');
module.exports = {
  target: 'node',
  entry: slsw.lib.entries,
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  node: false,
  optimization: {
    minimize: false,
  },
  devtool: 'inline-cheap-module-source-map',
};

String Data Example:

serverless invoke --function functionName --stage dev --region us-east-1 --data "hello world"

JSON Data Example:

serverless invoke --function functionName --stage dev --region us-east-1 --data '{ "property1": "value"}'

JSON Data from file:

serverless invoke --function functionName --stage dev --region us-east-1 --path lib/data.json

```

```
npm install --save-dev serverless-wsgi serverless-python-requirements

```
```
npm install serverless-dotenv-plugin --save-dev

#### .env file
STAGE=dev
SECRET=**********


#### yml
provider: 
  name: aws 
  runtime: nodejs10.x
  stage: ${env:STAGE}
  region: eu-central-1 
  environment:
   SECRET: ${env:SECRET}
```















```

bash history
sudo yum update
sudo yum install git
git config --global user.email "dangolevn@gmail.com"
git config --global user.name "edangolgithub"
git clone https://www.github.com/edangolgithub/eco
cd eco/api
aws config
aws configure
aws
python -V
cd eco/api
cd cognito
free -m
./discourse-setup
install -o root -g root -m 0600 /dev/null /swapfile
dd if=/dev/zero of=/swapfile bs=1k count=2048k
mkswap /swapfile
swapon /swapfile
echo "/swapfile       swap    swap    auto      0       0" | tee -a /etc/fstab
sysctl -w vm.swappiness=10
echo vm.swappiness = 10 | tee -a /etc/sysctl.conf
free -m
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo "/swapfile none swap sw 0 0" | sudo tee -a /etc/fstab
free -m
serverless invoke local -f hello --path param.json
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node
node -e "console.log('Running Node.js ' + process.version)"
npm install -g serverless
free -m
sls
serverless
sls dashboard
serverless invoke local -f hello --path param.json
npm install
serverless invoke local -f hello --path param.json
export SLS_DEBUG=true
serverless invoke local -f hello --path param.json
npm i aws-amplify
free -m
amplify pull --appId d38smi929xqbqj --envName dev
npm install -g @aws-amplify/cli
amplify configure
amplify pull --appId d38smi929xqbqj --envName dev
npm install
npm start
sudo sysctl -w fs.inotify.max_user_watches=12288
npm start
npm install aws-amplify @aws-amplify/ui-react
free -m
npm start
sudo sysctl -w fs.inotify.max_user_watches=20000
npm start
free -m
export NODE_OPTIONS=--max_old_space_size=4096
npm start
free -m
npm start
echo fs.inotify.max_user_watches = 84288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
echo fs.inotify.max_user_watches = 84288 | sudo tee -a /etc/sysctl.conf
npm start
free -m
npm start
free -m
npm start
npm run build
npm install -g serve
serve -s build
free -m
npm star
npm start
free -m
npm start
sudo shutdown
npm instll
npm install
npm prune
cd cognito
npm prune
serverless invoke local -f hello --path param.json
cat ../eco/cognito/config.json
cat ../api/cognito/config.json
cd ..
cd api
cd cognito
cat cog.json
cat config.json
ls
ls -a
cat user-management.js
cat user-management copy.js
ls
cat user-management copy.js
cat 'user-management copy'.js
free -m
npm i amazon-cognito-identity-js
npm start
free -m
npm start
npm prune
npm start
free -m
git fetch -p
git branch --v | grep "[gone]" | awk '{print $1}' | xargs git branch -D
npm i aws-sdk
free -m
sudo reboot
aws configure
aws configure --profile amplifyuser
sudo nano ~/.aws/.bashrc
sudo nano ~/.bashrc
free -m
npm start
export AWS_PROFILE=amplifyuser
npm start
free -m
npm start
free -m
npm install
npm start
free -m
cat ../ecoweb/src/components/auth/config.json
npm prune
npm dedupe
npm ddp
npm install -g depcheck 
cd cognito
npm prune
 npm audit fix --force
npm ls
serverless invoke local -f hello --path param.json
npminstall
npm install
serverless invoke local -f hello --path param.json
TypeError: Cannot set property 'hello' of undefined
serverless invoke local -f hello --path param.json
npm i cross-fetch
serverless invoke local -f hello --path param.json
free -m
serverless invoke local -f hello --path param.json
aws cognito-idp admin-set-user-password
  --user-pool-id us-east-1_bFZyY3rig   --username edangol2   --password 97ni@123Ui   --permanent
aws cognito-idp admin-set-user-password
  --user-pool-id us-east-1_bFZyY3rig   --username edangol2   --password 97ni@123Ui   --permanent
aws cognito-idp admin-set-user-password  --user-pool-id us-east-1_bFZyY3rig --username edangol2  --password 97ni@123Ui  --permanent
serverless invoke local -f hello --path param.json
free -m
amazon-linux-extras
amazon-linux-extras | grep "python
"
python3 --version
sudo yum install python3
yum list installed | grep -i python3
cd /opt
sudo wget https://www.python.org/ftp/python/3.9.0/Python-3.9.0.tgz
sudo tar xzf Python-3.9.0.tgz
ls
rm -rf p*
ls
rm -r python*
rm -r python-3.9.0
ls
rm -r P*
sudo rm -r P*
ls
ls -a
 sudo wget https://www.python.org/ftp/python/3.9.2/Python-3.9.2.tgz
 sudo tar xzf Python-3.9.2.tgz 
cd Python-3.9.2 
sudo ./configure --enable-optimizations 
sudo yum groupinstall "Development Tools"
sudo ./configure --enable-optimizations 
sudo make altinstall 
which python3
which python3.9
sudo nano etc/path
sudo nano /etc/path
sudo nano /etc/paths
echo $path
python 3.9
python 3.9.2
which python3.9
echo $PATH
sudo nano ~/.bashrc
echo $PATH
python3
python3.9
cat /etc/profile
sudo nano ~/.bashrc
python3
cd ~
python3 -m venv env
sudo nano ~/.bashrc
venv
pip -V
pip upgrade
python -v
clear
free -m
pwd
path
user
$user
$USER
echo $USER
clear
deactivate
node test.js
cd cognito
node test.js
free -m
sudo shutdown
git clone https://github.com/edangolgithub/evan/tree/dev_features
git clone https://github.com/edangolgithub/evan.git
cd evan
free -m
sudo yum update
sudo yum install dotnet-sdk-3.1
sudo rpm -Uvh https://packages.microsoft.com/config/centos/7/packages-microsoft-prod.rpm
sudo yum install dotnet-sdk-3.1
sudo yum update
dotnet run
sudo yum install dotnet-sdk-5.0
dotnet run
dotnet tool install -g Amazon.Lambda.Tools
dotnet tool install --global Amazon.Lambda.TestTool-5.0
dotnet new -i "Amazon.Lambda.Templates::*"
dotnet new lamda.s3
dotnet new lamda.S3
dotnet new lambda.S3
dotnet new ls
dotnet new
free -m
cat ~/bashrc
cat ~/.bashrc
cd django
ls
cd mysite
venv
python -m pip install Django
sudo yum install openssl-devel
python -m pip install Django
cd /opt
ls
cd Python3.9.2
cd Python-3.9.2
make
sudo make
deactivate
sudo altinstall
sudo make altinstall
venv
cd /home/ec2-user/evan/python/django/mysite
python -m pip install Django
python -m pip install --upgrade pip3
cd /opt/Python-3.9.2
sudo ./configure --enable-optimizations
sudo make altinstall
deactivate
python3 -m venv ~/env
VENV
venv
python -m pip install Django
python -m pip install --upgrade pip
cd /home/ec2-user/evan/python/django/mysite
python manage.py runserver
cd ..
django-admin startproject mysite1
cd mysite1
python manage.py startapp polls
sudo yum install sqlite-devel -y
deactivate
cd ~ && wget https://www.sqlite.org/2020/sqlite-autoconf-3320100.tar.gz && tar xvfz sqlite-autoconf-3320100.tar.gz && cd sqlite-autoconf-3320100 && ./configure && make && make install
cd /opt
cd Python-3.9.2
sudo ./configure --enable-optimizations 
sudo make altinstall 
cd /home/ec2-user/evan/python/django/mysite
venv
cd ../mysite1
python manage.py runserver
deactivate
rn -r ~/env
rm -r ~/env
python3 -m venv ~/env
venv
python manage.py runserver
python -m pip install Django
python -m pip install --upgrade pip
python manage.py runserver
cd /usr/local/bin
ls
python
cd /opt
ls
sudo wget https://sqlite.org/2021/sqlite-tools-linux-x86-3350200.zip
wget https://sqlite.org/2021/sqlite-autoconf-3350200.tar.gz
sudo wget https://sqlite.org/2021/sqlite-autoconf-3350200.tar.gz
tar -xzf sqlite-autoconf-3350200.tar.gz
sudo tar -xzf sqlite-autoconf-3350200.tar.gz
cd sqlite-autoconf-3350200
sudo ./configure
sudo make
sudo make install
cd ..
ls
sqlite3 --version
cd /opt/Python-3.9.2
LD_RUN_PATH=/usr/local/lib  ./configure
sudo LD_RUN_PATH=/usr/local/lib  ./configure
sudo LD_RUN_PATH=/usr/local/lib make
sudo LD_RUN_PATH=/usr/local/lib make altinstall
python3 -m venv ~/env
deactivate
python3 -m venv ~/env
venv
python -m pip install Django
cd mysite1
python mnage.py runserver
python manage.py runserver
python
source .bash_profile
rm -rf ~/env
ls ~
ls -a ~
python -m pip install Django
python3 -m venv ~/env
ls -a ~
ls  ~
venv
cd mysite1
python manage.py runserver
python -m pip install Django
python manage.py runserver
python
pip install pysqlite3
python manage.py runserver
cd ../mysite
python manage.py runserver
pip install mysqlclient
cd /opt
ls
sudo yum -y install zlib zlib-devel
sudo yum -y install libffi-devel 
python manage.py runserver
cd mysite
python manage.py runserver
venv
python manage.py runserver
pip install mysqlclient
/home/ec2-user/env/bin/python3.9 -m pip install --upgrade pip
pip install mysqlclient
ERROR: Could not find a version that satisfies the requirement mysqlclient
sudo yum install python3-devel mysql-devel
pip install mysqlclient
python manage.py runserver
pip install mysql-python
sudo yum install libffi-devel
pip install flask
deactivate
python3 -m venv ~/env
venv
python -m pip install Django
pip install mysqlclient
sudo yum update -y
sudo amazon-linux-extras install -y lamp-mariadb10.2-php7.2 php7.2
sudo yum install -y httpd mariadb-server
sudo usermod -a -G apache ec2-user
groups
exit
groups
sudo su
groups
sudo chown -R ec2-user:apache /var/www
sudo chmod 2775 /var/www && find /var/www -type d -exec sudo chmod 2775 {} \;
find /var/www -type f -exec sudo chmod 0664 {} \;
sudo systemctl start mariadb
sudo mysql_secure_installation
sudo yum install php-mbstring php-xml -y
sudo systemctl restart httpd
pip install mysqlclient
venv
pip install mysqlclient
sudo yum install libffi-devel
sudo yum install python3-devel mysql-devel 
python -m pip install mysql-connector-python
python my.py
python my.py
python my.py
python my.py
cd mysite
python manage.py runserver
sudo yum install python-devel mariadb-devel
pip install MySQL-python
sudo yum install libffi-deve
sudo yum install gcc openssl-devel bzip2-devel libffi-devel
deactivate
python -m venv ~/env
python3 -m venv ~/env
venv
pip install mysqlclient
python -m pip install Django
python manage.py runserver
amazon-linux-extras
sudo yum install nginx1
sudo yum install nginx
sudo amazon-linux-extras install nginx1
sudo service nginx start
journalctl -xe
systemctl status nginx.service
sudo service nginx start
sudo service httpd stop
sudo servicemariadb stop
sudo service mariadb stop
sudo service nginx restart
systemctl status nginx.service
systemctl status nginx.service -l
sudo service nginx restart
groups
sudo service nginx stop
sudo service httpsd start
sudo service httpd start
groups
sudo usermod -a -G nginx ec2-user
groups
sudo chown -R ec2-user:nginx /home/ec2-user/evan/nginx
sudo service httpd stop
sudo service nginx start
sudo service nginx restart
systemctl status nginx.service -l
sudo service nginx restart
systemctl status nginx.service -l
groups
sudo groupadd nginxgroup
groups
sudo usermod -a -G nginxgroup  ec2-user
groups
sudo su
groups
groups nginx
groups ec2-user
sudo chown -R ec2-user:nginx /home/ec2-user/evan/nginx
sudo chmod 755 /home/ec2-user/evan/nginx
sudo chown -R nginx:nginx /home/ec2-user/evan/nginx
sudo service nginx restart
sudo chown -R nginx:nginx /home/ec2-user/evan/nginx/
sudo service nginx restart
usermod -a -G nginx ec2-user
sudo usermod -a -G nginx ec2-user
sudo usermod -a -G nginx ec3-user
groups nginx
sudo su
groups
sudo usermod -a -G nginx ec2-user
sudo chown -R ec2-user:nginx /home/ec2-user/evan/nginx
sudo chmod 2775 /home/ec2-user/evan/nginx && find /home/ec2-user/evan/nginx -type d -exec sudo chmod 2775 {} \;
sudo service nginx restart
groups
cd /home/ec2-user/evan/nginx
touch x.txt
ls
ls -l .
find /home/ec2-user/evan/nginx -type f -exec sudo chmod 0664 {} \;
groups nginx
sudo su
sudo service nginx start
sudo service nginx restart
cd nginx]
cd nginx
ls -l
sudo chmod -R 755 .
ls -l
sudo service nginx restart
ls -l
cd ,,/ng
cd ../ng
ls -l
sudo service nginx restart
sudo chmod -R 766 ~/x/
sudo chmod o+x /home/ec2-user/x/
sudo service nginx restart
namei -om .
getenforce
chown -R nginx:nginx .
chown -R nginx:nginx ~/x/
sudo chown -R nginx:nginx ~/x/
sudo chown -R root:root ~/x/
sudo service nginx restart
ls -l ~/x
chmod -R 755 ~/x/
sudo chmod -R 755 ~/x/
sudo chmod -R 755 ~
sudo chown -R nginx:nginx ~/x/
sudo chown -R ec2-user;nginx  ~/x/
sudo chown -R ec2-user:nginx  ~/x/
sudo service nginx restart
git clone https://github.com/edangolgithub/serverless.git
cd evanexpressserver
serverless create --template aws-nodejs
npm init
npm i aws-sdk body-parser express serverless-http uuid
npm i webpack serverless-webpack
sls offline start
sls invoke local -f start
npm install cors
sls invoke local -f start
sls deploy
```