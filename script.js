function agendarMentoria(mentorNome) {
    alert(`Você está agendando uma mentoria com ${mentorNome}\n\nEsta funcionalidade seria implementada com:\n- Calendário de disponibilidade\n- Sistema de pagamento\n- Confirmação por e-mail`);
}

// Adiciona event listeners para os filtros
document.getElementById('areaFilter').addEventListener('change', filtrarMentores);
document.getElementById('priceFilter').addEventListener('change', filtrarMentores);
document.getElementById('ratingFilter').addEventListener('change', filtrarMentores);

function filtrarMentores() {
    const areaSelecionada = document.getElementById('areaFilter').value;
    const precoSelecionado = document.getElementById('priceFilter').value;
    const avaliacaoSelecionada = document.getElementById('ratingFilter').value;
    
    const mentores = document.querySelectorAll('.mentor-card');
    
    mentores.forEach(mentor => {
        const areaMentor = mentor.getAttribute('data-area');
        const precoMentor = parseFloat(mentor.getAttribute('data-price'));
        const avaliacaoMentor = parseFloat(mentor.getAttribute('data-rating'));
        
        let areaMatch = false;
        let precoMatch = false;
        let avaliacaoMatch = false;
        
        // Verifica filtro de área
        if (areaSelecionada === 'todas') {
            areaMatch = true;
        } else {
            const areas = areaMentor.split(' ');
            areaMatch = areas.includes(areaSelecionada);
        }
        
        // Verifica filtro de preço
        switch(precoSelecionado) {
            case 'qualquer':
                precoMatch = true;
                break;
            case 'ate30':
                precoMatch = precoMentor <= 30;
                break;
            case '30a50':
                precoMatch = precoMentor >= 30 && precoMentor <= 50;
                break;
            case 'acima50':
                precoMatch = precoMentor > 50;
                break;
        }
        
        // Verifica filtro de avaliação
        switch(avaliacaoSelecionada) {
            case 'qualquer':
                avaliacaoMatch = true;
                break;
            case '4mais':
                avaliacaoMatch = avaliacaoMentor >= 4;
                break;
            case '3mais':
                avaliacaoMatch = avaliacaoMentor >= 3;
                break;
        }
        
        // Mostra ou esconde o mentor baseado nos filtros
        if (areaMatch && precoMatch && avaliacaoMatch) {
            mentor.classList.remove('hidden');
        } else {
            mentor.classList.add('hidden');
        }
    });
}

// Inicializa os filtros ao carregar a página
document.addEventListener('DOMContentLoaded', filtrarMentores);
