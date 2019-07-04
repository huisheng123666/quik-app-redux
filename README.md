### redux与快应用的完美结合 
支持redux-thunk  
支持拆分模块：combineReducers  

### 内含自定义picker组件
原生组件对数据处理太不方便，所以自己实现了一个

#### 属性如下

属性 | 必填 | 类型
--- | ---- | -----
range(列表数据，二维数组) | yes | [[],[]...] |
labelKey(列表显示的属性) | yes | string |
currentRes(当前选中) | no | [{}, {}...] |

#### 事件

事件 | 参数
--- | ---- |
hidePicker(隐藏picker) | 无 |
columnChange(单列变化) | 索引，当前选中行 |
chang(确认) | 选择结果[{}, {}...] |
