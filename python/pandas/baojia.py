# -*- coding: utf-8 -*-
import pandas as pd
import numpy as np

df1 = pd.DataFrame([
    [ "腾飞系统",10000, 1],
    ["云餐厅", 6000, 1],
    [ "公有云",6000, 1],
    [ "餐具",7, 1200] ],
    columns=["型号","单价", "数量"])
#index=('tengfei','yuncant','gyy','canju'))
df1['价格']= df1['单价'] * df1['数量']
# df1["未税"]=df1['价格'].sum()
# #df2=df1["未税"]
#
# df1['含税']=df1["未税"]*1.13
#df3=df1['含税']
#df3=df1['含税']
#df1.index['未税']= df1['价格']

print(df1)

df2 = pd.DataFrame(
    {df1['价格'].sum(),df1['价格'].sum()*1.13},
    index=("未税","含税")
)
print(df2)
