function calcularIdade() {
    const diaNascimento = document.getElementById('dianascimento').value;
    const mesNascimento = document.getElementById('mesNascimento').value - 1;
    const anoNascimento = document.getElementById('anoNascimento').value;

    const dataNascimento = new Date(anoNascimento, mesNascimento, diaNascimento);
    const dataAtual = new Date();

    if (isNaN(dataNascimento.getTime())) {
        alert('Data de nascimento inválida!');
        return;
    }

    let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

    if (dataAtual.getMonth() < dataNascimento.getMonth() ||
        (dataAtual.getMonth() === dataNascimento.getMonth() && dataAtual.getDate() < dataNascimento.getDate())) {
        idade--;
    }

    document.getElementById('resultado').textContent = `Você tem ${idade} anos.`;
}
