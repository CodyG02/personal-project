select r.name, r.difficulty from  lifts l
join runs r on l.id = r.lift_id
where lift_id = $2
and difficulty = $1;