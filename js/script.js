document.addEventListener('DOMContentLoaded', () => {
    // Função para salvar dados de informações
    const infoForm = document.getElementById('info-form');
    if (infoForm) {
        infoForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const data = new FormData(infoForm);
            const obj = {};
            data.forEach((value, key) => {
                obj[key] = value;
            });
            localStorage.setItem('informacoes', JSON.stringify(obj));
            alert('Informações salvas com sucesso!');
        });

        // Carregar dados das informações
        const savedInfo = JSON.parse(localStorage.getItem('informacoes'));
        if (savedInfo) {
            Object.keys(savedInfo).forEach(key => {
                const textarea = document.getElementById(key);
                if (textarea) textarea.value = savedInfo[key];
            });
        }
    }

    // Função para salvar dados de atributos
    const attributesForm = document.getElementById('attributes-form');
    if (attributesForm) {
        attributesForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const data = new FormData(attributesForm);
            const obj = {};
            data.forEach((value, key) => {
                obj[key] = value;
            });
            localStorage.setItem('atributos', JSON.stringify(obj));
            alert('Atributos salvos com sucesso!');
        });

        // Carregar dados dos atributos
        const savedAttributes = JSON.parse(localStorage.getItem('atributos'));
        if (savedAttributes) {
            Object.keys(savedAttributes).forEach(key => {
                const input = document.getElementById(key);
                if (input) input.value = savedAttributes[key];
            });
        }
    }

    // Função para salvar dados de perícias
    const skillsForm = document.getElementById('skills-form');
    if (skillsForm) {
        skillsForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const data = new FormData(skillsForm);
            const obj = {};
            data.forEach((value, key) => {
                obj[key] = value;
            });
            localStorage.setItem('pericias', JSON.stringify(obj));
            alert('Perícias salvas com sucesso!');
        });

        // Carregar dados das perícias
        const savedSkills = JSON.parse(localStorage.getItem('pericias'));
        if (savedSkills) {
            Object.keys(savedSkills).forEach(key => {
                const input = document.getElementById(key);
                if (input) input.value = savedSkills[key];
            });
        }
    }
});

// Salva os dados no localStorage quando o formulário é enviado
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (!form) return; // Não faz nada se não houver formulário

    // Carrega os dados do localStorage
    for (const input of form.elements) {
        if (input.type !== 'submit') {
            input.value = localStorage.getItem(input.id) || '';
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio do formulário

        // Salva os dados no localStorage
        for (const input of form.elements) {
            if (input.type !== 'submit') {
                localStorage.setItem(input.id, input.value);
            }
        }

        alert('Dados salvos com sucesso!');
    });
});


// Função para salvar dados no localStorage
function saveData() {
    const info1 = document.getElementById('info1').value;
    const info2 = document.getElementById('info2').value;
    const info3 = document.getElementById('info3').value;
    localStorage.setItem('info1', info1);
    localStorage.setItem('info2', info2);
    localStorage.setItem('info3', info3);
}

// Função para carregar dados do localStorage
function loadData() {
    const info1 = localStorage.getItem('info1');
    const info2 = localStorage.getItem('info2');
    const info3 = localStorage.getItem('info3');
    
    if (info1) document.getElementById('info1').value = info1;
    if (info2) document.getElementById('info2').value = info2;
    if (info3) document.getElementById('info3').value = info3;
}

// Salvar dados quando o usuário sai da página
window.addEventListener('beforeunload', saveData);

// Carregar dados quando a página é carregada
window.addEventListener('load', loadData);

// Função para salvar os dados do formulário no localStorage
function saveFormData() {
    const formData = {
        nome: document.getElementById('nome').value,
        raca: document.getElementById('raca').value,
        classe: document.getElementById('classe').value,
        dfd: document.getElementById('dfd').value,
        vidaAtual: document.getElementById('vida-atual').value,
        vidaMaxima: document.getElementById('vida-maxima').value,
        sanidadeAtual: document.getElementById('sanidade-atual').value,
        sanidadeMaxima: document.getElementById('sanidade-maxima').value,
        manaAtual: document.getElementById('mana-atual').value,
        manaMaxima: document.getElementById('mana-maxima').value,
        defesa: document.getElementById('defesa').value,
        deslocamento: document.getElementById('deslocamento').value
    };
    
    localStorage.setItem('ficha', JSON.stringify(formData));
}

// Função para carregar os dados do formulário do localStorage
function loadFormData() {
    const savedData = localStorage.getItem('ficha');
    if (savedData) {
        const formData = JSON.parse(savedData);
        document.getElementById('nome').value = formData.nome || '';
        document.getElementById('raca').value = formData.raca || '';
        document.getElementById('classe').value = formData.classe || '';
        document.getElementById('dfd').value = formData.dfd || '';
        document.getElementById('vida-atual').value = formData.vidaAtual || '';
        document.getElementById('vida-maxima').value = formData.vidaMaxima || '';
        document.getElementById('sanidade-atual').value = formData.sanidadeAtual || '';
        document.getElementById('sanidade-maxima').value = formData.sanidadeMaxima || '';
        document.getElementById('mana-atual').value = formData.manaAtual || '';
        document.getElementById('mana-maxima').value = formData.manaMaxima || '';
        document.getElementById('defesa').value = formData.defesa || '';
        document.getElementById('deslocamento').value = formData.deslocamento || '';
    }
}

// Evento para salvar os dados quando o formulário é enviado
document.getElementById('ficha-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    saveFormData();
    document.getElementById('feedback').classList.remove('hidden');
});

