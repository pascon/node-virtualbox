var virtualbox = require('../lib/virtualbox'),
    args = process.argv.slice(2);

virtualbox.init({
    vbpath: 'C:\\Program Files\\Oracle\\VirtualBox',
    nologo: false,
    headless: false
});

virtualbox.setBiosSystemTimeOffset(args[0], args[1], function(error){
    virtualbox.start(args[0], function(error){
        if(error) throw error;
    });
});
