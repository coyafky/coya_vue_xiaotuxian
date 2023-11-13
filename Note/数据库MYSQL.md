# 数据库MYSQL



数据库

Database DB 按照一定的数据结构来组织，存储和管理数据的仓库









![截屏2023-11-07 15.14.27](/Users/mc/Documents/code/Coya_Study_Note/数据库/image/截屏2023-11-07 15.14.27.png)





![截屏2023-11-07 15.53.49](/Users/mc/Documents/code/Coya_Study_Note/数据库/image/数据库登录成功页面.png)



```Shell
mysql> SHOW DATABASES;\
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.01 sec)
```



```shell
mysql> CREATE DATABASE pytest;
Query OK, 1 row affected (0.00 sec)

mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| pytest             |
| sys                |
+--------------------+
5 rows in set (0.00 sec)
```

