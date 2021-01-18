window.onload = function (){
    let state = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
    'PA', 'PB', 'PR', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE',
    'TO', 'DF',];
    generateState(state); 
    checkEntry()  
}

function generateState(state){
    let searchState = document.querySelector('.state');
    for (let i = 0; i < state.length; i += 1) {
    let option = document.createElement('option')
    option.appendChild(document.createTextNode(state[i]))
    searchState.appendChild(option)
}

}
function checkEntry() {
    const submit = document.getElementById('button');
    submit.addEventListener('click', startDate);
  }



function startDate(event) {
    const dateInput = document.getElementById('date-start');
    let dateValue = dateInput.value;
      if (dateValue.substring(0,2) < 0 || dateValue.substring(0,2) > 31) {
        event.preventDefault();
        alert('Dia informado inválido.')
      } else if (dateValue.substring(3,5) < 0 || dateValue.substring(3,5) > 12) {
        event.preventDefault();
        alert('Mes informado inválido')
      } else if (dateValue.substring(6) < 0 || isNaN(dateValue.substring(6))) {
        event.preventDefault();
        alert('Ano informado inválido.')
      }
  }





