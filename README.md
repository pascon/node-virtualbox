# node-virtualbox
A JavaScript library to interact with Virtualbox - **with support for BIOS date change**.

# Installation

```bash
$ npm install virtualbox
```

# Examples

### Starting and Running a program

```javascript
var virtualbox = require('virtualbox');

virtualbox.start("Win32", function(error){

  if(error) throw error;

  console.log('VM "w7" has been successfully started');

  virtualbox.exec({ vm: "win32", cmd: "C:\\Program Files\\Internet Explorer\\iexplore.exe", params: "http://google.com" },  function(error){

    if(error) throw error;

    console.log('Running Internet Explorer...');

  });

});
```

### Executing commands as Administrators
Pass username and password information within options;

```javascript
virtualbox.exec({ vm: "ie8", "user":"Administrator", "password": 123456" ...
```

# Available Methods

* start
* stop
* exec
* reset
* pause
* resume

# Troubleshooting

* Make sure that Guest account is enabled on the VM.
* It starts VMs headlessly by default. If you're having trouble with executing a command, start the VM with GUI and observe the screen after executing same command.
* To avoid having "Concurrent guest process limit is reached" error message, execute your commands as an administrator. 

# Example Uses
* [tests](https://github.com/azer/node-virtualbox/tree/master/test)
* [Lowkick](http://github.com/azer/lowkick)
