select r.name, r.difficulty from  lifts l
join runs r on l.id = r.lift_id
where l.name = $2
and  r.difficulty = $1;