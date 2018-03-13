UPDATE products
SET productname = $3, price = $4
WHERE shelfid = $1 AND binid = $2;