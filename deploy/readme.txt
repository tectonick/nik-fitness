Windows:
Open git-bash and launch these 2 commands

curl https://raw.githubusercontent.com/git-ftp/git-ftp/master/git-ftp > /bin/git-ftp
chmod 755 /bin/git-ftp

Config:
git config git-ftp.url ftp.example.net
git config git-ftp.user ftp-user
git config git-ftp.password secr3t

Usage:
git ftp init - init repos
git ftp catchup - sync repos
git ftp push - push commit

Restart node:
Create powershell script restart.ps1 in project '/deploy' folder with
    echo 'Press enter to restart';
    ssh usernamr@domain "./restart.sh"

Create bash script restart.sh in server '/home/user' folder with
    echo "Restarting node";
    cd ./nik-fitness;
    sudo pkill node;
    nohup sudo node app.js > /dev/null 2> /dev/null &
    echo "Restarted";
    exit
