# 12 while循环

1. break
2. continue

```python
num = 1
while num <= 5:
    print(num)
    num += 1
```

```python
# 让用户选择何时退出
prompt = 'Tell me something!'
message = ""
while message != 'quit':
    message = input(prompt)
    print(message)
```

```python
# 删除为特定值的所有列表元素
pets = ['cat', 'dog', 'cat']
while 'cat' in pets:
    pets.remove('cat')
```

