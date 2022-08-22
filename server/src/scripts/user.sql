with user_json (doc) as (
    values (
            '[
                {
					"id": 1,
                    "firstName": "Gangadhar",
                    "lastName": "S",
                    "username": "shaktiman",
                    "email": "Gangadhar@s.com",
                    "phone": "9999999997",
                    "createdAt": "2022-08-18 23:46:15.209+05:30",
                    "updatedAt": "2022-08-18 23:46:15.209+05:30"
                }
            ]'::json
        )
)
insert into users (
        "id",
        "firstName",
        "lastName",
        "username",
        "email",
        "phone",
        "createdAt",
        "updatedAt"
    )
select u.*
from user_json l
    cross join lateral json_populate_recordset (null::users, doc) as u;
;