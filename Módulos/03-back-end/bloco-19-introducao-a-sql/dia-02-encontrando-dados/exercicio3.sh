# Selecione todos os registros em que a coluna tem o valor "Berlim".City
SELECT * FROM Customers
WHERE City = 'Berlin';

# Use a palavra-chave para selecionar todos os registros onde NÃO é "Berlim".NOTCity
SELECT * FROM Customers
WHERE NOT City = 'Berlin';

# Selecione todos os registros em que a coluna tenha o valor 32.CustomerID
SELECT * FROM Customers
WHERE CustomerID = 32;

# Selecione todos os registros em que a coluna tem o valor 'Berlim' e a coluna tem o valor 12209.CityPostalCode
SELECT * FROM Customers
WHERE City = 'Berlin'
AND PostalCode = 12209;

# Selecione todos os registros em que a coluna tenha o valor 'Berlim' ou 'Londres'.City
SELECT * FROM Customers
WHERE City = 'Berlin'
OR City = 'London';