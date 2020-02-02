# TypeScript
## Abstract
> This is a typescript!
> Typescript is very useful tool in front-end development for JavaEE Developers.
> Typescript provides type safety and export javascript file.
> It converts Java-like codes into javascript codes.

## Requirements
###### Arch Linux ######
- Install nvm - Node Version Manager
`$ yaourt -S nvm`
- Load nvm
`$ source /usr/share/nvm/init-nvm.sh`
- Install node.js and npm
`$ nvm -g install npm`
- Test your setup
```
$ nvm use stable
$ nvm -g install browser-sync
$ browser-sync start --server
```
- Load nvm whenever terminal is open
   - Type`$ cd /usr/share/nvm/` in terminal.
   - Type`sudo gedit init-nvm.sh` in terminal and select all text and copy.
   - Type `sudo gedit .bashrc` in terminal and paste them in the end of the text.
- Install nodejs
`$ sudo pacman -S nodejs`
   - then you create a folder for your project and in a terminal you can install Angular
```
$ npm install -g @angular/cli
$ ng new my-app
```
   - Press `ng` and enter to check if it is installed.

## Creating the project
1. touch index.ts
- Create index.ts file and add the following code.
```
console.log('TypeScript is running!');
```

2. touch index.html
- Open index.html and link with `src="/index.js"`.
   - (index.js will be produced after compiling `index.ts`.)

3. npm init
- It can be used to set up a new or existing npm package.
   - (Press enter for all steps.)

4. npm install --save-dev lite-server
(open package.json and inside "scripts" add the followings.)
"tsc":"tsc",
"start":"lite-server"
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "tsc": "tsc",
    "start": "lite-server"
},
```

5. tsc index.ts
(This comples the ts file and produce index.js file.)

6. npm start
- This will run index.html on lite-server with the specified path

7. Check Console
- Right Click on browser and press `Inspect Element(Q)`
- Press on Console and you'll see the output.

## Electronics Engineer-cum-J2EE Backend Developer ##
-  Created by - Aye Chan Aung Thwin
