-- caso de uso 1 inserir nome do pet
   insert tb_pet (nm_pet) 
     values (?)

-- caso de uso 2 consultar todos
select id_pet ,
nm_pet
from tb_pet;

