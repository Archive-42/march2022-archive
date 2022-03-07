# 039._Combination_Sum

## [39. Combination Sum](https://leetcode.com/problems/combination-sum/description/)

### Problem:

Given a **set** of candidate numbers (`candidates`) **(without duplicates)** and a target number (`target`), find all unique combinations in `candidates` where the candidate numbers sums to `target`.

The **same** repeated number may be chosen from `candidates` unlimited number of times.

**Note:**

- All numbers (including `target`) will be positive integers.
- The solution set must not contain duplicate combinations.

**Example 1:**

```
Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
```

**Example 2:**

```
Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
```

### Solution:

DFS + Backtracking.

To prevent duplications, only loop the right side of the candidates.

```
/** * @param {number[]} candidates * @param {number} target * @return {number[][]} */let combinationSum = function (candidates, target) {  return dfs(candidates, target, [], [], 0);};function dfs(candidates, target, result, path, start) {  for (let i = start; i < candidates.length; i++) {    const cand = candidates[i];    if (cand > target) {      continue;    }    path.push(cand);    if (cand === target) {      result.push(path.slice());    } else {      dfs(candidates, target - cand, result, path, i);    }    path.pop(cand);  }  return result;}
```

---

☆*: .｡. o(≧▽≦)o .｡.:*☆☆*: .｡. o(≧▽≦)o .｡.:*☆☆*: .｡. o(≧▽≦)o .｡.:*☆

---

---

☆*: .｡. o(≧▽≦)o .｡.:*☆☆*: .｡. o(≧▽≦)o .｡.:*☆

---