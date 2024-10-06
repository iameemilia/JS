const button = document.querySelector('.button');
const total = document.querySelector('.total');

let interestRate = 18.5;

const deposit = '30000';

const growth = '150';

const currency = 'руб';

button.addEventListener('click', () => {
  const sum = document.querySelector('.sum').value;
const result = calculateTotal(sum, interestRate, deposit, growth, currency);
  total.textContent = result;
});

function calculateTotal(sum, interestRate, deposit, growth, currency) {
  const sumNumber = Number(sum);

  const interestEarned = (sumNumber * interestRate / 100) / 12;

  const totalAmount = sumNumber + interestEarned + Number(deposit) + Number(growth);

  const formattedTotal = totalAmount.toFixed(2) + ' ' + currency;

  return `Через год у вас будет ${formattedTotal} на счету`;
}