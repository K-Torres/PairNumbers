
**

## Mach Eight Sample Project

**
This readme file will provide instructions on how to run the tests and the Vite app, as well as explain the solution to the given problem and the Big O notation of the findPairs function.


**Running the Tests and the Vite App**

To run the tests and the Vite app, please follow the steps below:

 
**Install Node.js**: Make sure you have Node.js installed on your machine. You can download it from the official Node.js website (https://nodejs.org).

**Clone the Repository**: Clone the repository containing the sample project to your local machine.


**Navigate to the Project Directory:** Open a terminal or command prompt and navigate to the directory where you cloned the repository.

  

**Install Dependencies:** Run the following command to install the project dependencies:

    npm install

**Run Tests:** To execute the tests, use the following command:

    npm run test

**Run Vite App:** To run the Vite app, use the following command:

    npm run dev

This command will start the development server and provide you with a URL to access the app in your browser.

## Task
​
The task is to write a function that finds pairs of integers from a list that
sum to a given value. The function will take as input the list of numbers as
well as the target sum.
​
Sample output is shown below.
```
> app 1,9,5,0,20,-4,12,16,7 12
​
+ 12,0
+ 5,7
+ 16,-4
+ 
In the example, there is an executable named `app`. It takes as command line
arguments a comma separated list of integers, and the target integer. Your app
doesn't need to have identical input/output mechanisms. For example, you could
read from a file instead of the command line.
​
You can assume that all input values are integers. You can assume that there aren't
any repeat values in the list.
​
The algorithm to find the pairs must be faster than O(n^2). All edge cases
should be handled appropriately. This is _not_ a closed book test. You are
encouraged to reach out with any questions that you come across.
  
```

## Big O Notation of the `findPairs` Function**

    function findPairs(nums, targetSum) {
     const pairs = []; //O(1)
      const complements = {}; //O(1)
       for (let num of nums) {  //O(n)
       const complement = targetSum - num; //O(1)
       if (complements[complement]) { //O(1)
         pairs.push([num, complement]); //O(1)
       } 
       complements[num] = true; } return pairs; //O(1)
    }
The time complexity of the function is O(n), where `n` is the size of the `nums` array.
