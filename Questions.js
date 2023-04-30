const Questions = [
  {
    id: 1,
    difficulty: "Easy",
    title: "Two Sum",
    description:
      "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
    example:
      "Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nOutput: Because nums[0] + nums[1] == 9,\n",
    tags: ["array", "hash table"],
  },
  {
    id: 2,
    difficulty: "Medium",
    title: "Longest Substring Without Repeating Characters",
    description:
      "Given a string s, find the length of the longest substring without repeating characters.",
    example:
      'Input: s = "abcabcbb"\nOutput: 3\nExplanation: The answer is "abc", with the length of 3.',
    tags: ["hash table", "two pointers", "string", "sliding window"],
  },
  {
    id: 3,
    difficulty: "Hard",
    title: "Regular Expression Matching",
    description:
      "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:\n'.' Matches any single character.\n'*' Matches zero or more of the preceding element.",
    example:
      'Input: s = "aab", p = "c*a*b"\nOutput: true\nExplanation: "c*a*b" matches "aab" because \'*\' means zero or more of the preceding element, \'c\'.',
    tags: ["string", "dynamic programming", "backtracking"],
  },
  {
    id: 4,
    difficulty: "Easy",
    title: "Reverse Integer",
    description:
      "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.",
    example: "Input: x = 123\nOutput: 321",
    tags: ["math"],
  },
  {
    id: 5,
    difficulty: "Medium",
    title: "3Sum",
    description:
      "Given an array nums of n integers, find all unique triplets in the array which gives the sum of zero.",
    example:
      "Input: nums = [-1,0,1,2,-1,-4]\nOutput: [[-1,-1,2],[-1,0,1]]\nExplanation: The solution set must not contain duplicate triplets.",
    tags: ["array", "two pointers"],
  },
];

module.exports = Questions;
