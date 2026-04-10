/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    let n = nums.length;
    let minDist = Infinity;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                // check all three
                if (nums[i] === nums[j] && nums[j] === nums[k]) {
                    let dist = Math.abs(i - j) + Math.abs(j - k) + Math.abs(k - i);
                    minDist = Math.min(minDist, dist);
                }
            }
        }
    }

    return minDist === Infinity ? -1 : minDist;
};