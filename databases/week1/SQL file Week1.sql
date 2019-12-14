#1:
#select count(*) from task
#2:
#select count(*) from task where due_date is null
#3:
#select * from task where status_id = 3
#4:
#select * from task where status_id <> 3
#5:
#select * from task order by created desc
#6:
#select max(created) from task 
#7:
#select title, due_date from task where title like '%database%' or description like '%database%'
#8:
#select title, name from task join status on status.id = task.status_id
#9:
#select name,count(status_id) as numberOfTasks from status join task on task.status_id = status.id 
#group by task.status_id
#10:
#select name,count(status_id) as numberOfTasks from status join task on task.status_id = status.id 
#group by task.status_id
#order by count(status_id) desc
