var Readable = require('stream').Readable;
var readable = new Readable;
var count = 0;
var fs = require('fs');
var writeStream = fs.createWriteStream('./result.js',{
    flags:'w',
    mode:0777

});

readable._read = function(){
    if(++count>15){
        writeStream.close();
        return readable.push(null);
    }
    setTimeout(function(){
        writeStream.write(count+'\n');
        readable.push(count+"\n");
    },500);
}
readable.pipe(process.stdout);