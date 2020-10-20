# Jualan Bobba Bintang 5

Table Drinks

| Column Name     | Data Type | Modifier |
|-----------------|-----------|----------|
| name            | VARCHAR   | UNiQUE   |
| rating          | iNTEGER   | NOT NULL |
| from            | VARCHAR   | NOT NULL |
| recipe_created  | DATE      | NOT NULL |


Data

| id | name                          | rating | from   | recipe_created | 
|----|-------------------------------|--------|--------|----------------|
| 1  | ice bobba tea                 | 3      | Tokyo  | 2015-12-22     |
| 2  | Hot bobba tea                 | 1      | Taiwan | 2017-12-12     |
| 3  | ice marsmallow milk tea bobba | 5      | China  | 2020-01-01     |
| 4  | ice milk Brown Sugar bobba    | 5      | Taiwan | 2020-05-25     |
| 5  | hot sweet milk bobba          | 4      | Tokyo  | 2018-08-01     |



ROUTES

| Method | Route       | Description                                       |
|--------|-------------|---------------------------------------------------|
| GET    | /           | List of drinks in table                           |
| GET    | /add        | Get form add drink                                |
| POST   | /add        | Add new drink & redirect to /                     |
| POST   | /delete/:id | Delete drink by id with rating 1 & redirect to /  |


# Helper 
1. Buat helper rating bentuk angka menjadi emoji star dan apply view sehingga terlihat seperti ini 
2. Buat helper memformat date menjadi DD Month YYYY, namun Month dalam bahasa indonesia
```js
[
    'Januari', 'Februari', 'Maret', 'April' , 'Mei', 'Juni', 
    'July', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
]
```

# Validation

Validasi terhadap nama, rating, from dan recipe_created! 

### Nama
- length dari nama > 5 
- tidak ada character memiliki angka 
- harus memiliki kata 'ice', 'bobba' atau 'hot', 'bobba' 

### Rating
Rating harus angka bulat dari 1 s/d 5 

### From
From hanya boleh di antara 'China', 'Taiwan' dan 'Tokyo'

### recipe_crated
Date sudah pasti sebelum hari ini 


# Buat fancy notif dengan helper 
jika success warna tulisan hijau 
jika failed warna kuning 
jika error validasi warna merah

# Kapan menggunakan Hooks dan Validasi? 
