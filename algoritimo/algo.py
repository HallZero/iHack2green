# Função para calcular a quantidade de CO2 evitada ao usar hidrogênio verde
def calcular_emissao_evitada(hidrogenio_verde, fonte_convencional):
    # Fatores de emissão em kg de CO2 por unidade de energia
    fator_emissao_hidrogenio_verde = 0.01  # Exemplo: 0.01 kg CO2/MJ
    fator_emissao_fonte_convencional = 0.3  # Exemplo: 0.3 kg CO2/MJ

    # Calcula a quantidade de CO2 evitada
    emissao_evitada = (hidrogenio_verde * fator_emissao_hidrogenio_verde) - \
        (fonte_convencional * fator_emissao_fonte_convencional)
    return emissao_evitada

# Função para calcular a projeção anual de CO2 evitada


def calcular_emissao_evitada_anual(hidrogenio_verde_anual, fonte_convencional_anual):
    emissao_evitada_anual = calcular_emissao_evitada(
        hidrogenio_verde_anual, fonte_convencional_anual)
    return emissao_evitada_anual


# Entrada de dados
hidrogenio_verde_consumido = float(
    input("Digite a quantidade de hidrogênio verde consumido (em MJ): "))
fonte_convencional_utilizada = float(input(
    "Digite a quantidade de energia proveniente da fonte convencional (em MJ): "))
ano = int(input("Digite o ano: "))

# Cálculo da emissão evitada
emissao_evitada = calcular_emissao_evitada(
    hidrogenio_verde_consumido, fonte_convencional_utilizada)
emissao_evitada_anual = calcular_emissao_evitada_anual(
    hidrogenio_verde_consumido * 365, fonte_convencional_utilizada * 365)

# Saída de dados
print(f"Ao utilizar {hidrogenio_verde_consumido} MJ de hidrogênio verde em vez da fonte convencional, "
      f"seria evitada a emissão de {emissao_evitada} kg de CO2 no ano de {ano}.")

print(f"Projeção anual:")
print(f"Ao utilizar {hidrogenio_verde_consumido * 365} MJ de hidrogênio verde em vez da fonte convencional, "
      f"seria evitada a emissão de {emissao_evitada_anual} kg de CO2 no ano de {ano}.")
