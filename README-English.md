# TypeScript
## Abstract
> This is a typescript!
> Typescript is a superset of JavaScript.
> It allows static-typing and so it provides compile-time checking.
> It is based on the .NET harmoy specification. So, a lot of code looks like and behaves similarly other OOP languages.

## What's wrong with JavaScript?
- JavaScript is not suitable for large applications. Structuring and maintaining a JavaScript application can be tricky as it grows. (Hard to maintain when larger!)
- JavaScript Lacks strong typing. That means some errors will only pop-up at run-time.
- JavaScript has got weird inheritance with unfamiliar syntax!
- JavaScript also suffers from bad type coercion, etc...

## Benefits of TypeScript
- TypeScript compiles into JavaScript. 
   - You can run typescript everywhere; in the browser or in a node js.
- Easy Migration
   - Existing JavaScript code is already valid to TypeScript code. So, migrating to TypeScript is as simple as renaming your file.
- Its syntax is pretty familiar to those of OOP languages.
- TypeScript includes many improvements over JavaScript.

## Setting up the requirements (npm, ng, vscode)
###### Installing requirements in Arch Linux ######
- Install nvm - Node Version Manager
`$ yaourt -S nvm`
- Load nvm
`$ source /usr/share/nvm/init-nvm.sh`
- Install nodejs and npm
`$ nvm -g install npm`
   - (If above code failed, you can install nodejs from the main repository)
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
- Install nodejs from the main repository using `$ sudo pacman -S nodejs`.
- And then you install typescript compiler using `$ npm install -g typescript`.

## Creating the project
1. Create your project folder
- `mkdir MyFirstTypeScriptProject`

2. Create index.ts file
- `$ touch index.ts` and add the following code.
```
console.log('TypeScript is running!');
```

3. Create index.html file
- `touch index.html`and link with `src="/index.js"`.
   - (index.js will be produced after compiling `index.ts`.)
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>TypeScript</title>
	<script src="./index.js" defer></script>
</head>
<body>
	
</body>
</html>
```

4. Setting up new npm package. 
- `npm init` can be used to set up a new or existing npm package.
   - Press enter for all steps.
   - `package.json` will be appear.
   - (open `package.json` and inside `"scripts"` add `"tsc":"tsc"` to get TypeScript Compiler Functionality and `"start":"lite-server"` for server.
   - Add it just like the following code...
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "tsc": "tsc",
    "start": "lite-server"
},
```

5. Installing Development only dependency and Lite Server
- `npm install --save-dev lite-server`
   - `package-lock.json` and Folder named `node_modules` are created in which all dependency required to run this project lines there.

6. Compiling TypeScript file
- `tsc index.ts` compiles and produces index.js file.

7. Start the Lite Server
- `npm start` will run index.html on lite-server with the specified path

8. Check Console
- Right Click on browser and press `Inspect Element(Q)`
- Press on Console and you'll see the output.

## Electronics Engineer-cum-J2EE Backend Developer ##
-  Created by - Aye Chan Aung Thwin
