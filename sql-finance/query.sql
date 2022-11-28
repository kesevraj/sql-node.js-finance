-- DELETE FROM transaction WHERE transaction_id>0;
-- DELETE FROM loan WHERE loan_id>0

-- SELECT  name,phone,address,email,loan_id, c.customer_id,amount_with_interest AS loan_amount , amount_paid,pending_amount, date AS loan_created ,due_date ,penality,daily_credit,status,managed_by,interest,company_id  FROM  customer AS c
-- JOIN loan AS l
-- WHERE c.customer_id = 1;
-- GROUP BY l.loan_id;


-- SELECT  *  FROM  loan AS l
-- JOIN  customer AS c
-- USING (customer_id  1);

SELECT loan_id,c.customer_id,c.name,c.phone,c.address,l.daily_credit,l.amount,l.amount_paid,pending_amount,status FROM loan l 
JOIN customer c
WHERE l.customer_id=c.customer_id AND status=true;


-- SET SQL_SAFE_UPDATES = 0;
UPDATE loan SET status=false WHERE pending_amount=0 



-- SELECT row_to_json(c) AS customer
-- FROM  (
--    SELECT c.name, (SELECT json_agg(l) FROM loan AS l WHERE l.customer_id = c.customer_id) AS loan
--    FROM   customer AS c
--    ) c;
   
-- SELECT row_to_json(w) AS workshop
-- FROM  (
--    SELECT w.name, (SELECT json_agg(o) FROM (
--                       SELECT o.day, o.time FROM options o
--                       WHERE  o.id = ANY(w.option_ids)
--                       ) o
--                   ) AS options
--    FROM   workshops w
--    ) w

-- SELECT c.customer_id, c.name ,c.phone,c.address,c.email,

-- (SELECT JSON_ARRAYAGG(JSON_OBJECT(
-- 'id', l.loan_id, 
-- 'loan_amount', l.amount_with_interest,
--  'principal_amount',l.amount, 
-- 'amount_paid', l.amount_paid,
-- 'pending_amount',l.pending_amount,
-- 'created_at', l.date, 
--  'due_date',l.due_date, 
-- 'penality',l.penality,
--  'daily_credit',l.daily_credit,
--  'status',l.status, 
--  'managed_by',l.managed_by,
--  'company_id',l.company_id,
--  'interest',l.interest
-- transactions
-- )) FROM loan l
-- WHERE c.customer_id=1) AS loan 
-- FROM customer c WHERE c.customer_id = 1