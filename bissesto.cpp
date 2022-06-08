#include <iostream>

#define NUMERO_DE_MESES (12)
#define FEVEREIRO (2)
#define SUCESSO (0)

// Tipo booleano
typedef unsigned char bool_t;
#define VERDADEIRO (1 == 1)
#define FALSE (!VERDADEIRO)

// Lista com o numero de dias de cada mes
int numeroDeDiasMeses[] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };

bool_t ehBisesto(int ano){
	// Funcao que verifica se o ano eh bissesto
	if((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0)
	{
		return true;
	}
	return false;
}

int numeroDeDiasAteOfimDoAno(int dia, int mes, int ano)
{
	// Aqui contamos os dias de uma determinada data ate o fim do ano
	int numeroDeDias = 0;

	// Primeiramente pegamos os dias do primeiro mes, visto que ele pode estar "picado"
	if (ehBisesto(ano) && mes == 2)
	{
		numeroDeDias = numeroDeDiasMeses[mes] - dia + 2;
	}
	else numeroDeDias = numeroDeDiasMeses[mes] - dia + 1;

	// Aqui andamos mes a mes somando a quantidade de dias de cada mes, ate o fim do ano
	for(int i = mes + 1; i <= NUMERO_DE_MESES; i++){
		if (ehBisesto(ano) && mes == 2)
		{
			numeroDeDias = numeroDeDiasMeses[FEVEREIRO] + 1;
		}
		else numeroDeDias = numeroDeDias + numeroDeDiasMeses[i];
	}

	return numeroDeDias;
}

int numeroDeDiasAteAData(int dia, int mes, int ano)
{
	int numeroDeDias = 0;
	// Funcao que conta o numero de dias do inicio do ano ate uma data

	// Percorremos mes a mes e vamos somando o numero de dias
	for(int i = 1; i < mes; i++){
		if (ehBisesto(ano) && mes == 2)
		{
			numeroDeDias = numeroDeDiasMeses[FEVEREIRO] + 1;
		}
		else numeroDeDias = numeroDeDias + numeroDeDiasMeses[i];
	}

	// para finalizar, no ultimo mes, somamos a quantidade de dias da data, para contemplar casos de dias picados
	numeroDeDias = numeroDeDias + dia;

	return numeroDeDias;
}

int calcularNumeroDeDiasEntreDatas(int diaInicial, int mesInicial, int anoInicial, int diaFinal, int mesFinal, int anoFinal)
{
	// Funcao principal que calcula o numero de dias existentes entre duas datas

	int numeroDeDias = 0;

	// Primeiramente obtemos o numero de dias que existem da data inicial ate o fim do ano inicial
	numeroDeDias = numeroDeDiasAteOfimDoAno(diaInicial, mesInicial, anoInicial);

	// Depois, percorremos os anos que estao entre o ano inicial e o final, e vamos somando a quantidade de dias
	for(int i = anoInicial + 1; i < anoFinal; i++)
	{
		if (ehBisesto(i))
		{
			numeroDeDias = numeroDeDias + 366;
		}

		else numeroDeDias = numeroDeDias + 365;
	}

	// Por fim somamos o numero de dias que existem do ano inicial ate o dia final
	numeroDeDias = numeroDeDias + numeroDeDiasAteAData(diaFinal, mesFinal, anoFinal);

	return numeroDeDias;
}

int main(int argc, char** argv)
{
	// Ignore o printf estranho, Eh do C++
	std::cout << calcularNumeroDeDiasEntreDatas(1, 1, 2016, 1, 1, 2018);
	return 0;
}
