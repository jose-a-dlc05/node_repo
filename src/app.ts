// 1. Import http and fs modules
// 2. Create a server where you can serve either, html, images or json files statically
// a. Declare a const readStream and initialize it with the file system module's createReadStream method
// b. Use the response writeHead method to enter the HTTP code and Content Type
// c. Use the stream.pipe method to feed the response which is a writeable stream
