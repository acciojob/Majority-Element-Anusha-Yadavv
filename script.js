//your code here
function findMajorityElement(nums) {
    let candidate = nums[0];
    let count = 1;

    // Step 1: Find a candidate for the majority element
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
            count = 1;
        } else if (candidate === nums[i]) {
            count++;
        } else {
            count--;
        }
    }

    // Step 2: Verify if the candidate is the majority element
    count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (candidate === nums[i]) {
            count++;
        }
    }

    // Majority element is guaranteed to exist, so no need to check if count > 0

    return candidate;
}

// Example usage
const inputArray = [2, 1, 2];
const result = findMajorityElement(inputArray);
console.log(result);  // Output: 2
