
JS simple projects , games + using node.js packages 




1 callback:
A callback function is called after a given task. It allows other code to be run in the meantime and prevents any blocking.  
Being an asynchronous platform, Node.js heavily relies on callback. All APIs of Node are written to support callbacks.
/
A callback is a function called after a given task. This prevents any blocking and enables other code to run in the meantime.
In the last section, we will now cover some of the advanced-level Node.js interview questions.

        var myCallback = function(data) {
        console.log('got data: '+data);
        };

        var usingItNow = function(callback) {
        callback('get it?');
        };


2 What are the advantages of using promises instead of callbacks?
The control flow of asynchronous logic is more specified and structured.
The coupling is low.
We've built-in error handling.
Improved readability.

3 What is an Event Loop in Node.js?
Event loops handle asynchronous callbacks in Node.js. It is the foundation of the non-blocking input/output in Node.js, making it one of the most important environmental features.

4 What are the two types of API functions in Node.js?
Asynchronous, non-blocking functions
Synchronous, blocking functions


5 What are streams in Node.js?
Streams are objects that enable you to read data or write data continuously.
There are four types of streams:
Readable – Used for reading operations
Writable − Used for write operations
Duplex − Can be used for both reading and write operations
Transform − A type of duplex stream where the output is computed based on input


6 What are the key features of Node.js?
Let’s look at some of the key features of Node.js.
Asynchronous event driven IO helps concurrent request handling – All APIs of Node.js are asynchronous. This feature means that if a Node receives a request for some Input/Output operation, it will execute that operation in the background and continue with the processing of other requests. Thus it will not wait for the response from the previous requests.
Fast in Code execution – Node.js uses the V8 JavaScript Runtime engine, the one which is used by Google Chrome. Node has a wrapper over the JavaScript engine which makes the runtime engine much faster and hence processing of requests within Node.js also become faster.
Single Threaded but Highly Scalable – Node.js uses a single thread model for event looping. The response from these events may or may not reach the server immediately. However, this does not block other operations. Thus making Node.js highly scalable. Traditional servers create limited threads to handle requests while Node.js creates a single thread that provides service to much larger numbers of such requests.
Node.js library uses JavaScript – This is another important aspect of Node.js from the developer’s point of view. The majority of developers are already well-versed in JavaScript. Hence, development in Node.js becomes easier for a developer who knows JavaScript.
There is an Active and vibrant community for the Node.js framework – The active community always keeps the framework updated with the latest trends in the web development.
No Buffering – Node.js applications never buffer any data. They simply output the data in chunks.

7 What is runtime env
The Node.js runtime is the software stack responsible for installing your web service's code and its dependencies and running your service


8 Query vs Param
req.params - param in url -  link.com/book/1   req.param = id1
req.query - query in url - everything after the "?" in url  (sorting)

9 What is body-parser
It is a node.js body parsing middware. It is responivle for parsing incoming req bodies in the middleware before you handle it (turn into json from string)


10 Types of events
//inline events HTML - onClick`
//add event listener
//event object
//standart vs arrow events
