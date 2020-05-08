select urj.user_run_join_id, u.username, r.name, r.difficulty, urj.comment, u.id as user_id   from user_run_join urj 
join runs r on urj.run_id = r.id
join users u on u.id = urj.user_id
where user_id = $1
order by urj.user_run_join_id asc;

-- select urj.user_run_join_id, u.username, r.name, r.difficulty, urj.comment, u.id as user_id   from user_run_join urj 
-- join runs r on urj.run_id = r.id
-- join users u on u.id = urj.user_id
-- where user_id = $1
-- order by urj.user_run_join_id asc;

-- select count(*) as difficulty_count_green, count(distinct r.difficulty) as unique_difficulty_green from user_run_join urj 
-- join runs r on urj.run_id = r.id
-- join users u on u.id = urj.user_id
-- where user_id = $1
-- and  r.difficulty = 'green';

-- select count(*) as difficulty_count_blue, count(distinct r.difficulty) as unique_difficulty_blue from user_run_join urj 
-- join runs r on urj.run_id = r.id
-- join users u on u.id = urj.user_id
-- where user_id = $1
-- and  r.difficulty = 'blue';

-- select count(*) as difficulty_count_black, count(distinct r.difficulty) as unique_difficulty_black from user_run_join urj 
-- join runs r on urj.run_id = r.id
-- join users u on u.id = urj.user_id
-- where user_id = $1
-- and r.difficulty = 'black';

-- select count(*) as difficulty_count_doubleblack, count(distinct r.difficulty) as unique_difficulty_doubleblack from user_run_join urj 
-- join runs r on urj.run_id = r.id
-- join users u on u.id = urj.user_id
-- where user_id = $1
-- and r.difficulty = 'doubleblack';
