select urj.user_run_join_id, u.username, r.name, r.difficulty, urj.comment, u.id as user_id   from user_run_join urj 
join runs r on urj.run_id = r.id
join users u on u.id = urj.user_id
where user_id = $1
order by urj.user_run_join_id asc;
