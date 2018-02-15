My goal with this repo is to offer some basic introductions into JavaScript and TypeScript. There are many amazing resources out there but I have found it difficult to find good resources for getting the basics set up.

## Where to start
You've found this page, where do you go from here? JavaScript has many varieties and many frameworks, I know only a small chunk it all and am learning every day. Below are a few starting points

### The very basics
http://www.typescriptlang.org/docs/handbook/ - TypeScript is a superset of JavaScript and has some differences, that said, they have a comprehensive handbook which I think covers a lot of the basics and leads to more complex concepts

https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics - This particular article starts off a bit web centric but provides some basic information about JavScript. It also is an introduction to the MDN web docs Mozilla's developer reference guide. This is a great resource when looking for documentation.

### Development Environment
All the resources in the world are great, but what do you do with them when you want to practice?

Your web browser - both Chrome and FireFox have great consoles and allow you to test JavaScript right away.
  In Chrome - Right click/CTRL Click > Inspect > Console
  In FireFox

Node - https://nodejs.org/en/
Node is one flavor of JavaScript and has an architecture of it's own. For basics though it is going to function similar to other implementations and has a wide range of documents and packages. Be sure to install the LTS (long term support) version
  Node has a few features to be aware of:
      NPM - https://www.npmjs.com/ - a package manager, it offers the ability to install packages (code chunks or small programs) locally to use in the specific project you're working on, or globally so you can use command line tools in your console.
      Node console - simply typing node in your console/terminal of choice (we'll get to this in a second) will start a console, similar to the console in your browser this gives you the opertunity to test code with instant feedback
      Files and modules - node followed by the name of any .js file will run that file. This will allow you to get away from the console, play with some functions and start writing real apps. As is documented on the node site, Node has an ecosystem built around modularized code, if you choose to continue using Node I would suggest slowly playing with this infrastructure.
      
### Consoles/Terminals
Development since the early days of computing has had a strong root in consoles, purely text based interfaces. This is still the norm on unix and some linux systems but most people reading this are probably using Windows or Mac.
  Windows - Unless your are a seasoned Windows sysadmin, do not use CMD, it will drive you insane and won't support many of the programs you are trying to work with. In fact if you are a seasoned Windows sysadmin you probably aren't using cmd. I highly reccomend cmder (http://cmder.net/) and reccoment installing the full version. I'm sure there are other emulators out there but this is the one I've found to work best for me. It emulates unix/linux functionality and will allow you to use the same tools with ease.
  Mac - Terminal comes pre-installed and should work fine for all your needs. I prefer using iTerm (https://www.iterm2.com/) though for its improved interface
  
Some Basics:
Google is a great resources but the main commands to be aware of when using terminals:
  `cd` changes directory . (current directory) and .. (parent directory) reference relations to directories. `cd ..` will go to the parent directory while `./` will reference the current directory. Some examples:
    `cd ../someOtherDir` will move your view to someOtherDir which is a directory sharing the same directory as the one you're in
    `cd ~/someDir` will move your view to someDir in your "home directory" typically the folder with your username on your computer.
    `cd ./someSubDir` will move your view to a sub directory. The command should function the same as `cd someSubDir`
    You can of course chain directories `cd ./someSubDir/anotherDir/oneMoreDir`
  `mkdir` - followed by space and a name creates a new folder/directory `mkdir someNewDirectory`
  `rm` - deletes a file
    `rm -r` - deletes recursively, used on a folder/directory will delete the entire directory and all of the sub directories
    `rm -f` - -f overrides any warnings about protected files, only use this if you know what you are doing this can be combined with r for bigger trouble `rm -rf` will delete whatever path you provide and won't warn you about any protections in place. `rm -rf *` is probably one of the most destructive commands you can use and will delete all files in the current directory with little or no warning.
  `cp` - copy follow it with the source and destination paths
  `mv` - cut and paste or move again follow it with source and destination
  `touch` - creates an empty file, helpful if you want to build out a quick directory and edit it later `touch newFileName` is the syntax

### IDEs and text editors
IDEs are integrated development environents, code editors which can also run code
VSCode - I have become partial to VSCode more recently, it has strong support for TypeScript and a lot of options for customization. It is highly reliant on what packages you have installed so bear this in mind. Packages I have installed (largely pulled from https://scotch.io/bar-talk/best-vs-code-extensions-for-angular-v2-development):
* ESLint - code validation for JavaScript
* TSlint - code validation for TypeScript
* Angular 2 TypeScript Emmet - used in web development, Emmet is worth researching if you do any HTML work
* Angular Language Service - Angular specific syntax help
* angular2-inline - again Angular specific, helpful if you are interested in basic Angular development
* GitLens - git support (we'll talk about git in a moment)

WebStorm - a bit more feature filled right out of the box, I learned on WebStorm and think it is a great product. It isn't free and can be a bit cumbersome. That said it is in my opinion a bit easier to figure out than VSCode right off the bat

Atom - A text editor with packages and plugins for supporting a multitude of coding options. Some people swear by it, I only use it as a nice text editor

Sublime - Still has a strong following, if I want to use a text editor though I use Atom, if I want an IDE I use VSCode or WebStorm






  


