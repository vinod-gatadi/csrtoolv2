# csrtoolv2
Install lates version for node :
>nvm install 18.18.0
>nvm use 18.18.0

Install nx command globally :
>npm install -g @nrwl/cli 
>npm install -g nx@latest

Steps used to create this app
1. Create angular monorepo with workspace name csrtoolv2. Give application name as csr-client
npx create-nx-workspace@latest csrtoolv2 --preset=angular-monorepo

2. Add express app to above workspace
nx g @nx/express:app csr-api --directory=apps/csr-api

3. To start the app
nx serve csr-client or npx nx serve csr-client
