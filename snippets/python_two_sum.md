# Python - Two Sum

The optimized Two Sum solution using hash map (O(n)):

```python
# Optimized with hash map

def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        diff = target - num
        if diff in seen:
            return [seen[diff], i]
        seen[num] = i
```