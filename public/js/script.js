let inp = document.getElementById('myInput')

inp.addEventListener('keyup', pesquisarLivro)

function pesquisarLivro() {
    // Variáveis
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('tabela');
    tr = table.getElementsByTagName('tr');
  
    //Comparar o campo do input com o campo da tabela
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  }

  let inp2 = document.getElementById('myInput2')

inp2.addEventListener('keyup', pesquisarLivro2)

function pesquisarLivro2() {
    // Variáveis
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById('myInput2');
    filter = input.value.toUpperCase();
    table = document.getElementById('tabela');
    tr = table.getElementsByTagName('tr');
  
    //Comparar o campo do input com o campo da tabela
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  }
