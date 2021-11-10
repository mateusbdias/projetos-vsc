# Mesa 3 - Luana Borges, Luiz Henrique, Mateus Benites Dias, Matheus Braga Dias, Rosana Sebould, Túlio Marinho

import fileinput
a = 0
for nome in fileinput.input("./lista_nomes.txt"):
    if nome.strip() == "Marcel":
        print ("Encontrei o Marcel")
    else:
        a += 1
        
print ("Encontrei outros ", a, "nomes")