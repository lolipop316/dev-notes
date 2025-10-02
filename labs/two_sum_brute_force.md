# Two Sum Brute Force

Implemented brute-force Two Sum in Python, O(n^2).

```python
# Brute Force
def two_sum(nums, target):
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
```