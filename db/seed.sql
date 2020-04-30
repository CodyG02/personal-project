create table users(
  id serial primary key,
  email varchar(200),
  username varchar(50),
  password text
);

create table lifts(
id int primary key,
name varchar(100)
);

create table runs (
  id int primary key,
  name varchar(100),
difficulty varchar(50)
lift_id int references lifts(id)
  );

create table lift_run_join (
  lift_run_join_id int primary key,
  lift_id int references lifts(id),
  run_id int references runs(id)
  );
  
  
  
  create table user_run_join (
    user_run_join_id serial primary key,
    run_id int references runs(id),
    user_id int references users(id),
    comment varchar(500)
    );