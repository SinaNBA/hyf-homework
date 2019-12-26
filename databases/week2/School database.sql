create table class (
 id int auto_increment primary key
 , name text not null ,
 begins datetime , ends datetime
);
create table student (
 id int auto_increment primary key
 , name text not null ,email text,phone varchar(12),
 class_id int,
 foreign key (class_id) references class(id)
);

alter table student add index (name);
alter table class add status enum('not-started', 'ongoing', 'finished');