这是我学习JavaScript的途径
学习网站：https://www.liaoxuefeng.com

ps：JavaScript严格区分大小写

一：两种方法
①直接内嵌在网页中：一般放在<head>中的<script>js代码</script>
②将代码放到一个单独的.js文件中，通过html中<script type="text/javascript" src="js路径"></script>; type不是必要

二：// 单行注释；/*……*/多行注释

三：数据类型：
    Number：整数，浮点数，1.2345e3（科学计数法），NaN（Not a Number当无法计算结果时用NaN表示），Infinity无限大
    计算符号：+-*/%
    字符串：“”，''
    布尔值：true，false
    布尔运算：&&与运算,||或运算,!非运算
    比较运算符：>,<,==自动转换类型再比较，===不转换类型比较，推荐使用===比较；NaN与其它都不等；
    isNaN(NaN)是唯一能判断NaN的方法；
    null空值
    undefined未定义
    ''长度为0的字符串
    数组：[1,2,3,4], Array()创建数组函数
    对象：键-值组成的无序合集，‘对象变量.属性名’可获取对象的属性
    变量：全局变量；var申明的变量局限再申明的函数体内，'use strict'模式强制使用var申明变量
    转移字符:\; \n换行 \t制表符 \\表示\ 还可以表示ASCII字符和Unicode字符
    最新的ES6标准新增了一种多行字符串的表示方法：反引号`...`
    JavaScript规定，访问不存在的属性不报错，而是返回undefined
    JavaScript用一个{...}表示一个对象，键值对以xxx: xxx形式申明，用,隔开。
    JavaScript使用if () { ... } else { ... }来进行条件判断。如果语句块只包含一条语句，那么可以省略{}，
    在多个if...else...语句中，如果某个条件成立，则后续就不再继续判断了
    JavaScript把null、undefined、0、NaN和空字符串''视为false，其他值一概视为true

循环：
    for(……;……;……){}括号内条件以分号为间隔
    for循环的3个条件都是可以省略的，如果没有退出循环的判断条件，就必须使用break语句退出循环，否则就是死循环
    for循环的一个变体是for ... in循环，它可以把一个对象的所有属性依次循环出来
