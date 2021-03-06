# Jualan Boba Bintang 5

Table Drinks

| Column Name     | Data Type | Modifier           |
|-----------------|-----------|--------------------|
| name            | VARCHAR   | UNIQUE, NOT NULL   |
| rating          | iNTEGER   |                    |
| from            | VARCHAR   |                    |
| recipe_created  | DATE      |                    |


Data

| id | name                         | rating | from   | recipe_created |
|----|------------------------------|--------|--------|----------------|
| 1  | Ice Boba Tea                 | 3      | Tokyo  | 2015-10-22     |
| 2  | Hot Boba Tea                 | 1      | Taiwan | 2017-12-12     |
| 3  | Ice Marsmallow Milk Tea Boba | 5      | China  | 2020-01-11     |
| 4  | Ice Milk Brown Sugar Boba    | 5      | Taiwan | 2020-08-17     |
| 5  | Hot Sweet Milk Boba          | 4      | Tokyo  | 2018-08-01     |


Route

| Method | Route       | Description                                       |
|--------|-------------|---------------------------------------------------|
| GET    | /           | List of drinks in table                           |
| GET    | /add        | Get form add drink                                |
| POST   | /add        | Add new drink & redirect to /                     |
| POST   | /delete/:id | Delete drink by id with rating 1 & redirect to /  |

</br></br></br>

# Helper 
1. Buat helper memformat date menjadi DD Month YYYY, namun Month dalam bahasa indonesia
```js
[
    'Januari', 'Februari', 'Maret', 'April' , 'Mei', 'Juni', 
    'July', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
]
```
2. Buat helper rating bentuk angka menjadi symbol star dan apply view sehingga terlihat seperti :arrow_down:
![home](./home.png)


# Validation

Validasi terhadap nama, rating, from dan recipe_created! 

### Nama
- Tidak boleh kosong  
- Length lebih dari nama > 5 
- Harus memiliki kata 'ice', 'boba' atau 'hot', 'boba' 
```js
let validate = false
let name = '....' 
if (name.toLowerCase().includes('ice') && name.toLowerCase().includes('boba')) {
  validate = true
}
if (name.toLowerCase().includes('hot') && name.toLowerCase().includes('boba')) {
  validate = true
}
if (!validate){
  throw ('Name must include hot/ice and boba!')
}
```

### Rating
- Tidak boleh kosong  
- Rating harus angka bulat dari 1 s/d 5 

### From
- Tidak boleh kosong 
- Hanya boleh character dan number (no Symbol!)

### Recipe_crated
- Tidak boleh kosong 
- Date sudah pasti sebelum hari ini 

![errors](./errors.png)


# Hooks 
- Hooks saat create input name dari user bisa saja tidak berformat EYD re-format input user menjadi EYD sebelum masuk ke table drinks 
- Hooks sebelum delete, yang bisa di delete adalah rating 1 lain dari berikan error