// Carregar os dados quando a página é carregada
window.addEventListener('load', loadFormData);

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('character-form');
    const feedback = document.getElementById('feedback');

    // Função para preencher o formulário com dados do Local Storage
    function loadFormData() {
        const formData = JSON.parse(localStorage.getItem('characterData'));
        if (formData) {
            Object.keys(formData).forEach(key => {
                const input = document.getElementById(key);
                if (input) {
                    input.value = formData[key];
                }
            });
        }
    }

    // Função para salvar os dados do formulário no Local Storage
    function saveFormData() {
        const formData = {};
        const inputs = form.querySelectorAll('input');
        inputs.forEach(input => {
            formData[input.id] = input.value;
        });
        localStorage.setItem('characterData', JSON.stringify(formData));
    }

    // Evento de envio do formulário
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita o envio padrão do formulário
        saveFormData();
        feedback.classList.remove('hidden');
        setTimeout(() => {
            feedback.classList.add('hidden');
        }, 2000); // Feedback visível por 2 segundos
    });

    // Carregar dados quando a página é carregada
    loadFormData();
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('weapons-form');
    const feedback = document.getElementById('feedback');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const weapons = [];
        for (let i = 1; i <= 4; i++) {
            const weapon = {
                nome: document.getElementById(`nome_arma${i}`).value,
                dano: document.getElementById(`dano_arma${i}`).value,
                alcance: document.getElementById(`alcance_arma${i}`).value,
                critico: document.getElementById(`critico_arma${i}`).value,
                peso: document.getElementById(`peso_arma${i}`).value,
                tipo: document.getElementById(`tipo_arma${i}`).value,
                categoria: document.getElementById(`categoria_arma${i}`).value,
            };
            weapons.push(weapon);
        }

        localStorage.setItem('weapons', JSON.stringify(weapons));

        feedback.classList.remove('hidden');
        setTimeout(() => feedback.classList.add('hidden'), 3000);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('backpack-form');
    const feedback = document.getElementById('feedback');
    const descricaoInput = document.getElementById('descricao_item');

    // Função para carregar os dados do localStorage
    function loadData() {
        const descricao = localStorage.getItem('descricao_item');
        if (descricao) {
            descricaoInput.value = descricao;
        }
    }

    // Carregar dados ao iniciar a página
    loadData();

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Salvar os dados no localStorage
        localStorage.setItem('descricao_item', descricaoInput.value);

        // Exibir feedback
        feedback.classList.remove('hidden');
        setTimeout(() => {
            feedback.classList.add('hidden');
        }, 3000); // Ocultar feedback após 3 segundos
    });
});

// script.js

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Open the default tab
document.querySelector('.tablink').click();

// armas.js

// Função para salvar os dados do formulário no localStorage
function saveFormData() {
    const armasData = [];
    for (let i = 1; i <= 4; i++) {
        armasData.push({
            nome: document.getElementById(`nome_arma${i}`).value,
            dano: document.getElementById(`dano_arma${i}`).value,
            alcance: document.getElementById(`alcance_arma${i}`).value,
            critico: document.getElementById(`critico_arma${i}`).value,
            peso: document.getElementById(`peso_arma${i}`).value,
            tipo: document.getElementById(`tipo_arma${i}`).value,
            categoria: document.getElementById(`categoria_arma${i}`).value,
        });
    }
    localStorage.setItem('armasData', JSON.stringify(armasData));
}

// Função para carregar os dados do formulário do localStorage
function loadFormData() {
    const armasData = JSON.parse(localStorage.getItem('armasData'));
    if (armasData) {
        armasData.forEach((arma, index) => {
            if (arma) {
                document.getElementById(`nome_arma${index + 1}`).value = arma.nome;
                document.getElementById(`dano_arma${index + 1}`).value = arma.dano;
                document.getElementById(`alcance_arma${index + 1}`).value = arma.alcance;
                document.getElementById(`critico_arma${index + 1}`).value = arma.critico;
                document.getElementById(`peso_arma${index + 1}`).value = arma.peso;
                document.getElementById(`tipo_arma${index + 1}`).value = arma.tipo;
                document.getElementById(`categoria_arma${index + 1}`).value = arma.categoria;
            }
        });
    }
}

// Função para exibir feedback para o usuário
function showFeedback(message) {
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.textContent = message;
    feedbackElement.classList.remove('hidden');
    setTimeout(() => {
        feedbackElement.classList.add('hidden');
    }, 3000);
}

// Adicionar event listener para o formulário
document.getElementById('weapons-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o envio padrão do formulário
    saveFormData();
    showFeedback('Armas salvas com sucesso!');
});

// Carregar os dados do formulário quando a página for carregada
document.addEventListener('DOMContentLoaded', loadFormData);

// Função para salvar os dados do formulário no localStorage
function saveFormData() {
    const formData = {};
    const inputs = document.querySelectorAll('#character-form input');
    
    inputs.forEach(input => {
        formData[input.id] = input.value;
    });

    localStorage.setItem('characterData', JSON.stringify(formData));
}

// Função para carregar os dados do formulário do localStorage
function loadFormData() {
    const savedData = localStorage.getItem('characterData');
    if (savedData) {
        const formData = JSON.parse(savedData);
        Object.keys(formData).forEach(key => {
            const input = document.getElementById(key);
            if (input) {
                input.value = formData[key] || '';
            }
        });
    }
}

// Evento para salvar os dados quando o formulário é enviado
document.getElementById('character-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário
    saveFormData();
    document.getElementById('feedback').classList.remove('hidden');
    setTimeout(() => document.getElementById('feedback').classList.add('hidden'), 3000);
});

// Carregar os dados quando a página é carregada
window.addEventListener('load', loadFormData);
