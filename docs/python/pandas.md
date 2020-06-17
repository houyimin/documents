---
title: pandas读取excel
---




```python
import pandas as pd
```


#### sheet_name参数，表格名
```python
df = pd.read_excel("reviews.xlsx",sheet_name = 0)
df
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table  class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>listing_id</th>
      <th>date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>44054</td>
      <td>2010-08-25</td>
    </tr>
    <tr>
      <th>1</th>
      <td>44054</td>
      <td>2010-10-13</td>
    </tr>
    <tr>
      <th>2</th>
      <td>44054</td>
      <td>2011-08-11</td>
    </tr>
    <tr>
      <th>3</th>
      <td>44054</td>
      <td>2012-04-12</td>
    </tr>
    <tr>
      <th>4</th>
      <td>44054</td>
      <td>2012-08-30</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
    </tr>
  </tbody>
</table>
</div>


#### index_col参数，指定行索引
```python
df = pd.read_csv("listings.csv",index_col='id')
```

#### usecols参数，指定读取列
```python
df = pd.read_csv("listings.csv",usecols = [0,3])
df.head() #查前5行数据

df.shape #查询数据有几行几列

df.dtypes #查询列字段数据类型
```


