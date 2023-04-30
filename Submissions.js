const Submissions = [
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
];

module.exports = Submissions;
