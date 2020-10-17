POKE SERVICE

Requirements:
  - node.js: v12.16.2. (If you have Node Version Manger tool, run nvm use on root of this project)

Running app in local:
  - Add .env file and set:
    * NODE_ENV=local
    * PORT=8080
  - Run "npm install && npm run dev"

This App is desployed on Google Kubernetes Engine on static IP: http://35.223.139.39:8080/