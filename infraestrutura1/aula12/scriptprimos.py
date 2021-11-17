numero = int(input("Digite um numero: "))
divisores = 0
if numero == 0 or numero == 1:
    print("Não é primo")
else:
    for divisor in range(2, numero):
        if numero % divisor == 0:
            divisores = divisores + 1
            if divisores > 1:
                break
    if divisores > 1:
        print("Não é primo")
    else:
        print("É primo")