#1
insert into task(title, description, created, updated, due_date, status_id, user_id)
values('myDbHomework','Title says it all',date_sub(now(),interval 1 month),date_sub(now(),interval 15 day),now(),2,3);
#2
update task set task.title='myNodeHomework' where id=36;
#3
update task set task.due_date=date_sub(now(),interval 10 day) where id=36;
#4
update task set task.status_id=1 where id=36;
#5
update task set task.status_id=3 where id=36;
#6
delete from task where id=36;
