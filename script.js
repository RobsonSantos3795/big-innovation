
/* Pequeno script para o menu responsivo (opcional, mas recomendado) */
/* Você pode adicionar isso em um arquivo JS separado ou no final do body */

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');

    if (menuButton && menu) {
        menuButton.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
});

//Sessão abaixo contem a construção do rolamento de imagem
window.onload = function() {
    var container = document.getElementById('container');
    var scrollAmount = 1; // Quantidade de pixels para rolar
    var delay = 30; // Delay em milissegundos entre cada movimento
    //Define o intervalo de tempo em milissegundos entre cada movimento de rolagem. Neste caso, é 50 milissegundos (0,05 segundos).
  
    function scrollHorizontally() {  //será responsável por mover a rolagem horizontalmente.
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            container.scrollLeft = 0;  //Se o contêiner estiver no final do conteúdo, a rolagem é reiniciada para o início (posição 0)
        } else {
            container.scrollLeft += scrollAmount;
        }
    }
  
    var scrollInterval = setInterval(scrollHorizontally, delay);
  }

    /*  ###  LINKS DE SITES  ###  */
  function a() {
    location.href = "https://wa.me/p/8664205976979849/557191273857";
  }
  function cha() {
    location.href = "index2.html";
  }
  
  
  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const confirmButton = document.getElementById('confirmButton');
  
       // Lista de nomes com links associados
    const namedLinks = [
        { name: 'Desenvolvimento Web', link: 'https://wa.me/p/8664205976979849/557191273857' },
        { name: 'Power Bi', link: 'https://wa.me/p/9520280431384449/557191273857' },
        { name: 'Convite Digital' , link:'https://wa.me/p/7869481383171358/557191273857'},
        { name: 'Ajuda / Consultoria Mobile', link: '' },
        { name: 'Criação de Flayer / Logo Digital', link: '' },
        { name: 'Edição de PDF', link: 'https://wa.me/p/9470641586284891/557191273857' },
        { name: 'Desenvolvimento de currículo', link: '' },
        { name: 'Ajuda online', link: '' },
        { name: 'Análise de dados com Power Bi', link:'' },
        { name: 'Revelação de Fotos 10x15' , link:'https://wa.me/p/8914486361949428/557191273857'},
        { name: 'Sobre nós', link: '' },
        
  
    ];
  
    let selectedLink = '';
  
  // Função para filtrar e mostrar resultados
  function searchNames(query) {
    searchResults.innerHTML = ''; // Limpar resultados anteriores
    if (query) {
        const filteredLinks = namedLinks.filter(linkObj => linkObj.name.toLowerCase().includes(query.toLowerCase()));
        filteredLinks.forEach(linkObj => {
            const div = document.createElement('div');
            div.className = 'resultItem';
            
            const link = document.createElement('a');
            link.href = linkObj.link;
            link.textContent = linkObj.name;
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Prevenir redirecionamento ao clicar
                selectedLink = linkObj;
                searchInput.value = linkObj.name;
                searchResults.innerHTML = '';
            });
            
            div.appendChild(link);
            searchResults.appendChild(div);
        });
    }
  }
  
  // Evento para capturar a entrada do usuário
  searchInput.addEventListener('input', function() {
    const query = searchInput.value;
    searchNames(query);
  });
  
  // Evento para o botão confirmar
  confirmButton.addEventListener('click', function() {
    const query = searchInput.value.toLowerCase();
    const matchedLink = namedLinks.find(linkObj => linkObj.name.toLowerCase() === query);
    
    if (matchedLink) {
        window.location.href = matchedLink.link; // Redirecionar para o link correspondente
    } else {
        alert('Nenhum link correspondente foi encontrado.');
    }
  });
  });
