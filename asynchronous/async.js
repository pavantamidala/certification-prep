// set immediate will run only after checking the i / o queue  is empty or not

// total queues

// 1.  micro task queue -

//     (a).process.nextTick(func)

//         (b).promises

// 2.  timers

// 3. i / o  queue
// 4. check queue(setImmediate)
// 5. close queue

// after every queue completion from no 2. event loop will go to the micro task queue will check and process 1(micro task queue) then moves to the next queue.

//     ex : - after 2nd will go to the 1 to check then moves to the 3rd after this will check 1 one more time then it will check the 4 after that will check 1 micro task queue


// as per stephen grider

//     - timers
//     - pendingosTasks(network calls)
//     - pending operations(file system)